const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('piglatin')
	.setDescription('Translates text to pig latin.')
	.addStringOption(option => option
		.setName('text')
		.setDescription('The text to translate.')
		.setRequired(true)
	),
	async execute(interaction) {
		let userText = interaction.options.getString('text');
		await interaction.deferReply({ ephemeral: true });

		function translatePigLatin(str) {
			let vowels = ['a', 'e', 'i', 'o', 'u'];
			let newStr = "";
		
			if (vowels.indexOf(str[0]) > -1) {
					newStr = str + "way";
					return newStr;
			} else {
					let firstMatch = str.match(/[aeiou]/g) || 0;
					let vowel = str.indexOf(firstMatch[0]);
					newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
					return newStr;
			}
		}
		let translatedText = translatePigLatin(userText);
		
		await interaction.editReply(`**OG Text**: ${userText}\n**Pig Latin**: ${translatedText}`);
	}
}