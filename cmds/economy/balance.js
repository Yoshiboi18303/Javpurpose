const db = require('quick.db');
const Commando = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class addMoneyCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'balance',
      aliases: ['bal'],
      guildOnly: true,
      group: 'economy',
      memberName: 'balance',
      description: "Check the balance of a user!",
      examples: ['js;balance @Yoshiboi18303#4045','js;balance','js;bal @Yoshiboi18303#4045']
    })
  }

  async run(message, args) {
    const user = message.mentions.users.first() || message.author;

    let balance = db.fetch(`balance_${user.id}`)
    let bank = db.fetch(`bank_${user.id}`)

    if(balance === null) balance = 0;
    if(bank === null) bank = 0;

    let balanceEmbed = new MessageEmbed()
     .setColor("RANDOM")
     .setTitle(`Balance of ${user.username}`)
     .addFields({
       name: 'Balance',
       value: balance
     },
     {
       name: 'Bank',
       value: bank
     })
       message.channel.send(balanceEmbed)
  }
}