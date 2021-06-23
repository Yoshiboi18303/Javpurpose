const { MessageButton, MessageActionRow } = require('discord-buttons');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = {
    name: "invite",
    aliases: [],
    description: "Invite Javpurpose to your Server!",
    async execute(client, message) {

        let inviteButton = new MessageButton()
         inviteButton.setStyle('url');
         inviteButton.setURL('https://discord.com/oauth2/authorize?client_id=848729278069211136&scope=bot&permissions=335891478');
         inviteButton.setLabel('Invite Javpurpose!');
         inviteButton.setEmoji('712732635541012642')

        let privacyButton = new MessageButton()
         privacyButton.setStyle('url');
         privacyButton.setURL('https://github.com/Yoshiboi18303/Javpurpose/blob/main/PRIVACY.md');
         privacyButton.setLabel('Privacy Policy');
         privacyButton.setEmoji('850161209487261716');

      let buttonRow = new MessageActionRow()
       .addComponent(inviteButton)
       .addComponent(privacyButton)

    message.reply(stripIndents`You can use this button row for some info!
      --------------------------------------------------------------
     Use the button with the <:join_arrow:712732635541012642> emoji to Invite Me!
      --------------------------------------------------------------
     Use the button with the <:discord:712732783763521594> emoji for my Privacy Policy!
`, { component: buttonRow })
  }
}
