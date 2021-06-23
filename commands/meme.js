const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "meme",
  aliases: [],
  description: "Memes haha funny.",
  async execute(client, message) {

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
};
