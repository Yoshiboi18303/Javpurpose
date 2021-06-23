const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
  name: "oof",
  aliases: [],
  description: "F in the chat",
  async execute(client, message, args) {
    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.rip(avatar);

    message.channel.send(
      new MessageAttachment(image, 'OOOOF.png')
    )
  }
}
