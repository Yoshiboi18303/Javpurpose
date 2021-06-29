const Commando = require('discord.js-commando');

module.exports = class repeatCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'repeat',
      guildOnly: true,
      aliases: ['r','l','loop'],
      group: 'music',
      memberName: 'repeat',
      description: 'Set the repeat mode with this command!'
    })
  }

  run(message, args) {
    if(!message.member.voice.channel) return message.reply("Please join a Voice Channel!")
    if(!args[0]) return message.reply("Please specify an integer!\n\n0 for Disabled\n1 for current song\n2 for entire Queue")

    function displayStatusText() {
      if(parseInt(args[0]) === 1) {
        return "Current Song"
      } else if(parseInt(args[0]) === 2) {
        return "Entire Queue"
      } else {
        return "Disabled"
      }
    }

    const queue = this.client.distube.getQueue(message)

     if(queue) {
       this.client.distube.setRepeatMode(message, parseInt(args[0]))
        message.reply(`Successfully set the Repeat Mode to ${parseInt(args[0])} (${displayStatusText()})`)
     }
  }
}