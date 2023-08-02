const { EmbedBuilder } = require("discord.js");
module.exports = {
    name: "interactionCreate",
    once: false,
    async execute(client, interaction) {
        const Discord = require("discord.js")

        if (!interaction.guild) return
       
                const command = client.commands.get(interaction.commandName);
                if (!interaction.isChatInputCommand()) return;
                if (!command) return; 
                
                try {
                    await command.execute(interaction)
                    
                } catch (error) {
                    console.error(error)
                    return interaction.reply({
                        content:
                            "Error:\n \n``` js " +
                            error +
                            "```",
                        ephemeral: true,
                    })
                }
            }
}
