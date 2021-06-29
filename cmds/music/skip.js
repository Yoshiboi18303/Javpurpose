const Commando = require('discord.js-commando');
const config = require('../../storage/config.json');

module.exports = class skipCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'skip',
      guildOnly: true,
      group: 'music',
      memberName: 'skip',
      description: 'Skips the currently playing song in the queue!'
    })
  }

  async run(message) {
    if(!message.member.voice.channel) return message.reply("Please join a voice channel!");
    const queue = this.client.distube.getQueue(message)

    if(queue) {
      this.client.distube.skip(message)
       await message.reply("Skipped the current song!")
    } else {
      message.reply(`There are no songs in the queue right now! Add one with ${config.prefix}play (run **${config.prefix}help music:play** for more info)!`)
    }
  }
}