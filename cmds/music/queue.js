const Commando = require('discord.js-commando');
const config = require('../../storage/config.json');

module.exports = class queueCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'queue',
      aliases: ['q'],
      guildOnly: true,
      group: 'music',
      memberName: 'queue',
      description: 'Returns the current music queue (if any songs are in there)'
    })
  }

  run(message) {
    const queue = this.client.distube.getQueue(message)

    if(queue) {
		message.channel.send(`Current queue:\n${queue.songs.map((song, id) =>
			`**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join('\n')}`)
    } else {
      message.reply(`There are no songs in the queue right now! Add one with ${config.prefix}play (run **${config.prefix}help music:play** for more info)!`)
    }
  }
}