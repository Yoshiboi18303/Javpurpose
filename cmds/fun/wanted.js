const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class wantedCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'wanted',
      guildOnly: true,
      group: 'fun',
      memberName: 'wanted',
      description: 'Turn yourself (or another user) into a wanted criminal!'
    })
  }

  async run(message) {

    const user = message.mentions.users.first() || message.author;

    const avatar = user.displayAvatarURL({ format: "png" });

    const image = await Canvas.wanted(avatar);

    message.channel.send(
      new MessageAttachment(image, 'wanted.png')
    )
  }
}