const Discord = require('discord.js')
const client = new Discord.Client()

const command = require('./command')
const welcome = require('./welcome')
//=============================================
client.on('ready', () =>{
    console.log('Chiriri is online!')

    welcome(client)
    
    command(client, ['ping', 'test'], message =>{
        message.channel.send(`${message.author.toString()} Pong!`)
        message.react('<a:UMRPat:805597149509320734>')
    })

    command(client, 'help', message =>{
        /*let embed = new Discord.MessageEmbed()
         .setTitle("Commands [%]")
         .setDescription("- help\r\n(list the commands)\r\n- ping/test\r\n(for testing purpose)\r\n- status\r\n(to change the status display for the bot)\r\n- servers\r\n(display the number of members in the servers)\r\n- cc/clearchannel\r\n(clearing the whole messages in the channel *only for messsages that are not exeeded 14 days)")
         .setColor("BLUE")
         .setFooter("Author: UMR_IV   Latest update: 25/4/2021")
         message.channel.send(embed)*/
         let embed = new Discord.MessageEmbed()
         .setTitle("Server Rules")
         .setDescription("**#1 Be mature and polite.**\r\nTreat everybody with respect regardless of race, religion, where they live, etc. Don't discriminate against others.\r\n\r\n**#2 Respect each other's views and opinions.**\r\nDon't attack others for not sharing the same opinion and don't force your views on them.\r\n\r\n**#3 Upload art to the right channels.**\r\nWhen sharing art, use ####### and #other-vtubers-art. Include the source where possible.**#6 No sharing of paid content.**\r\nThis includes membership content, paid live streams, paid voice packs, or any other items that require payment of real money.\r\n\r\nShort animated GIFs (up to 3-5 seconds) and screenshots of paid lives are allowed. No audio or video of any length is permitted for this exception.\r\n\r\n**#7 Please try to stay on topic in each channel.**\r\nFor example, avoid holding in-depth discussion of other vtubers in #sui-chat. Likewise, Suisei discussion would better fit in #sui-chat.\r\n\r\n**#8 DO NOT share any real life information about any vtubers.**\r\nException is made to information shared by the vtuber themself. This includes speculation about real life activities or other social media accounts of any vtuber.\r\n\r\n**#9 Do not discuss any politics, religion, or other controversial issues on this server.**\r\nThey tend to lead to arguments breaking out and we want to keep this server as clean and friendly as possible.")
         .setColor("BLUE")
         .setFooter("")
         message.channel.send(embed)
    })

    command(client, 'servers', message =>{
        client.guilds.cache.forEach(guild =>{
            message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`)
        })
    })

    command(client, ['cc', 'clearchannel'], message =>{
        if (message.member.hasPermission('ADMINISTRATOR')){
            message.channel.messages.fetch().then((results) =>{
                message.channel.bulkDelete(results)
            })
        }
    })
    command(client, 'status', message =>{
        const content = message.content.replace('%status ', '')
        // "%status hello world" -> "hello world"

        client.user.setPresence({
            activity: {
                name: content,
                type:0,
            },
        })
    })
})

//=============================================
client.login(process.env.DJS_TOKEN)
