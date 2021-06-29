const Commando = require('discord.js-commando');

module.exports = class sayCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'say',
      group: 'misc',
      memberName: 'say',
      description: 'Make the bot say something of your choice (will never be added to the main bot due to swear words being able to be said)!',
      examples: ['tjs;say SOME_TEXT'],
      args: [
        {
          key: 'text',
          prompt: "You didn't specify anything for me to say, what do you want me to say?",
          type: 'string',
          wait: 30
        }
      ]
    })
  }
  run(message, { text }) {
    message.delete()
    const user = message.author
    message.channel.send(`${text} | Sent from **${user.username}**!`)
  }
}