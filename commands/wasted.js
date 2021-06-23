const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
  name: "wasted",
  aliases: [],
  description: "Wasted",
  async execute(client, message, args) {
    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.wasted(avatar);

    message.channel.send(
      new MessageAttachment(image, 'wasted.png')
    )
  }
}
