const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
  name: "wanted",
  aliases: [],
  description: "Turn yourself (or another user) into a wanted criminal!",
  async execute(client, message, args) {
    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.wanted(avatar);

    message.channel.send(
      new MessageAttachment(image, 'wanted.png')
    )
  }
}
