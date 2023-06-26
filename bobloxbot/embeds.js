const { EmbedBuilder } = require('discord.js')

const groupInfoEmbed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('Group Statistics')
    .setAuthor( {name: 'Boblox Bot'})
    .setDescription("Embed displays the selected stats")
    .setTimestamp()
    
const helpEmbed = new EmbedBuilder()
    .setColor('#7289DA')
    .setTitle('List of Commands and Information')
    .setAuthor( {name: 'Boblox' } )
    .setDescription('List of commands/Info')
    .setTimestamp()
    .addFields({ name: 'Get Group Info', value: '```/groupinformation```'})
    .addFields({ name: `Get Avatar`, value: '```/getavatar```'})
    .addFields({ name: 'Get User Followers', value: '```/getuserfollowers```'})
    .addFields({ name: 'Get Followed Users', value: '```/getuserfollowed```'})

const flwrEmbed = new EmbedBuilder()
    .setColor('#6d20d9')
    .setTimestamp()

const flwedEmbed = new EmbedBuilder()
    .setColor('#1ba577')
    .setTimestamp()
const prdcEmbed = new EmbedBuilder()
    .setColor('#5bd937')
    .setTimestamp()

const socialEmbed = new EmbedBuilder()
    .setColor('#d62840')
    .setTimestamp()

module.exports = {
    groupInfoEmbed,
    helpEmbed,
    flwrEmbed,
    flwedEmbed,
    prdcEmbed,
    socialEmbed
}