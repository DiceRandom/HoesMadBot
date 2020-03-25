const Discord = require("discord.js");
const auth = require("./auth.json");
const infoJson = require("./package.json");
const bot = new Discord.Client();
const prefix = '.';
const token = auth.token;
var currentConnectedServers = 0; // 0 byt default
var work = true;

bot.on('ready', () => {
    work = true;
    console.log("Bot Online.");
    getCurrentServers();
    setCurrentServers();
})

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");


    if (message.author == bot.user) { // Prevent bot from responding to its own messages
        return
    }

    arrayOfMessages = ['fuck you', "fuck me", "hoes mad", "fuck all of you"];

    //if(message.author.role.name == "Owner"){
    //	message.reply(" WOAH TOUGH GUY");
    //}




    if (work) {
        if (message.content != null) {
            for (var i = 0; i < arrayOfMessages.length; i++) {
                if (message.content.toLowerCase().includes(arrayOfMessages[i])) {
                    message.channel.send(new Discord.Attachment("https://i.ytimg.com/vi/Go1H4jB8Baw/hqdefault.jpg"));
                    console.log("=  someone used a used a message")
                    setCurrentServers();
                }
            }
        }
    }

    if (message.content.startsWith(prefix)) {
        switch (args[0]) {
            case 'info':
                if (args[1] === "version") {
                    message.channel.send(package.version);
                    console.log("= someone asked about version")
                } else if (args[1] === "creator") {
                    message.channel.send("@ran.dice#9734");
                    console.log("= someone asked about you")
                }
                break;
            case 'stop':
                work = false;
                message.channel.send(" Hoes disabled");
                console.log("= someone disabled your hoes")
                break;

            case 'start':
                work = true;
                console.log("= someone enabled your hoes :)")
                break;

        }
    }
})

function setCurrentServers() {
    getCurrentServers()
    if (currentConnectedServers = 1) {
        bot.user.setActivity("with hoes that are mad on a server.")
    } else if (currentConnectedServers > 1) {
        bot.user.setActivity("with hoes that are mad on " + currentConnectedServers + " servers!")
    } else {
        bot.user.setActivity("Nobody's mad")
    }
}

function getCurrentServers() {
    currentConnectedServers = 0;
    console.log("Servers:")
    bot.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
        currentConnectedServers++;
    })
}

bot.login(token);
