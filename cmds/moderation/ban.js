const Commando = require('discord.js-commando');

module.exports = class BanCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'ban',
      aliases: ['hammer'],
      group: 'moderation',
      memberName: 'ban',
      description: 'Ban a member from your Discord Server!',
      clientPermissions: [
        'BAN_MEMBERS'
      ],
      userPermissions: [
        'BAN_MEMBERS'
      ],
      guildOnly: true
    })
  }

  async run(message) {
    const target = message.mentions.users.first()
    if(!target) return message.reply(`Who do you want me to ban from **${message.guild.name}**?`)

    const { guild } = message;

    const memberTarget = guild.members.cache.get(target.id)
    if(memberTarget.bannable) {
      memberTarget.kick()
      message.reply(`Successfully banned <@${target.id}>!`)
      memberTarget.send(`You have been banned from **${guild.name}**!`)
    } else {
      message.reply(`Whoopsies, I can't ban <@${target.id}>! Please drag my role above the target's highest role!`)
    }
  }
}