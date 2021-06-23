const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js')

module.exports = {
  name: "triggered",
  aliases: [],
  description: "Trigger yourself (or another user)!",
  async execute(client, message, args) {
    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.trigger(avatar);

    message.channel.send(
      new MessageAttachment(image, 'T R I G G E R E D.gif')
    )
  }
}
