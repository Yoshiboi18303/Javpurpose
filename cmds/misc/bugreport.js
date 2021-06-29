const Commando = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const emojis = require('../../storage/emojis.json')

module.exports = class reportingCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'bugreport',
      aliases: ['br'],
      group: 'misc',
      memberName: 'bugreport',
      description: 'Report a bug to the owner of Javpurpose with this command!',
      examples: ['js;bugreport SOME_BUG','js;br SOME_BUG'],
      args: [
        {
          key: 'query',
          label: 'bug',
          prompt: "You didn't specify a bug to report, what bug do you want to report to Yoshiboi18303#4045?",
          type: 'string',
          wait: 45
        }
      ]
    })
  }

  run(message, { query }) {

    const owner = this.client.users.cache.get('697414293712273408')
    const bugEmbed = new MessageEmbed()
     .setColor("#EF401B")
     .setTitle("New Bug Reported!")
     .addFields({
       name: 'Reporter',
       value: message.author.toString(),
       inline: true
     },
     {
       name: 'Guild',
       value: message.guild.name,
       inline: true
     },
     {
       name: 'Bug Reported',
       value: query
     })
     .setTimestamp()
     .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))

    message.reply(`Sending DM... ${emojis.animated_emojis.loadingEmoji}`).then(msg => {
      setTimeout(function edit() { msg.edit(`Sent DM to Yoshiboi18303#4045!`)}, 3000)
      owner.send(bugEmbed)
    })
       
  }
}