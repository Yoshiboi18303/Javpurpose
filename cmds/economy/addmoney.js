const db = require('quick.db');
const Commando = require('discord.js-commando');

module.exports = class addMoneyCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'addmoney',
      aliases: ['addm','amoney'],
      ownerOnly: true,
      group: 'economy',
      memberName: 'addmoney',
      description: 'The owner can add money to their balance with this command!'
    })
  }

  async run(message, args) {
   const amount = parseInt(args[0])
    if(!amount) return message.reply("Please specify an amount of money you want me to add to your balance!");
    
    db.add(`balance_${message.author.id}`, amount)
    await message.reply(`Added $${amount} coins to your balance!`)
  }
}