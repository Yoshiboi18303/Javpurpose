const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class rainbowizeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'trigger',
      guildOnly: true,
      group: 'fun',
      memberName: 'trigger',
      description: 'Trigger yourself (or another user)!'
    })
  }

  async run(message) {
    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.trigger(avatar);

    message.channel.send(
      new MessageAttachment(image, `${user.username}_Is_Triggered.gif`)
    )
  }
}