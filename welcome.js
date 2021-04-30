module.exports = (client) => {

    const channelId = '835080809912074243' //general channel
    client.on('guildMemberAdd', (member) =>{
        console.log(member)

        const message = `Welcome to the server <@${member.id}> I will ping <@664063399092813834> for you`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
