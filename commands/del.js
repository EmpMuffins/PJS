exports.run = async (client, msg, args) => {
    if  (msg.guild && !msg.member.hasPermission("MANAGE_MESSAGES", {checkAdmin: true , checkOwner: true})) return msg.channel.send("You do not have perms to edit messages.");
    else if (msg.guild && !msg.guild.members.get(client.user.id).hasPermission("MANAGE_MESSAGES", {checkAdmin: true , checkOwner: true})) return msg.channel.send("I do not have perms to edit messages.")
  
    if (!args[0]) return msg.channel.send("Forgot to tell me how many!", {code: "fix"}).then((msgy)=>msgy.delete({timeout:5000}));
    else if(isNaN(args[0]) || args[0] > 99 || args[0] < 1) return msg.channel.send("Please provide a number between 0 and 100 instead.", {code: "fix"}).then((msgy)=>msgy.delete({timeout:5000}));
  
    let counts = (parseInt(args[0]) + 1);
    msg.channel.messages.fetch({ limit: counts }).then(messages => msg.channel.bulkDelete(messages)).catch(console.error);
  
  }
  
  exports.help = {
    name: 'del',
    desc: "delete a specific amount of messages",
    type: "Admin",
    usage: "del <amount of msgs>",
    owner: true,
    locked: false,
    guild: true
  }