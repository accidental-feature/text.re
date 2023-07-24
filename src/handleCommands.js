const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require('fs');

const clientId = process.env.BOT_ID;
const guildId = process.env.GUILD_ID;
// Takes client as param
module.exports = (client) => {
  client.handleCommands = async (commandFolders, path) => {
		client.commandArray = [];
		const commandFiles = fs.readdirSync(`${path}`).filter(file => file.endsWith('.js'));
		// Each command within /commands/FOLDERNAME is added to commands array
		for (const file of commandFiles) {
			const command = require(`./commands/${file}`);
			client.commands.set(command.data.name, command);
			client.commandArray.push(command.data.toJSON());
		}
	
		const rest = new REST({ version: "9" }).setToken(process.env.BOT_TOKEN);

		(async () => {
			try {
				// Delete all global commands
				rest.put(Routes.applicationCommands(clientId), { body: [] })
				.then(() => console.log('Successfully deleted all application commands.'))
				.catch(console.error);
		
				console.log(`Started refreshing application (/) commands.`);
		
				// Add the commands to Bots Application (Global)
				rest.put(
					Routes.applicationGuildCommands(clientId, guildId),
					{ body: client.commandArray },
				);
		
				console.log(`Successfully reloaded application (/) commands.`);
			} catch (error) {
				// And of course, make sure you catch and log any errors!
				console.error(error);
			}
		})();
    };
};