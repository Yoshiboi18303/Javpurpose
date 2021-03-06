const Commando = require('discord.js-commando');

module.exports = class AddCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'add',
      group: 'misc',
      memberName: 'add',
      description: 'Gets your numbers as input and then outputs their sum',
      argsType: 'multiple'
    })
  }

  async run(message, args) {
    let sum = 0

    for(const arg of args) {
      sum += parseInt(arg)
    }

  message.reply(`The sum of your query is ${sum}`)
  }
}