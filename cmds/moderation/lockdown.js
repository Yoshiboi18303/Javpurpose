const { MessageEmbed } = require('discord.js');
const emojis = require('../../storage/emojis.json');
const Commando = require('discord.js-commando');

module.exports = class lockdownCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'lockdown',
      aliases: ['ld'],
      group: 'moderation',
      memberName: 'lockdown',
      description: 'Lockdown your server in case of Emergency!',
      clientPermissions: [
        'MANAGE_ROLES'
      ],
      userPermissions: [
        'MANAGE_ROLES'
      ]
    })
  }

  async run(message, args) {
   const { guild } = message
    const role = guild.roles.everyone;

    if(!args.length) return message.reply("Tell me whether the lockdown is true or false!");

    const query = args[0].toLowerCase();

    if(!["true", "false"].includes(query)) return message.reply("That ain't a valid answer! Please say true **OR** false!");

    const perms = role.permissions.toArray();

    if(query === 'false') {
      perms.push('SEND_MESSAGES');
      await role.edit({ permissions: perms });
      message.reply(`Server opened! Everyone can now chat!`)
    } else if(query === 'true') {
      const newPerms = perms.filter((perms) => perms !== 'SEND_MESSAGES')

      await role.edit({ permissions: newPerms });
      message.reply(`Server locked and closed! No one can chat!`);
    }
  }
}