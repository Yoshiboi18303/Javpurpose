const { MessageEmbed, Message } = require('discord.js');
const db = require('quick.db');
const { stripIndents } = require('common-tags');

module.exports = {
    name: "add",
    aliases: ['pay','give'],
    description: "A user can give people money to another user with this command!",
    execute(client, message, args) {

            const user = message.mentions.members.first();
            const amountPaid = args[1];
            const reason = args.slice(2).join(" ")

            if(!user) return message.reply('You need to mention a user!');
            if(user.id === client.user.id) return message.reply("I don't have a balance!");
            if(user.id === message.author.id) return message.reply("Why are you trying to pay yourself money?");
            if(!amountPaid) return message.reply(`You need to tell me how much money you want to pay to ${user}!`);
            if(isNaN(amountPaid)) return message.reply(`That's not a number!`);
            if(amountPaid < 10) return message.reply(`$${amountPaid} is not worth it for ${user}!`);

            try {
                const author = db.fetch(`money_${message.author.id}`);
                const moneyUser = db.fetch(`money_${user.id}`);

                const successEmbed = new MessageEmbed()
                 successEmbed.setColor("#00FF02");
                 successEmbed.setTitle("**Success!**");
                 successEmbed.setDescription(`${user} recieved...`);
                 successEmbed.addField(name="Money Recieved", value=`$${amountPaid}`);
                 successEmbed.addField(name="For Reason", value=reason || "The user didn't specify a reason!");
                  message.channel.send(successEmbed);

            db.add(`money_${user.id}`, amountPaid)
            db.subtract(`money_${message.author.id}`, amountPaid)

            } catch(error) {
                message.channel.send(stripIndents`
                ☠️ **ERROR** ☠️
                
                \`\`\`${error}\`\`\`
                This should not have happened. Please report this error here <https://discord.gg/wvCDhsXEDa>
                `);
    };
  }
}
