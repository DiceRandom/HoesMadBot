
const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = '&';
const token = 'PLACETOKENHERE';
var currentConnectedServers = 0; // 0 byt default

bot.on('ready', () =>{
	currentConnectedServers = 0;
	console.log("Bot Online.");
    getCurrentServers();
    setCurrentServers();
})

bot.on('message', message=>{
	let args = message.content.substring(prefix.length).split(" ");
	

	if (message.author == bot.user) { // Prevent bot from responding to its own messages
        return
    }

    

    //if(message.author.role.name == "Owner"){
    //	message.reply(" WOAH TOUGH GUY");
    //}
	
    if ['fuck you', 'fuck', 'hoes mad'].includes(message.content.toLowerCase()) {
	message.channel.send(new Discord.Attachment("https://i.ytimg.com/vi/Go1H4jB8Baw/hqdefault.jpg"));
    }

    // don't mind this i was too lazy to make a better system
	



	if(message.content.startsWith(prefix)){
	switch(args[0]){
		case 'info':
			if(args[1] === "version"){
				message.channel.send("umm, testing..?");
			}else if(args[1] === "creator"){
				message.channel.send("⎝⎝⎠⎝Rส็็็็็็็็็็็็ndomDice⎠⎝⎠⎠#9734");
			}else if(args[1] === "?"){
				message.channel.send("Pretty much, (&info version) for version number.");
				message.channel.send("And (&info creator) for creator.");
			}else{
				message.channel.send("Sorry, what? do, &info ?");
			}
			break;

		
	}
}
})

function setCurrentServers() {
		if(currentConnectedServers = 1){
    		bot.user.setActivity("with hoes that are mad on " + currentConnectedServers + " server.")
		}else if(currentConnectedServers > 1){
			bot.user.setActivity("with hoes that are mad on " + currentConnectedServers + " servers!")
		}else{
			bot.user.setActivity("Nobody's mad")
		}
}

function getCurrentServers(){
	currentConnectedServers = 0;
	console.log("Servers:")
	bot.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
        currentConnectedServers++;
    })
}

bot.login(token);
