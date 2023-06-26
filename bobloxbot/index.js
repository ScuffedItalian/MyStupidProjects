
const { Client, Events, GatewayIntentBits, ActivityType} = require('discord.js')
const { groupInfo, helpCommand, getAvatarCmd, getUserFollowers, getUserFollowed, getproductinfo, getscllinks } = require('./command.js')
const { groupInfoEmbed, helpEmbed, flwrEmbed, flwedEmbed, prdcEmbed, socialEmbed } = require('./embeds.js')
const noblox = require('noblox.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds]})
const dotenv = require('dotenv');
dotenv.config();


async function  callWhenNewSlashCommand() {
    
}

client.once(Events.ClientReady, async c => {
    console.log(`Discord bot is online! Username --> ${c.user.tag}`)
    client.user.setActivity('Yoo', {type: ActivityType.Playing})
    const grpInfo = await client.application.commands.create(groupInfo.toJSON())
    const hlpcmd = await client.application.commands.create(helpCommand.toJSON())
    const avtcmd = await client.application.commands.create(getAvatarCmd.toJSON())
    const userflw = await client.application.commands.create(getUserFollowers.toJSON())
    const userflwed = await client.application.commands.create(getUserFollowed.toJSON())
    const prdctid = await client.application.commands.create(getproductinfo.toJSON())
    const usrscl = await client.application.commands.create(getscllinks.toJSON())
    const currentUser = await noblox.setCookie(process.env.ROBLOX_COOKIE)
    
})


//handle command events
client.on(Events.InteractionCreate, async i => {
    if(i.commandName === 'getusersocials') {
        const userid = i.options.getInteger('userid')
        const socials = await noblox.getUserSocialLinks(userid)
        socialEmbed.addFields({name: "Facebook", value: String(socials.facebook)})
        socialEmbed.addFields({name: "Twitter", value: String(socials.twitter)})
        socialEmbed.addFields({name: "YouTube", value: String(socials.youtube)})
        socialEmbed.addFields({name: "Twitch", value: String(socials.twitch)})
        socialEmbed.addFields({name: "Guilded", value: String(socials.guilded)})
        
        
        
        
        await i.reply({embeds: [socialEmbed.toJSON()]})
    }

    if(i.commandName === 'getproductinfo') {
        const productid = i.options.getInteger('productid')
        const d = await noblox.getProductInfo(productid)
        prdcEmbed.setTitle(`Product info for --> ${d.Name}`)
        prdcEmbed.addFields({name: 'Product Description', value: '```' + String(d.Description) + '```'})
        prdcEmbed.addFields({name: 'Price In Robux', value: '```' + String(d.PriceInRobux) + '```'})
        prdcEmbed.addFields({name: 'For Sale', value: '```' + String(d.IsForSale) + '```'})
        prdcEmbed.addFields({name: 'Limited', value: '```' + String(d.IsLimited) + '```'})
        prdcEmbed.addFields({name: "Owner's Name", value: '```' + String(d.Creator.Name) + '```'})
        prdcEmbed.addFields({name: "Owner's ID", value: '```' + String(d.Creator.Id) + '```'})
        prdcEmbed.addFields({name: "Creator Type", value: '```' + String(d.Creator.CreatorType) + '```'})
        await i.reply({ embeds: [prdcEmbed.toJSON()]})
    }

    if( i.commandName === 'getuserfollowed') {
        const userid = i.options.getInteger('userid')

        const usernameofid = await noblox.getUsernameFromId(userid)

        flwedEmbed.setTitle(`Users followed by ${usernameofid}`)
        const getflwed = await noblox.getFollowings(userid)
        getflwed.data.forEach(async d => {
            flwedEmbed.addFields( { name: `${d.name}`, value: "Is Banned: " + String(d.isBanned)})
        })
        await i.reply({ embeds: [flwedEmbed.toJSON()]})
    }
    if(i.commandName === 'getuserfollowers') {
        const userid = i.options.getInteger('userid')
        
        const usernameofid = await noblox.getUsernameFromId(userid)
        flwrEmbed.setTitle(`Followers of user ${usernameofid}`)
       
        const getVar = await noblox.getFollowers(userid, "Asc")
        getVar.data.forEach(async d => {
            flwrEmbed.addFields({name: `${d.name}`, value: "Is Banned: " + String(d.isBanned)})
            console.log(d)
        })
        await i.reply( {embeds: [flwrEmbed.toJSON()]})
    }
    if(i.commandName === 'getavatar') {
        const id = i.options.getInteger('userid');
        const user = await noblox.getPlayerThumbnail(id)
        const username = await noblox.getUsernameFromId(id)
        const imgHandler = user[0].imageUrl
        i.reply(`**Here is the image of user of name ${username}** [Link To Image](${imgHandler})`);

        
    }
    if(i.commandName === 'help') {
        i.reply({ embeds: [helpEmbed.toJSON()]})
    }
    if(i.commandName === 'groupinformation') {
        
        const op1 = i.options.getString('typeofinfo');
        const id = i.options.getInteger('groupid')
        const desc = await noblox.getGroup(id)

        
        console.log(desc)
        if (op1 === 'groupdesc') {
            groupInfoEmbed.addFields({name: "Group Description:", value: String(`**${desc.description}**`)})
            await i.reply({ embeds: [groupInfoEmbed.toJSON()]})
        }
        if(op1 === 'groupshout') {
            groupInfoEmbed.addFields({name: "Group's CURRENT Shout: ", value: String(`**${desc.shout.body}**`)})
            groupInfoEmbed.addFields({name: "Group's CURRENT Shout Poster: ", value: String(`**${desc.shout.poster.username}**`)})
            groupInfoEmbed.addFields({name: "Group's CURRENT Shout Poster ID: ", value: String(`**${desc.shout.poster.userId}**`)})
            await i.reply({ embeds: [groupInfoEmbed.toJSON()]})
        }
        if(op1 === 'groupother') {
            groupInfoEmbed.addFields({ name: 'Member Count', value: String(desc.memberCount)})
            groupInfoEmbed.addFields({ name: 'Builders Club ONLY', value: String(desc.isBuildersClubOnly)})
            groupInfoEmbed.addFields({ name: 'Public Entry', value: String(desc.publicEntryAllowed)})
            groupInfoEmbed.addFields({ name: 'Verified', value: String(desc.hasVerifiedBadge)})
            await i.reply({ embeds: [groupInfoEmbed.toJSON()]})
        }
        if(op1 === 'groupowner') {
            groupInfoEmbed.addFields({ name: 'Verified', value: String(desc.owner.hasVerifiedBadge)})
            groupInfoEmbed.addFields({ name: 'User ID', value: String(desc.owner.userId)})
            groupInfoEmbed.addFields({ name: 'User DisplayName', value: String(desc.owner.displayName)})
            groupInfoEmbed.addFields({ name: 'User Username', value: String(desc.owner.username)})
            await i.reply({ embeds: [groupInfoEmbed.toJSON()]})
        }
        

    }
})

client.login(process.env.BOT_TOKEN)