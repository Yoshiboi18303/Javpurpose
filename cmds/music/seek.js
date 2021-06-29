const Commando = require('discord.js-commando');
const config = require('../../storage/config.json');

module.exports = class seekCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'seek',
      guildOnly: true,
      group: 'music',
      memberName: 'seek',
      description: 'Seek to a user-specified point in the current song!',
      argsType: 'multiple'
    })
  }

  async run(message, args) {
   if(!message.member.voice.channel) return message.reply("Please join a Voice Channel!")
   if(!args[0]) return message.reply("You didn't specify a time in the current song!")

   const queue = this.client.distube.getQueue(message)

   if(queue) {
    this.client.distube.seek(message, Number(args[0]))
     await message.reply(`Seeked song to \`${args[0] * 1000}\` Milliseconds!`)
   } else {
     message.reply(`There are no songs in the queue right now! Add one with ${config.prefix}play (run **${config.prefix}help music:play** for more info)!`)
   }
  }
}