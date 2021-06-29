const Commando = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class npCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'np',
      guildOnly: true,
      group: 'music',
      memberName: 'np',
      description: 'Shows the currently playing song in the queue!'
    })
  }
  run(message) {}
}