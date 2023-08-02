const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('basic ping command'),
	async execute(interaction) {
		const ping = interaction.client.ws.ping;
		const pingy = new EmbedBuilder()
			.setColor('Random')
			.setTitle("ping")
			.setDescription(`${ping}ms `)
			.setTimestamp()
		return interaction.reply({ embeds: [pingy] });
	
	},
};
