const { MessageEmbed } = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class serverinfoCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'serverinfo',
      aliases: ['si','sinfo'],
      guildOnly: true,
      group: 'information',
      memberName: 'serverinfo',
      description: 'View info of the server you ran this command in!'
    })
  }

  async run(message) {
    const { guild } = message;

    const { name, region, memberCount, verificationLevel, owner, premiumTier, premiumSubscriptionCount, id, afkTimeout } = guild;
    
    const icon = guild.iconURL();

      const serverinfoEmbed = new MessageEmbed()
       serverinfoEmbed.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
       serverinfoEmbed.setTitle(`Info for server ${name}`);
       serverinfoEmbed.setThumbnail(icon)
       serverinfoEmbed.addFields({
         name: 'Region',
         value: region,
         inline: true
       },
       {
         name: 'Server ID',
         value: id,
         inline: true
       },
       {
         name: 'Member Count',
         value: memberCount,
         inline: true
       }, 
       {
         name: 'Verification Level',
         value: `**${verificationLevel}**` || '**NONE**',
         inline: true
       },
       {
         name: 'Owner',
         value: owner,
         inline: true
       },
       { name: 'AFK Timeout',
         value: afkTimeout / 60,
         inline: true
       },
       { name: 'Boost Tier',
         value: premiumTier, 
         inline: true
       },
       { name: 'Boosts',
         value: premiumSubscriptionCount,
         inline: true
       })
        message.channel.send(serverinfoEmbed)
  }
}