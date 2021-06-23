const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
  name: "userinfo",
  aliases: ['uinfo'],
  description: "See info on a specific user!",
  async execute(client, message, args) {
   const { guild, channel } = message

    const user = message.mentions.users.first() || message.author;
    const member = guild.members.cache.get(user.id);

    const userinfoEmbed = new MessageEmbed()
     userinfoEmbed.setAuthor(`Info of ${user.username}`, user.displayAvatarURL()).addFields({
       name: 'User Tag',
       value: user.tag,
       inline: true
     }, 
     {
       name: 'Bot User?',
       value: user.bot
     },
     {
       name: 'Nickname',
       value: member.nickname || "No Nickname",
       inline: true
     }, 
     {
       name: 'Joined Server On',
       value: new Date(member.joinedTimestamp).toLocaleDateString(),
       inline: true
     }, 
     {
       name: 'Joined Discord On',
       value: new Date(user.createdTimestamp).toLocaleDateString(),
       inline: true
     },
     {
       name: 'Number of Roles',
       value: member.roles.cache.size,
       inline: true
     },
     {
       name: 'User Avatar',
       value: "In Author of this Embed",
       inline: true
     },
     {
       name: 'User Avatar Link',
       value: user.displayAvatarURL(),
       inline: true
     }).setColor("RANDOM")
      channel.send(userinfoEmbed)
  }
}
