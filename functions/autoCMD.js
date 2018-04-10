const fs = require("fs");

module.exports = (client, command) => {
  // let commandList = fs.readdirSync('/home/empy/p/commands/');
  //
  // if (command) {
  //   if (commandList.indexOf(`${command}.js`) >= 0) {
  //     delete require.cache[require.resolve(`/home/empy/p/commands/${command}`)];
  //     client.commands[command] = require(`/home/empy/p/commands/${command}`);
  //   }
  // } else {
  //   for (let i = 0; i < commandList.length; i++) {
  //     let prop = commandList[i];
  //     if (prop.match(/\.js$/)) {
  //       delete require.cache[require.resolve(`/home/empy/p/commands/${prop}`)];
  //       client.commands[prop.slice(0, -3)] = require(`/home/empy/p/commands/${prop}`);
  //       console.log(client.colors.yellow(`Loaded in ${prop}`));
  //     }
  //   }
  // }

  let commandList = fs.readdirSync('/Desktop/PJS/commands/');

  if (command) {
    if (commandList.indexOf(`${command}.js`) >= 0) {
      delete require.cache[require.resolve(`/Desktop/PJS/commands/${command}`)];
      client.commands[command] = require(`/Desktop/PJS/commands/${command}`);
    }
  } else {
    for (let i = 0; i < commandList.length; i++) {
      let prop = commandList[i];
      if (prop.match(/\.js$/)) {
        delete require.cache[require.resolve(`/Desktop/PJS/commands/${prop}`)];
        client.commands[prop.slice(0, -3)] = require(`/Desktop/PJS/commands/${prop}`);
        console.log(client.colors.yellow(`Loaded in ${prop}`));
      }
    }
  }
}
