const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const config = require('../storage/config.json');

module.exports = {
    name: "work",
    aliases: ['wrk','job'],
    description: "Get a job and make money from it!",
    async execute(client, message) {

        let user = message.author;
        let author = db.fetch(`time_${user.id}`);

        let timeout = 270000;
        if(author > timeout) {

        let cooldownEmbed = new MessageEmbed()
         cooldownEmbed.setColor("#FF0000");
         cooldownEmbed.setTitle("Slow down there buddy...");
         cooldownEmbed.setDescription(`${user}, You are on cooldown, here's how much time you have left **(coming soon, sadly (but you should have around 4.5 minutes (270000 milliseconds) on your cooldown for this command))**.`);
         cooldownEmbed.setThumbnail(`${config.links.cooldownImage}`)
          message.channel.send(cooldownEmbed);

        } else {

            let jobs = ['Bot Developer','Bot List Designer','Web Developer','Office Worker','Agent']
            let job = Math.floor((Math.random() * jobs.length));
            let amount = Math.floor(Math.random() * 300) + 5;

            const successEmbed = new MessageEmbed()
             successEmbed.setColor("#00FF02");
             successEmbed.setTitle("**Success!**");
             successEmbed.setDescription(`${user}, You were able to successfully work! Here's the info!`);
             successEmbed.setThumbnail(`${config.links.successImage}`)
             successEmbed.addField(name="Job", value=jobs[job], inline=true);
             successEmbed.addField(name="Amount Earned", value=amount, inline=true);
              message.channel.send(successEmbed);

            db.add(`balance_${user.id}`, amount);
            db.set(`time_${user.id}`, Date.now());
        
          let balance = db.fetch(`balance_${user.id}`)

        await message.reply(`Your new Balance is now: ${balance} dollars ($$$)!`)
        }
    }
}