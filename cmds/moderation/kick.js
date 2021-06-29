const Commando = require('discord.js-commando');

module.exports = class KickCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'kick',
      aliases: ['boot'],
      group: 'moderation',
      memberName: 'kick',
      description: 'Kick a member from your Discord Server!',
      clientPermissions: [
        'KICK_MEMBERS'
      ],
      userPermissions: [
        'KICK_MEMBERS'
      ],
      guildOnly: true
    })
  }

  async run(message) {
    const target = message.mentions.users.first()
    if(!target) return message.reply(`Who do you want me to kick from **${message.guild.name}**?`)

    const { guild } = message;

    const memberTarget = guild.members.cache.get(target.id)
    if(memberTarget.kickable) {
      memberTarget.kick()
      message.reply(`Successfully kicked <@${target.id}>!`)
      memberTarget.send(`You have been kicked from **${guild.name}**!`)
    } else {
      message.reply(`Whoopsies, I can't kick <@${target.id}>! Please drag my role above the target's highest role!`)
    }
  }
}