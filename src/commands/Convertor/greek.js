const { SlashCommandBuilder } = require('@discordjs/builders');
const map = {
	a:'α',b:'β',d:'δ',e:'ε',
	i:'ι',k:'κ',n:'η',o:'θ',
	p:'ρ',r:'π',t:'τ',u:'μ',
	char:'υ',w:'ω',x:'χ',y:'γ'
};

module.exports = {
	data: new SlashCommandBuilder()
	.setName('text2greek')
	.setDescription('Converts text to greek.')
	.addStringOption(option => option
		.setName('text')
		.setDescription('The text to convert to greek.')
		.setMaxLength(280)
		.setRequired(true)
	),
	async execute(interaction) {
		const text = interaction.options.getString('text');

		interaction.reply(
			text.replace(/./g, char => {
				if (map[char.toLowerCase()]){
					return char === char.toUpperCase() ? map[char.toLowerCase()] : map[char];
				};
      	return char.toLowerCase();
   		})
	 	);
	}
}