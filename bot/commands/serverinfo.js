const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "serverinfo",
  aliases: ['si','sinfo'],
  description: "View info of the server you ran this command in!",
  execute(client, message) {
    const { guild } = message;
   // console.log(guild)

    const { name, region, memberCount, verificationLevel, owner, premiumTier, premiumSubscriptionCount, id, afkTimeout } = guild;
    console.log(guild)
    const icon = guild.iconURL()

      const serverinfoEmbed = new MessageEmbed()
       serverinfoEmbed.setTitle(`Info for server ${name}`)
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
         value: verificationLevel || 'None',
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
