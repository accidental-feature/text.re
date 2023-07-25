const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');
const subscriptMap = {
	'0': '₀',
	'1': '₁',
	'2': '₂',
	'3': '₃',
	'4': '₄',
	'5': '₅',
	'6': '₆',
	'7': '₇',
	'8': '₈',
	'9': '₉',
	'+': '₊',
	'-': '₋',
	'=': '₌',
	'(': '₍',
	')': '₎',
	'a': 'ₐ',
	'e': 'ₑ',
	'h': 'ₕ',
	'i': 'ᵢ',
	'j': 'ⱼ',
	'k': 'ₖ',
	'l': 'ₗ',
	'm': 'ₘ',
	'n': 'ₙ',
	'o': 'ₒ',
	'p': 'ₚ',
	'r': 'ᵣ',
	's': 'ₛ',
	't': 'ₜ',
};

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
		interaction.reply({ content: 
			text
			.split('')
			.map((char) => subscriptMap[char] || char)
			.join('') 
		});
	}
}