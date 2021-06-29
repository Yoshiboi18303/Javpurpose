const Commando = require('discord.js-commando');
const config = require('../../storage/config.json');

module.exports = class jumpCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'jump',
      aliases: ['qj'],
      guildOnly: true,
      group: 'music',
      memberName: 'jump',
      description: "Jumps to a certain song number from the users input!"
    })
  }

  run(message, args) {
    if(!message.member.voice.channel) return message.reply("Please join a Voice Channel!")
    if(!args[0]) return message.reply("You didn't specify an integer!")

    const queue = this.client.distube.getQueue(message)
     if(queue) {
       this.client.distube.jump(message, parseInt(args[0])).catch(err => message.reply("Invalid song number."))
       message.reply(`Jumped ${Number(args[0])} songs in the queue!`)
     } else {
       message.reply(`There are no songs in the queue right now! Add one with ${config.prefix}play (run **${config.prefix}help music:play** for more info)!`)
     }
  }
}