const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
  name: "facepalm",
  aliases: [],
  description: "Really?",
  async execute(client, message, args) {
    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.facepalm(avatar);

    message.channel.send(
     // MessageAttachment Consists of two things for this command (and all image manipulation commands). 1. The image itself and 2. The name of the file.
      new MessageAttachment(image, 'Really...?.png')
    )
  }
}
