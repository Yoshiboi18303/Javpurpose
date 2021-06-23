const { stripIndents } = require('common-tags')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "privacy",
    aliases: ['policy'],
    description: "Shows the Privacy Policy for Javpurpose!",
    execute(client, message) {

        const privacyEmbed = new MessageEmbed()
         privacyEmbed.setColor("RANDOM")
         privacyEmbed.setTitle(`${client.user.username} Privacy Policy!`)
         privacyEmbed.setDescription(stripIndents`
         1) What Data we Collect
         2) Why we need this data
         3) How we use this data
         4) Do we share this data?
         5) Is my data safe?
         6) How can users contact the developer(s)
         7) How can users have their data removed
         -------------------------------------------
         1) We collect: Role List, Permissions, and User IDs.
         -------------------------------------------
         2) We need this data for some of Javpurpose' commands.
         -------------------------------------------
         3) Read 2.
         -------------------------------------------
         4) This data MAY be shared with the Heroku Team.
         -------------------------------------------
         5) Read 4, also... should be safe!
         -------------------------------------------
         6) You can join the [Support Server](https://discord.gg/wvCDhsXEDa) to contact Yoshiboi18303#4045.
         -------------------------------------------
         7) Sadly, there's no way for us to remove this data from you ourselves.
         `)
         privacyEmbed.setFooter(`Requested by ${message.author.username}`)
         privacyEmbed.setTimestamp();
           message.channel.send(privacyEmbed)
    }
}