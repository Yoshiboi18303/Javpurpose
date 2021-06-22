const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')
const config = require('../storage/config.json')

module.exports = {
    name: "credits",
    aliases: [],
    description: "The final Credits for Javpurpose!",
    execute(client, message, args) {

        const creditsEmbed = new MessageEmbed()
         creditsEmbed.setColor("RANDOM")
         creditsEmbed.setTitle(`${client.user.username} Credits!`)
         creditsEmbed.addField(name="Main Developer", value=`<@${config.ids.ownerID}>`, inline=true)
         creditsEmbed.addField(name="Command Handler Tutorial", value="[Click Me!](https://www.youtube.com/watch?v=Sihf7B8D4Y8)")
         creditsEmbed.addField(name="Icon Designer", value=`<@${config.ids.ownerID}>`, inline=true)
         creditsEmbed.setFooter(`Requested by ${message.author.username}`)
          message.channel.send(creditsEmbed)      
    }
}
