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

    function statusCheck() {
    if(mentionedMember.presence.status === 'idle') {
      return "True"
    } else {
      return "False"
    }
  };

    const userinfoEmbed = new MessageEmbed()
      .setAuthor(`User info for ${user.username} in ${guild.name}`, user.displayAvatarURL())
      .addFields(
        {
          name: 'User Tag',
          value: user.tag,
        },
        {
          name: 'Bot User?',
          value: user.bot,
        },
        {
          name: 'Nickname',
          value: member.nickname || 'None',
        },
        {
          name: 'Joined Server On',
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        {
          name: 'Joined Discord',
          value: new Date(user.createdTimestamp).toLocaleDateString(),
        },
        {
          name: 'Role Count (excluding @ everyone role)',
          value: member.roles.cache.size - 1,
        },
        {
          name: 'Last Message Sent',
          value: member.lastMessage - message
        },
        {
          name: "Presence",
          value: mentionedMember.user.presence.activity || "None!"
        },
        {
          name: "AFK?",
          value: checkStatus
        }
      );

    channel.send(userinfoEmbed);
  }
}
