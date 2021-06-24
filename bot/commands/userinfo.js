const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "userinfo",
  aliases: ['uinfo'],
  description: "See info on a specific user!",
  async execute(client, message, args) {
   const { guild, channel } = message

    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id);
    const mentionedMember = message.guild.member(user);
    const checkStatus = await statusCheck();
    const usersStatus = await status();

    function statusCheck() {
    if(mentionedMember.presence.status === 'idle') {
      return "True"
    } else {
      return "False"
    }
  };
    function status() {
      if(mentionedMember.presence.status === 'online') {
        return "Online"
      } else if(mentionedMember.presence.status === 'idle') {
        return "Idle/AFK"
      } else if(mentionedMember.presence.status === 'dnd') {
        return "Do Not Disturb"
      } else if(mentionedMember.presence.status === 'offline') {
        return "Invisible/Offline"
      }
    };

    const userinfoEmbed = new MessageEmbed()
      .setAuthor(`User info for ${user.username} in ${guild.name}`, user.displayAvatarURL())
      .addFields(
        {
          name: 'User Tag',
          value: user.tag,
          inline: true
        },
        {
          name: 'Status',
          value: usersStatus,
          inline: true
        },
        {
          name: 'Bot User?',
          value: user.bot,
          inline: true
        },
        {
          name: 'Nickname',
          value: member.nickname || 'None',
          inline: true
        },
        {
          name: 'Joined Server On',
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
          inline: true
        },
        {
          name: 'Joined Discord',
          value: new Date(user.createdTimestamp).toLocaleDateString(),
          inline: true
        },
        {
          name: 'Role Count (excluding @ everyone role)',
          value: member.roles.cache.size - 1,
          inline: true
        },
        {
          name: 'Last Message Sent',
          value: `[Last Message](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${mentionedMember.lastMessage.id})` || `No recent message found in <#${message.channel.id}>...`,
          inline: true
        },
        {
          name: "Presence",
          value: mentionedMember.user.presence.activity || "None!",
          inline: true
        },
        {
          name: "AFK?",
          value: checkStatus,
          inline: true
        }
      );

    channel.send(userinfoEmbed);
  }
}
