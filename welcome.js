module.exports = client => {

    const channelID = "835444751494807593" //testing channel
    client.on('GuildMemberAdd', (member) =>{
        console.log(member)
    })

    const message = `Welcome to the server <@${member.id}>, I will ping for you`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
}
