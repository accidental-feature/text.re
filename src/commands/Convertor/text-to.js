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
const cursiveMap = {
	'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮',
	'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳',
	'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸',
	'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽',
	'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂',
	'z': '𝔃', 'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓',
	'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘',
	'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝',
	'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢',
	'T': '𝓣', 'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧',
	'Y': '𝓨', 'Z': '𝓩'
};
const greekMap = {
	a:'α',b:'β',d:'δ',e:'ε',
	i:'ι',k:'κ',n:'η',o:'θ',
	p:'ρ',r:'π',t:'τ',u:'μ',
	char:'υ',w:'ω',x:'χ',y:'γ'
};
const smallCapsMap = {
	'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ',
	'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ',
	'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ',
	'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ',
	'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ',
	'Z': 'ᴢ',
};

module.exports = {
	data: new SlashCommandBuilder()
	.setName('text-to')
	.setDescription('Create cool text.')
	.addSubcommand(command => command
		.setName('superscript')
		.setDescription('Cᵒⁿᵛᵉʳᵗˢ ᵗᵉˣᵗ ᵗᵒ ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ.')
		.addStringOption(option => option
			.setName('text')
			.setDescription('The text to convert.')
			.setMaxLength(280)
			.setRequired(true)
		)
	)
	.addSubcommand(command => command
		.setName('subscript')
		.setDescription('Cₒₙvₑᵣₜₛ ₜₑxₜ ₜₒ ₛubₛcᵣᵢₚₜ.')
		.addStringOption(option => option
			.setName('text')
			.setDescription('The text to convert.')
			.setMaxLength(280)
			.setRequired(true)
		)
	)
	.addSubcommand(command => command
		.setName('fraktur')
		.setDescription('𝕮𝖔𝖓𝖛𝖊𝖗𝖙𝖘 𝖙𝖊𝖝𝖙 𝖙𝖔 𝖋𝖗𝖆𝖐𝖙𝖚𝖗.')
		.addStringOption(option => option
			.setName('text')
			.setDescription('The text to convert.')
			.setMaxLength(280)
			.setRequired(true)
		)
	)
	.addSubcommand(command => command
		.setName('fancy')
		.setDescription('𝓒𝓸𝓷𝓿𝓮𝓻𝓽𝓼 𝓽𝓮𝔁𝓽 𝓽𝓸 𝓬𝓾𝓻𝓼𝓲𝓿𝓮 𝓼𝓽𝔂𝓵𝓮𝓭 𝓽𝓮𝔁𝓽.')
		.addStringOption(option => option
			.setName('text')
			.setDescription('The text to convert.')
			.setMaxLength(280)
			.setRequired(true)
		)
	)
	.addSubcommand(command => command
		.setName('greek')
		.setDescription('cθηvεπτs τεχτ τθ gπεεκ.')
		.addStringOption(option => option
			.setName('text')
			.setDescription('The text to convert.')
			.setMaxLength(280)
			.setRequired(true)
		)
	)
	.addSubcommand(command => command
		.setName('smallcaps')
		.setDescription('ᴄᴏɴᴠᴇʀᴛs ᴛᴇxᴛ ᴛᴏ sᴍᴀʟʟᴄᴀᴘs.')
		.addStringOption(option => option
			.setName('text')
			.setDescription('The text to convert.')
			.setMaxLength(280)
			.setRequired(true)
		)
	),
	async execute(interaction) {
		const subcommand = interaction.options.getSubcommand();
		const text = interaction.options.getString('text');

		switch (subcommand) {
			case 'superscript':
				interaction.reply(
					text
					.split('')
					.map((char) => superscriptMap[char] || char)
					.join('')
				);
				break;
			case 'subscript':
				interaction.reply({ content: 
					text
					.split('')
					.map((char) => subscriptMap[char] || char)
					.join('') 
				});
				break;
			case 'fraktur':
				interaction.reply(
					text.split('')
					.map((char) => frakturMap[char] || char)
					.join('')
				);
				break;
			case 'fancy':
				interaction.reply(
					text.split('')
					.map((char) => cursiveMap[char] || char)
					.join('')
				)
				break;
			case 'greek':
				interaction.reply(
					text.split('')
					.map((char) => greekMap[char] || char)
					.join('')
				)
				break;
			case 'smallcaps':
				interaction.reply(
					text.split('')
					.map((char) => smallCapsMap[char] || char)
					.join('')
				)
				break;
			default:
				interaction.reply('Invalid subcommand.');
				break;
		}
		
	}
}