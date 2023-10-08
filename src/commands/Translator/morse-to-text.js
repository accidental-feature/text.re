const { SlashCommandBuilder } = require('discord.js');

const morseCodeToLetter = {
	".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E",
	"..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J",
	"-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O",
	".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
	"..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y",
	"--..": "Z", "-----": "0", ".----": "1", "..---": "2",
	"...--": "3", "....-": "4", ".....": "5", "-....": "6",
	"--...": "7", "---..": "8", "----.": "9"
};

module.exports = {
	data: new SlashCommandBuilder()
	.setName('morse2text')
	.setDescription('Converts morse code to text.')
	.addStringOption(option => option
		.setName('morse')
		.setDescription('Morse to decode.')
		.setRequired(true)
	),
	async execute(interaction) {
		const morseCode = interaction.options.getString('morse');
		const words = morseCode.split(" / ");
		let decodedText = "";
	
		for (const word of words) {
			const letters = word.split(" ");
			for (const letter of letters) {
				if (morseCodeToLetter.hasOwnProperty(letter)) {
					decodedText += morseCodeToLetter[letter];
				} else if (letter === "") {
					decodedText += " ";
				} else {
					return "Invalid Morse code input";
				}
			}
			decodedText += " ";
		}

		interaction.reply({ content: decodedText.trim() });
	}
}