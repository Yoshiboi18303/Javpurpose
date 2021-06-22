const emojis = require('../storage/emojis.json')

module.exports = {
    name: "bot",
    aliases: ['robot'],
    description: "Call your friends a bot!",
    execute(client, message, args) {

        const user = message.mentions.members.first() || message.author;
        message.channel.send(`${user} is a ${emojis.custom_emojis.botemoji}`)
    }
}
