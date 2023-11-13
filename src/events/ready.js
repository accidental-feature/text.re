module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log('Bot is Online...');
		
		// Sets status to random option from array
		(async() => {
			const statusArray = [ 
				'/fun-text',
				'/english-to',
				'/piglatin',
			];
			const option = Math.floor(Math.random() * statusArray.length);

			try {
				await client.user.setPresence({
					activities: [{ name: statusArray[option] }]})
			} catch (error) {
				console.error(error);
			}
		})();
	},
};