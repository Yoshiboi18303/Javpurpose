const Commando = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ejgerkb extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'd',
      ownerOnly: true,
      hidden: true,
      group: 'misc',
      memberName: 'd',
      description: 'erjghirlkjgj'
    })
  }

  async run(message) {
    const testEmbed = new MessageEmbed()
     .setColor("RANDOM")
     .setTitle("Testing")
     .setFooter(message.author.username, message.author.displayAvatarURL())
       message.channel.send(testEmbed)
  }
}