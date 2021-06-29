const db = require('quick.db');
const Commando = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const emojis = require('../../storage/emojis.json');

module.exports = class workCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'work',
      aliases: ['wrk'],
      group: 'economy',
      memberName: 'work',
      description: "Work to make money!",
      examples: ['js;work']
    })
  }

  async run(message) {
    const user = message.author;
    let userBalance = db.fetch(`balance_${user.id}`)

    let jobs = ['Bot Developer','Cashier','Pirate','Construction Worker','YouTuber']
    let job = Math.floor((Math.random() * jobs.length))
    let amountEarned = Math.floor(Math.random() * 378) + 5;

    let successEmbed = new MessageEmbed()
     .setColor("#00FF02")
     .setTitle("Success!")
     .setThumbnail("https://cdn.discordapp.com/attachments/849441681068916786/858435679087755284/outline_paid_white_48dp.png")
     .setDescription(`You have worked as a ${jobs[job]} and earned **${amountEarned}** coins out of it!`)
       message.channel.send(successEmbed)
      db.add(`balance_${user.id}`, amountEarned)
  }
}