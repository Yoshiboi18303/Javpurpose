const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js');
const Commando = require('discord.js-commando');

module.exports = class memeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'meme',
      group: 'fun',
      memberName: 'meme',
      description: 'Haha Memes are funny.'
    })
  }

  async run(message) {
   fetch("https://meme-api.herokuapp.com/gimme")
      .then(res => res.json())
      .then(json => {
        let embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`${json.title}`)
          .setURL(json.postLink)
          .setImage(json.url)
          .setFooter(`From /r/${json.subreddit}`);

        message.channel.send(embed);
      });
  }
}