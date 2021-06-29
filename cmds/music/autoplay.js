const Commando = require('discord.js-commando');
const config = require('../../storage/config.json');

module.exports = class autoplayCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'autoplay',
      guildOnly: true,
      aliases: ['ap'],
      group: 'music',
      memberName: 'autoplay',
      description: 'Changes the Autoplay Mode based on the current state!'
    })
  }

  run(message) {
   if(!message.member.voice.channel) return message.reply("Please join a Voice Channel!")
   const queue = this.client.distube.getQueue(message)
   if(queue) {
    let mode = this.client.distube.toggleAutoplay(message)

    message.reply("Set autoplay mode to `" + (mode ? "On" : "Off") + "`")
   } else {
     message.reply(`There are no songs in the queue right now! Add one with ${config.prefix}play (run **${config.prefix}help music:play** for more info)!`)
   }
  }
}