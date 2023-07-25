const { SlashCommandBuilder } = require('@discordjs/builders');

const superscriptMap = {
	'0': '⁰',
	'1': '¹',
	'2': '²',
	'3': '³',
	'4': '⁴',
	'5': '⁵',
	'6': '⁶',
	'7': '⁷',
	'8': '⁸',
	'9': '⁹',
	'+': '⁺',
	'-': '⁻',
	'=': '⁼',
	'(': '⁽',
	')': '⁾',
	'a': 'ᵃ',
	'b': 'ᵇ',
	'c': 'ᶜ',
	'd': 'ᵈ',
	'e': 'ᵉ',
	'f': 'ᶠ',
	'g': 'ᵍ',
	'h': 'ʰ',
	'i': 'ⁱ',
	'j': 'ʲ',
	'k': 'ᵏ',
	'l': 'ˡ',
	'm': 'ᵐ',
	'n': 'ⁿ',
	'o': 'ᵒ',
	'p': 'ᵖ',
	'r': 'ʳ',
	's': 'ˢ',
	't': 'ᵗ',
	'u': 'ᵘ',
	'v': 'ᵛ',
	'w': 'ʷ',
	'x': 'ˣ',
	'y': 'ʸ',
	'z': 'ᶻ',
};

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
		interaction.reply(
			text
			.split('')
			.map((char) => superscriptMap[char] || char)
			.join('')
		);
	}
}