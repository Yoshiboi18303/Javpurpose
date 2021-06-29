const Commando = require('discord.js-commando');
const config = require('../../storage/config.json');

module.exports = class volumeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'volume',
      guildOnly: true,
      group: 'music',
      memberName: 'volume',
      description: 'Change the volume of the current song!',
      args: [
        {
          key: 'volumeNumber',
          prompt: "You didn't specify what to change the volume to, what did you want to set the volume to?",
          type: 'integer',
          max: 100,
          wait: 30
        }
      ]
    })
  }

  async run(message, { volumeNumber }) {
   const queue = this.client.distube.getQueue(message)
    if(queue) {
   this.client.distube.setVolume(message, volumeNumber)
    await message.reply(`Set the volume to ${volumeNumber}%!`)
  } else {
     message.reply(`There are no songs in the queue right now! Add one with ${config.prefix}play (run **${config.prefix}help music:play** for more info)!`)
    }
  }
}