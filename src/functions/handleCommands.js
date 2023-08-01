const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require('fs');

// Takes client as param
module.exports = (client) => {
  client.handleCommands = async (commandFolders, path) => {
		client.commandArray = [];
		for (folder of commandFolders) {
			const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith('.js'));
			// Each command within /commands/FOLDERNAME is added to commands array
			for (const file of commandFiles) {
				const command = require(`../commands/${folder}/${file}`);
				client.commands.set(command.data.name, command);
				client.commandArray.push(command.data.toJSON());
			}
		}

		const rest = new REST({
			version: '9'
		}).setToken(process.env.BOT_TOKEN);

		(async () => {
			try {
				console.log('Started refreshing application (/) commands.');

				await rest.put(
					// Deletes all global commands
					Routes.applicationCommands(process.env.BOT_ID), {
						body: []
					},
				);

				await rest.put(
					// Global **Only use once or will have to delete all (body: [])**
					Routes.applicationCommands(process.env.BOT_ID), {
						body: client.commandArray
					},
				);

				console.log('Successfully reloaded application (/) commands.');
			} catch (error) {
				console.error(error);
			}
		})();
  }
};