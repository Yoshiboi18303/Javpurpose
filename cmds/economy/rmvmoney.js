const db = require('quick.db');
const Commando = require('discord.js-commando');

module.exports = class rmvMoneyCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'rmvmoney',
      aliases: ['rmv','rmoney','rmvm'],
      ownerOnly: true,
      group: 'economy',
      memberName: 'rmvmoney',
      description: 'The owner can removed money from their balance with this command!'
    })
  }

  async run(message, args) {
    const amount = parseInt(args[0]);
    if(!amount) return message.reply("Please specify an amount of money you want me to remove from your balance!");
    
    db.add(`balance_${message.author.id}`, amount)
    await message.reply(`Removed $${amount} coins from your balance!`)
  }
}