const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const axios = require('axios');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('english-to')
	.setDescription('Translates english text into other languages.')
	.addSubcommand(command => command
		.setName('spanish')
		.setDescription('Translates text to spanish.')
		.addStringOption(option => option
			.setName('text')
			.setDescription('The text to translate.')
			.setRequired(true)
		)
	)
	.addSubcommand(command => command
		.setName('german')
		.setDescription('Translates text to german.')
		.addStringOption(option => option
			.setName('text')
			.setDescription('The text to translate.')
			.setRequired(true)
		)
	)
	.addSubcommand(command => command
		.setName('french')
		.setDescription('Translates text to french.')
		.addStringOption(option => option
			.setName('text')
			.setDescription('The text to translate.')
			.setRequired(true)
		)
	)
	.addSubcommand(command => command
		.setName('japanese')
		.setDescription('Translates text to japanese.')
		.addStringOption(option => option
			.setName('text')
			.setDescription('The text to translate.')
			.setRequired(true)
		)
	),
	async execute(interaction) {
		const subcommand = interaction.options.getSubcommand();
		const text = interaction.options.getString('text');
		const isEnglish = /^[A-Za-z\s]+$/.test(text);
		let targetLang = '';
		await interaction.deferReply();

		if(!isEnglish) { 
			interaction.editReply('Invalid text. Please enter only english characters.');
			return;
		}

		switch (subcommand) { 
			case 'spanish':
				targetLang = 'es';
				break;
			case 'german':
				targetLang = 'de';
				break;
			case 'french':
				targetLang = 'fr';
				break;
			case 'japanese':
				targetLang = 'ja';
				break;
			default:
				interaction.editReply('Invalid subcommand.');
				break;
		}

		const encodedParams = new URLSearchParams();
		encodedParams.set("q", text);
		encodedParams.set("source", "en");
		encodedParams.set("target", targetLang);

		const options = {
			method: 'POST',
			url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				'Accept-Encoding': 'application/gzip',
				'X-RapidAPI-Key': process.env.RAPID_API_KEY,
				'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
			},
			data: encodedParams,
		};

		try {
			const response = await axios.request(options);
			const embed = new EmbedBuilder()
			.setTitle('Translation')
			.setColor('#0099ff')
			.addFields(
				{name: 'Original Text:', value: text, inline: false},
				{
					name: `Translated Text to ${subcommand.charAt(0).toUpperCase() + subcommand.slice(1)}:`, 
					value: response.data.data.translations[0].translatedText, inline: false
				}
			)
			.setTimestamp();

			interaction.editReply({ embeds: [embed], ephemeral: true });
		} catch (error) {
			interaction.editReply('An error occurred while translating the text.');
			console.log(error);
		}
	}
}