const { 
	Client, Collection, GatewayIntentBits
} = require('discord.js');
const fs = require('fs');
require('dotenv').config();

// Initializes client and intents (perms)
const client = new Client({ intents: [
	GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageReactions
] })

client.commands = new Collection();

// All functions, event and commands files
const functions = fs.readdirSync('./src/functions').filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync('./src/commands');

(async () => {
	for(file of functions) {
		require(`./functions/${file}`)(client);
	}
	// Handles all events and commands
	client.handleEvents(eventFiles, "./src/events");
	client.handleCommands(commandFolders, "./src/commands");
	client.login(process.env.BOT_TOKEN)
})();