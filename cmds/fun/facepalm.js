const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class facepalmCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'facepalm',
      group: 'fun',
      memberName: 'facepalm',
      description: 'Really man?'
    })
  }

  async run(message) {
    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.facepalm(avatar);

    message.channel.send(
     // MessageAttachment Consists of two things for this command (and all image manipulation commands), the image itself and the name of the file.
      new MessageAttachment(image, 'Really...?.png')
    )
  }
}