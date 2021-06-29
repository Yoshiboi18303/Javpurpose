const { MessageAttachment, MessageEmbed } = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class avatarCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'avatar',
      group: 'information',
      memberName: 'avatar',
      description: 'Returns your avatar in an embed!'
    })
  }

  async run(message) {
    const avatar = message.author.displayAvatarURL({ format: 'png' })

    let avatarEmbed = new MessageEmbed()
     .setColor("RANDOM")
     .setAuthor(`${message.author.tag}`, avatar)
     .setImage(avatar)
       message.channel.send(avatarEmbed)
  }
}