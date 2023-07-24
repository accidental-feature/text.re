const { 
	Client, Collection, GatewayIntentBits
} = require('discord.js');
const fs = require('node:fs');
require('dotenv').config();

// Initializes client and intents (perms)
const client = new Client({ intents: [
	GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageReactions
] })

// Initializes client's collections i.e. commands, events, etc.
client.commands = new Collection();
const commandFolders = fs.readdirSync('./src/commands');

(async () => {
	require('./handleCommands')(client);
	client.handleCommands(commandFolders, "./src/commands");
	client.login(process.env.BOT_TOKEN)
})();
