const Commando = require('discord.js-commando');
const emojis = require('../../storage/emojis.json');
const config = require('../../storage/config.json');

module.exports = class stopCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'stop',
      guildOnly: true,
      group: 'music',
      memberName: 'stop',
      description: 'Stop all the music playing in a Voice Channel!'
    })
  }
  async run(message) {
   if(!message.member.voice.channel) return message.reply("Please join a Voice Channel!");
   let queue = await this.client.distube.getQueue(message);

   if(queue) {
    await this.client.distube.stop(message);
     await message.reply(`${emojis.animated_emojis.doneEmoji} Music Stopped!`);
    } else {
      message.reply(`There are no songs in the queue right now! Add one with ${config.prefix}play (run **${config.prefix}help music:play** for more info)!`)
    }
  }
}