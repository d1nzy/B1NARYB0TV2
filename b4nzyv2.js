`use strict`
var Eris = require("eris")
var userid = "your userid here";
var token = "your discord token here, dont leak to anyone";
var pf = "b.";
let self = new Eris.CommandClient(token, {userAccount: true}, {
    description: "#bwnduv2",
    ignoreSelf: false,
    defaultHelpCommand: false,
    defaultCommandOptions: {
        requirements: {
            'userIDs': userid
        }
    }
});

self.on("messageCreate", (msg) => {
    if(msg.author.id == userid) {
        if(msg.content === pf + "selfbot") { //selfbot, you're getting banned kiddo
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "http://i.imgur.com/dumNNPR.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "delete") { //ill delete u kid
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "https://cdn.discordapp.com/attachments/298778712709529603/300670339694985216/unknown.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "first") { //first
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "http://i.imgur.com/hPJxWj2.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "disable") { //disable
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "http://i.imgur.com/bFmevd6.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "mention") { //mention
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "http://i.imgur.com/87zPJaJ.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "strikes") { //strikes
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "http://i.imgur.com/bbJFND9.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "suspended") { //EXCESSIVE STUPIDNESS
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "http://i.imgur.com/x6BRydZ.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "1rony") { //no emotes
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "https://i.imgur.com/AfhCWL2.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "b1nzyirl") { //banne xd
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "https://i.imgur.com/OYS5zzy.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "heckoff") { //heck off, kid
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "https://i.imgur.com/8i4U1vK.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "quit") { //QUIT DISCORD, KID
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "https://i.imgur.com/kTKOaU3.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "sp1nzy") { //look at the man go
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "https://i.imgur.com/bKG4BEP.gif",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "idot") { //ur idot
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "https://i.imgur.com/wbaXUCf.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "nofurries") { //dont post furry stuff
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "https://i.imgur.com/IHP2kP9.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "b1nzybuddy") { //i will ip ban you
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "https://i.imgur.com/oP5Dsz3.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "shittymemes") { //i will literally ban you for making shitty memes
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "http://takeb1nzyto.space"
                },
                image: {
                    url: "https://i.imgur.com/q4miz5p.png",
                    color: 0x7289DA
                },
                footer: {
                    timestamp: new Date()
                }
            }});
            setTimeout(function(){ self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === pf + "info") {//info lul
            self.editMessage(msg.channel.id, msg.id, {embed: {
                author: {
                    name: "b1naryb0t v2",
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    url: "https://github.com/Immortalizd/B1NARYB0T"
                },
                description: "I just wanna take this command to say thanks to these 2 people. <@!193882745573867521>, and the meme himself, <@!80351110224678912>. I love you two very much, so dont let anything happen to you, okay?!\noh, and the original git/sourcecode link is [here](https://github.com/Immortalizd/B1NARYB0T) or click the title.",
                color: 0x7289DA,
                timestamp: new Date(),
                footer: {
                    icon_url: "https://cdn.discordapp.com/avatars/80351110224678912/a_ca74eee11fb2aa8f142838870eead2ab.gif",
                    text: "Made in Eris by Immo, skidded and updated by d1nzy in Eris"
                }
            }});
            setTimeout(function() { self.deleteMessage(msg.channel.id, msg.id) }, 10000);
        } else if(msg.content === "..die") {
            self.deleteMessage(msg.channel.id, msg.id);
            setTimeout(function() {process.exit(0);}, 500);
        }
    }
});

    self.connect();
