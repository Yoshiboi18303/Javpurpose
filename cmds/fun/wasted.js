const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class wastedCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'wasted',
      guildOnly: true,
      group: 'fun',
      memberName: 'wasted',
      description: 'OOF'
    })
  }

  async run(message) {

    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.wasted(avatar);

    message.channel.send(
      new MessageAttachment(image, 'OOOOOF.png')
    )
  }
}