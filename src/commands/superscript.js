const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('text2super')
	.setDescription('Converts text to superscript.')
	.addStringOption(option => option
		.setName('text')
		.setDescription('The text to convert to superscript.')
		.setMaxLength(280)
		.setRequired(true)
	),
	async execute(interaction) {
		const text = interaction.options.getString('text');
		interaction.reply(text.sup());
	}
}