module.exports = (client) => {

    const channelId = '835444751494807593' //testing channel
    client.on('GuildMemberAdd', (member) =>{
        console.log(member)

        const message = `Welcome to the server <@${member.id}>`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
