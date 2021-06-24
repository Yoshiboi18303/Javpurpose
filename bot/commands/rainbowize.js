const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js')

module.exports = {
  name: "rainbowize",
  aliases: [],
  description: "Rainbowize yourself (or another user)!",
  async execute(client, message, args) {
    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.rainbow(avatar);

    message.channel.send(
      new MessageAttachment(image, `${user.username}_Has_Gay.png`)
    )
  }
}
