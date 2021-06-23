const { MessageEmbed } = require('discord.js');
const config = require('../storage/config.json');
const { version } = require('../package.json');
const { stripIndents } = require('common-tags');

module.exports = {
    name: "botinfo",
    aliases: ['info'],
    description: "All the info for Javpurpose can be found using this command!",
    execute(client, message, args) {

        if(!args[0]) {
            const botinfoEmbed = new MessageEmbed()
             botinfoEmbed.setColor("RANDOM");
             botinfoEmbed.setAuthor(`${client.user.username} Info!`, client.user.displayAvatarURL());
             botinfoEmbed.addField(name="Server Count", value=`${client.guilds.cache.size} servers`, inline=true);
             botinfoEmbed.addField(name="User Count", value=`${client.users.cache.size} users`, inline=true);
             botinfoEmbed.addField(name="Version", value=`v${version}`, inline=true);
             botinfoEmbed.addField(name="Commands", value=config.numbers.commands, inline=true);
             botinfoEmbed.addField(name="Partners", value="js;botinfo partners", inline=true);
             botinfoEmbed.addField(name="Time since last restart", value=`${process.uptime().toFixed(2)}s`, inline=true)
             botinfoEmbed.setFooter(`Requested by ${message.author.username}`);
              message.channel.send(botinfoEmbed);
        }
        if(args[0] === 'partners') {
            const botpartnersEmbed = new MessageEmbed()
             botpartnersEmbed.setColor("RANDOM")
             botpartnersEmbed.setTitle(`${client.user.username} Partners!`)
             botpartnersEmbed.setThumbnail(`${config.links.partnersImage}`)
             botpartnersEmbed.setDescription(stripIndents`
              **Fear v6**
                Info Below! 
                 Owner: <@683530527239962627> 
                 Invite Link: [Click Me!](https://discord.com/oauth2/authorize?client_id=594189989143904264&scope=bot&permissions=8)
                 Website (optional): None!
             `)
              botpartnersEmbed.addField(name="Become our next partner!", value="Join the [support server](https://discord.gg/wvCDhsXEDa) and then DM Yoshiboi18303#4045 to become our next partner!")
              message.channel.send(botpartnersEmbed)
        }
        if(args[0] === 'botlists') {
          const botListsEmbed = new MessageEmbed()
           botListsEmbed.setColor("RANDOM");
           botListsEmbed.setTitle(`Bot Lists with ${client.user.username}!`);
           botListsEmbed.setDescription("Coming Soon!");
            message.channel.send(botListsEmbed)
        }
    }
}
