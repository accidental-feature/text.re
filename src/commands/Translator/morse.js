const { SlashCommandBuilder } = require('discord.js');

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
	.setName('morse')
	.setDescription('Converts text to morse code.')
	.addStringOption(option => option
		.setName('text')
		.setDescription('Text to covert to morse code.')
		.setRequired(true)
	),
	async execute(interaction) {
		const text = interaction.options.getString('text');

		// Converts text to morse code
		const morseText = text.toUpperCase().split("").map(letter => {
      return morseCode[letter] ? morseCode[letter] : letter;
   	}).join("");

		interaction.reply({ content: morseText });
	}
}