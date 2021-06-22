const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
name: "balance",
aliases: ['bal'],
description: "Check your (or another user') balance!",
async execute(client, message, args) {
let user = message.mentions.members.first() || message.author;

let balance = db.get(`balance_${user.id}`);
let bank = db.get(`bank_${user.id}`);

if(balance === null) balance = 0;
if(bank === null) bank = 0;

  const balEmbed = new MessageEmbed()
   balEmbed.setColor("RANDOM");
   balEmbed.setTitle(`The Balance of...`);
   balEmbed.setDescription(`${user}`)
   balEmbed.addField(name="Pocket:", value=balance);
   balEmbed.addField(name="Bank:", value=bank);
   balEmbed.setTimestamp();
    message.channel.send(balEmbed);
 }
}
