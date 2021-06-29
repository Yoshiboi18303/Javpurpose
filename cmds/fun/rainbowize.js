const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class rainbowizeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'rainbowize',
      guildOnly: true,
      group: 'fun',
      memberName: 'rainbowize',
      description: 'Rainbowize yourself (or another user)!'
    })
  }

  async run(message) {
    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.rainbow(avatar);

    message.channel.send(
      new MessageAttachment(image, `${user.username}_Has_Gay.png`)
    )
  }
}