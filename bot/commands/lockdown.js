const { MessageEmbed } = require('discord.js');
const emojis = require('../storage/emojis.json');

module.exports = {
  name: "lockdown",
  aliases: ['ld'],
  description: "Lockdown your server in case of Emergency!",
  async execute(client, message, args) {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply("You don't have the `MANAGE_ROLES` permission!");
    if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.reply("I require the `MANAGE_ROLES` permission to run this command!");

    const role = message.guild.roles.everyone;

    if(!args.length) return message.reply("Tell me whether the lockdown is true or false!");

    const query = args[0].toLowerCase();

    if(!["true", "false"].includes(query)) return message.reply("That ain't a valid answer!");

    const perms = role.permissions.toArray();

    if(query === 'false') {
      perms.push('SEND_MESSAGES');
      console.log(perms)
      await role.edit({ permissions: perms });
      message.reply(`Server opened! Everyone can now chat!`);
    } else if(query === 'true') {
      const newPerms = perms.filter((perms) => perms !== 'SEND_MESSAGES');
      console.log(newPerms);

      await role.edit({ permissions: newPerms });
      message.reply(`Server locked and closed! No one can chat!`);
    }
  }
}
