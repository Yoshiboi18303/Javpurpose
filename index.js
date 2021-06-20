const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const translate = require('@iamtraction/google-translate')
const fs = require('fs');
const myToken = process.env['TOKEN'];
const { stripIndents } = require('common-tags');
const bot_intents = Discord.Intents.ALL;
const client = new Discord.Client(intents=bot_intents);
require('discord-buttons')(client);
const botPrefix = "js;";
const distubePlayer = require('distube');
const mongoose = require('mongoose');

client.distube = new distubePlayer(client, { searchSongs: false, emitNewSongsOnly: true });
const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || 'Off'}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? 'All Queue' : 'This Song' : 'Off'}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
client.distube
.on('playSong', (message, queue, song) => {
const nowPlayingEmbed = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Now Playing...!")
.setDescription(`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`)
message.channel.send(nowPlayingEmbed)
})
	.on('addSong', (message, queue, song) => message.channel.send(
		`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
	))
  .on('addList', (message, queue, playlist) => message.channel.send(
		`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`,
	))
	.on('playList', (message, queue, playlist, song) => { 
   const playingListEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Playing Playlist!")
    .setDescription(`Playing \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`)
  message.channel.send(playingListEmbed)
})
	.on('error', (message, error) => {
		console.error(error)
		message.channel.send(`An error encountered: ${error}`)
	})

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.aliases = new Discord.Collection();

['command_handler','event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

const statuses = ['discord.gg/wvCDhsXEDa',`with you ❤️`,`js;help | Website Coming Soon!`,'js;help','js;mute | Start Moderating your server better with my Moderation Module!',"js;meme | I'm also funny (to little kids on Discord)!","js;botinfo | Find all my Information here!","Yisi has a Girlfriend"];

client.on('ready', () => {
    console.log(`Ready! Logged into ${client.user.tag}' Client on Discord!`);
  


    setInterval(function() {

        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setPresence({ activity: { name: status }, status: 'online'})
        console.log(`Status of ${client.user.username} has changed!`)

    }, 12500);
});

client.login(myToken)
