module.exports = async (client, msg) => {
    if (msg.author.bot || (msg.content.startsWith("`") && msg.content.charAt(msg.content.length - 1) == "`")) return;
    let prefixes = [client.config.prefix, `<@${client.user.id}> `, `<@!${client.user.id}> `];
    for (thisPrefix of prefixes) if (msg.content.startsWith(thisPrefix)) client.prefix = thisPrefix;
    if(msg.content.indexOf(client.prefix) !== 0) return;

    // To Do: Incorporate mongo db

    //Load Args, cmd
    const args = msg.content.slice(client.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let cmd = client.commands.get(command);

    //Run cmd file after checking locks of file     
    if(cmd) {
        let usrFound = client.owners.find(usr => (usr == msg.author.id));
        if (cmd.help.owner && (!usrFound)) return msg.channel.send("You're not owner!");
        if (cmd.help.locked && (!usrFound)) return msg.channel.send("Command is locked, my apologies");
        if (!msg.guild && (cmd.help.guild == true)) return msg.channel.send("Command is guild only!");
        cmd.run(client, msg, args);
    }
}