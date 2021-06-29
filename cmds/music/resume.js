const Commando = require('discord.js-commando');
const config = require('../../storage/config.json');

module.exports = class resumeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'resume',
      guildOnly: true,
      group: 'music',
      memberName: 'resume',
      description: 'Resumes the music in the queue!'
    })
  }

  async run(message) {
    if(!message.member.voice.channel) return message.reply("Please join a Voice Channel!")

    const queue = this.client.distube.getQueue(message)

    if(queue) {
      this.client.distube.resume(message)
       await message.reply("Resumed the queue!")
    } else {
      message.reply(`There are no songs in the queue right now! Add one with ${config.prefix}play (run **${config.prefix}help music:play** for more info)!`)
    }
  }
}