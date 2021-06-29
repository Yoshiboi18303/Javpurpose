const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class oofCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'oof',
      guildOnly: true,
      group: 'fun',
      memberName: 'oof',
      description: 'F in the chat'
    })
  }

  async run(message) {

    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.rip(avatar);

    message.channel.send(
      new MessageAttachment(image, 'Ded.png')
    )
  }
}