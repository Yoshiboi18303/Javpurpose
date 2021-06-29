// Required Packages
const Commando = require('discord.js-commando');
const { MessageEmbed, version: djsversion } = require('discord.js');
const packages = require('../../package.json');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');

// Exporting Command
module.exports = class botinfoCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'botinfo',
      aliases: ['bi','ci','stats'],
      group: 'information',
      memberName: 'botinfo',
      description: 'All the info on the Client/Bot can be found using this command!'
    })
  }

  // Running Command
  run(message) {
    const core = os.cpus()[0]
    const botinfoEmbed = new MessageEmbed()
     .setColor(message.guild.me.displayHexColor || "BLUE")
     .setTitle(`${this.client.user.username} Info!`)
     .setThumbnail(this.client.user.displayAvatarURL())
     .addField('General Info', [
      `**Client Tag:** ${this.client.user.tag}`,
      `**Guild Count:** ${this.client.guilds.cache.size.toLocaleString()}`,
      `**User Count:** ${this.client.users.cache.size.toLocaleString()}`,
      `**Channel Count:** ${this.client.channels.cache.size.toLocaleString()}`,
      `**Creation Date** ${utc(this.client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
      `**Node Version:** ${process.version}`,
      `**Client Version:** v${packages.version}`,
      `**Discord.js Version:** ${djsversion}`,
      '\u200b'
    ])
    .addField('System Info', [
      `**Platform:** ${process.platform}`,
      `**Uptime:** ${ms(os.uptime() * 1000, { long: true })}`,
      `**CPU:**`,
      `\u3000 Cores: ${os.cpus().length}`,
      `\u3000 Model: ${core.model}`,
      `\u3000 Speed: ${core.speed}MHz`
    ])
    .setTimestamp()
      message.channel.send(botinfoEmbed)
  }
}