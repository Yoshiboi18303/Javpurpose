const weather = require("weather-js");

module.exports = {
  name: "weather",
  aliases: [],
  description: "Show weather Information on your Given Location!",
  execute(client, message, args, Discord) {

    if (!args[0]) return message.reply("**ERROR || NO LOCATION PROVIDED** | Please give me a Location to look up!");

    weather.find({ search: args.join(" ") }, function(error, result) {
      if (error) return message.reply(`☠️ **ERROR** | Please try this command again later! ☠️`);

      if (result === undefined || result.length === 0)
        return message.reply(
          `☠️ **ERROR || BAD LOCATION** | Please give me a Valid Location! ☠️`
        );

      var current = result[0].current;
      var location = result[0].location;

      const weatherEmbed = new Discord.MessageEmbed()
        weatherEmbed.setColor("RANDOM")
        weatherEmbed.setTitle(`${location.name} Weather!`)
        weatherEmbed.setDescription(`${current.skytext}`)
        weatherEmbed.addField("Degree Type", location.degreetype, true)
        weatherEmbed.addField("Temperature", `${current.temperature}°`, true)
        weatherEmbed.addField("Humidity", `${current.humidity}%`, true)
        weatherEmbed.addField("Wind", current.winddisplay, true)
        weatherEmbed.addField("Feels Like", `${current.feelslike}°`, true)
        weatherEmbed.addField("Timezone", `UTC${location.timezone}`, true)
        weatherEmbed.setTimestamp();

      message.channel.send(weatherEmbed);
    });
  }
};
