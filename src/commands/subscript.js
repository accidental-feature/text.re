const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('text2subscript')
	.setDescription('Converts text to subscript.')
	.addStringOption(option => option
		.setName('text')
		.setDescription('The text to convert to subscript.')
		.setMaxLength(280)
		.setRequired(true)
	),
	async execute(interaction) {
		const text = interaction.options.getString('text');
		interaction.reply({ content: text.sub() });
	}
}