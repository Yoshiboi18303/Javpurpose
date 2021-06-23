const { MessageButton } = require('discord-buttons')

module.exports = {
    name: "updates",
    aliases: ['twitter','trello'],
    description: "All the ways to find the updates of Javpurpose!",
    async execute(client, message) {

        const trelloButton = new MessageButton()
         trelloButton.setEmoji('850488146856509451');
         trelloButton.setStyle('url');
         trelloButton.setURL('https://trello.com/b/CvCoK9PH/javpurpose-updates');
         trelloButton.setLabel('Trello')

        const twitterButton = new MessageButton()
         twitterButton.setEmoji('850488208357589012');
         twitterButton.setStyle('url');
         twitterButton.setURL('https://twitter.com/Yoshiboi_Dev');
         twitterButton.setLabel('Twitter');

    message.reply(`Here are all the places you can find updates on me (${client.user.username})!`, trelloButton)
    await message.channel.send(`Here are all the places you can find updates on me (${client.user.username}) (continued)!`, twitterButton)
    }
}