const { ActivityType } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {

        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            client.commands.set(command.data.name, command);
        }
        // This will change your bot's status every 5 seconds. Put the statuses as you wish.
        const activities = [
          `Yours status`,
          `Your Status`
          //y'all can add more ig
        ];
        let i = 0;
        const type = ActivityType.Listening
        setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`,{ type }), 5000);
    },
}
console.log("Ready!")
