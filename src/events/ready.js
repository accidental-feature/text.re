module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log('Bot is Online...');
		
		// Sets status to random option from array
		(async() => {
			const statusArray = [ 
				'/text2greek',
				'/text2morse',
				'/text2subscript',
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