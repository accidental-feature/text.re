const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');

const morseCode = {
	"A": ".-",
	"B": "-...",
	"C": "-.-.",
	"D": "-..",
	"E": ".",
	"F": "..-.",
	"G": "--.",
	"H": "....",
	"I": "..",
	"J": ".---",
	"K": "-.-",
	"L": ".-..",
	"M": "--",
	"N": "-.",
	"O": "---",
	"P": ".--.",
	"Q": "--.-",
	"R": ".-.",
	"S": "...",
	"T": "-",
	"U": "..-",
	"W": ".--",
	"X": "-..-",
	"Y": "-.--",
	"Z": "--.."
}

module.exports = {
	data: new SlashCommandBuilder()
	.setName('text2morse')
	.setDescription('Converts text to morse code.')
	.addStringOption(option => option
		.setName('text')
		.setDescription('The text to convert to morse code.')
		.setMaxLength(280)
		.setRequired(true)
	),
	async execute(interaction) {
		const text = interaction.options.getString('text');
		
		// Converts text to morse code
		const morseText = text.toUpperCase().split("").map(letter => {
      return morseCode[letter] ? morseCode[letter] : letter;
   	}).join("");

		console.log(morseText);
		interaction.reply({ content: morseText });
	}
}