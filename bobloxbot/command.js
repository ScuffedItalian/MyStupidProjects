const { SlashCommandBuilder } = require('discord.js')

const groupInfo = new SlashCommandBuilder()
    .setName('groupinformation')
    .setDescription("grabs the specified group's information")
    .addStringOption(option => {
        option.setName('typeofinfo')
            .setDescription("select which type of data you'd like to see")
            .setRequired(true)
            .addChoices(
                
                {name: 'Group Description', value: 'groupdesc'},
                {name: 'Current Group Shout', value: 'groupshout'},
                {name: 'Other', value: 'groupother'},
                {name: 'Owner', value: 'groupowner'}
            )
        return option
    })
    .addIntegerOption(option => {
        option.setName('groupid')
            .setDescription('Provide the groups name')
            .setRequired(true)
        return option
    })

const helpCommand = new SlashCommandBuilder()
    .setName('help')
    .setDescription('Display all my avaliable commands')

const getAvatarCmd = new SlashCommandBuilder()
    .setName('getavatar')
    .setDescription("Get a user's avatar")
    .addIntegerOption(option => {
        option.setName('userid')
            .setDescription('Supply the users id')
            .setRequired(true)
        return option
    })
const getUserFollowers = new SlashCommandBuilder()
    .setName('getuserfollowers')
    .setDescription('Returns a list of followers of the specified user')
    .addIntegerOption(option => {
        option.setName('userid')
            .setDescription('Input the userid')
            .setRequired(true);
        return option;
    })
const getUserFollowed = new SlashCommandBuilder()
    .setName('getuserfollowed')
    .setDescription('Returns a list of followed users by the specified user')
    .addIntegerOption(option => {
        option.setName('userid')
            .setDescription('pass in the user id')
            .setRequired(true)
        return option;
    })
const getproductinfo = new SlashCommandBuilder()
    .setName('getproductinfo')
    .setDescription('Returns info on the passed in product id')
    .addIntegerOption(option => {
        option.setName('productid')
            .setDescription('pass in product ID')
            .setRequired(true)
        return option;
    })
const getscllinks = new SlashCommandBuilder()
    .setName('getusersocials')
    .setDescription('Returns a users social listings')
    .addIntegerOption(option => {
        option.setName('userid')
            .setDescription('pass in user ID')
            .setRequired(true)
        return option;
    })
    
module.exports = {
    groupInfo,
    helpCommand,
    getAvatarCmd,
    getUserFollowers,
    getUserFollowed,
    getproductinfo,
    getscllinks
}