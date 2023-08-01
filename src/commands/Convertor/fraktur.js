const { SlashCommandBuilder } = require('@discordjs/builders');

const frakturMap = {
	'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈',
	'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍',
	'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒',
	'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗',
	'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜',
	'Z': 'ℨ', 'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡',
	'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦',
	'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫',
	'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰',
	't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵',
	'y': '𝔶', 'z': '𝔷'
};

module.exports = {
	data: new SlashCommandBuilder()
	.setName('text2fraktur')
	.setDescription('𝕮𝖔𝖓𝖛𝖊𝖗𝖙𝖘 𝖙𝖊𝖝𝖙 𝖙𝖔 𝖋𝖗𝖆𝖐𝖙𝖚𝖗.')
	.addStringOption(option => option
		.setName('text')
		.setDescription('The text to convert to fraktur.')
		.setMaxLength(280)
		.setRequired(true)
	),
	async execute(interaction) {
		const text = interaction.options.getString('text');

		interaction.reply(
			text.split('')
			.map((char) => frakturMap[char] || char)
			.join('')
		)
	}
}