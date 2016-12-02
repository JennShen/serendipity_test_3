
var prompts = [
	"What made you smile today?",
	"What was the funniest thing that has happened to you today?",
	"Who makes you blush and your heart flutter?",
	"Who was your first crush? What were they like?",
	"What kind of relationship do you have with your best friend?",
	"What was the best moment of your last relationship?",
	"If a psychic could tell you what will happen in the future, what would you want to know?",
	"What is the craziest thing that you’ve ever done?",
	"What is the best advice you’ve ever been given?",
	"What is your dream vacation and who would you take with you?",
	"What is one thing that you have yet to cross off your bucket list?",
	"What is your greatest accomplishment in life so far?",
	"What was your favorite childhood memory and why?",
	"Who is your role model?",
	"What is your favorite travel memory and why?",
	"If you could imagine a perfect day, what would it entail?",
	"What was the last song that got stuck in your head?",
	"If you could invite anyone to a dinner party, who would it be?",
	"If you could have a superpower, what would it be?",
	"What about your life are you the most grateful for?"
];

// var index = 0;

// for (var i = 0; i < prompts.length-1;i++) {
var i = 0;
	// Trump
	var promptSentence = prompts[i];

	// var promptDiv = document.createElement("h1");
	// promptDiv.style.position = "absolute";
	// promptDiv.style.left = 50;
	// promptDiv.style.top = 50;
	promptDiv.textContent = promptSentence;
	// promptDiv.style.animationDelay = (5 * (i+1)) + "s";
	// promptDiv.style.fontSize = 30 + "px";
	// document.body.appendChild(promptDiv);
	var socket = io();

	socket.on("connect", function() {
		console.log("Connected to socket server!");
	});

	var form = document.querySelector("form");
	// You can get access to elements within a form by using their name
	var messageInput = form.elements["message"];

	form.addEventListener("submit", function (event) {
		// Prevent the default submit behavior (e.g. refreshing the page)
		event.preventDefault();

		// Do whatever you want with the input here
		var message = messageInput.value;

		//search for bad words
		if(containsProfanity(message)){
   		 	//if found, alert("the answer contains bad words, please try again")
			//wipe out text in message field
			// alert("Your answer contains inappropriate words. Please enter another response.");
			// document.getElementById("promptDiv").innerHTML = "";
			// socket.emit("message", "improper answer");
	  //  		messageInput.value = "";

			// if (++i >= prompts.length){
			// 		i=0;
			// }
			// document.getElementById("promptDiv").innerHTML = prompts[i];
		}
		else {
			if(message != "" && message != " "){
			// alert("You have a good answer");
   			//else if not found, continue to send
   				document.getElementById('sound2').play();

	   			socket.emit("message", message);

	   			messageInput.value = "";
	   			// localStorage.setItem("message", message);

		
			}
			if (++i >= prompts.length){
					i=0;
			}
			document.getElementById("promptDiv").innerHTML = prompts[i];

		}
		//if want to change prompt with or without bad words place above line here

		// Then when you are ready, send the message to the server. The first 
		// parameter is the name of the custom event. The second parameter is what
		// data you want to send along - it can be a string, number, object, etc.
	});

// extend strings with the method "contains"
String.prototype.contains = function(str) { return this.indexOf(str) != -1; };

// profanities of choice
var profanities = new Array(
"2 girls 1 cup",
"acrotomophilia",
"alabama hot pocket",
"alaskan pipeline",
"anal",
"anilingus",
"anus",
"apeshit",
"arsehole",
"ass",
"asshole",
"assmunch",
"auto erotic",
"autoerotic",
"babeland",
"baby batter",
"baby juice",
"ball gag",
"ball gravy",
"ball kicking",
"ball licking",
"ball sack",
"ball sucking",
"bangbros",
"bareback",
"barely legal",
"barenaked",
"bastard",
"bastardo",
"bastinado",
"bbw",
"bdsm",
"beaner",
"beaners",
"beaver cleaver",
"beaver lips",
"bestiality",
"big black",
"big breasts",
"big knockers",
"big tits",
"bimbos",
"birdlock",
"bitch",
"bitches",
"black cock",
"blonde action",
"blonde on blonde action",
"blowjob",
"blow job",
"blow your load",
"blue waffle",
"blumpkin",
"bollocks",
"bondage",
"boner",
"boob",
"boobs",
"booty call",
"brown showers",
"brunette action",
"bukkake",
"bulldyke",
"bullet vibe",
"bullshit",
"bung hole",
"bunghole",
"busty",
"butt",
"buttcheeks",
"butthole",
"camel toe",
"camgirl",
"camslut",
"camwhore",
"carpet muncher",
"carpetmuncher",
"chink",
"chocolate rosebuds",
"circlejerk",
"cleveland steamer",
"clinton",
"clit",
"clitoris",
"clover clamps",
"clusterfuck",
"cock",
"cocks",
"coprolagnia",
"coprophilia",
"cornhole",
"coon",
"coons",
"creampie",
"cum",
"cumming",
"cunnilingus",
"cunt",
"darkie",
"date rape",
"daterape",
"deep throat",
"deepthroat",
"dendrophilia",
"dick",
"dildo",
"dingleberry",
"dingleberries",
"dirty pillows",
"dirty sanchez",
"doggie style",
"doggiestyle",
"doggy style",
"doggystyle",
"dog style",
"dolcett",
"domination",
"dominatrix",
"dommes",
"don",
"donald",
"donkey punch",
"double dong",
"double penetration",
"dp action",
"dry hump",
"dvda",
"eat my ass",
"ecchi",
"ejaculation",
"erotic",
"erotism",
"escort",
"eunuch",
"faggot",
"fecal",
"felch",
"fellatio",
"feltch",
"female squirting",
"femdom",
"figging",
"fingerbang",
"fingering",
"fisting",
"foot fetish",
"footjob",
"frotting",
"fuck",
"fuck buttons",
"fuckin",
"fucking",
"fucktards",
"fudge packer",
"fudgepacker",
"futanari",
"gang bang",
"gay sex",
"genitals",
"giant cock",
"girl on",
"girl on top",
"girls gone wild",
"goatcx",
"goatse",
"god damn",
"gokkun",
"golden shower",
"goodpoop",
"goo girl",
"goregasm",
"grope",
"group sex",
"g-spot",
"guro",
"hand job",
"handjob",
"hard core",
"hardcore",
"hentai",
"hillary",
"hilary",
"homoerotic",
"honkey",
"hooker",
"hot carl",
"hot chick",
"how to kill",
"how to murder",
"huge fat",
"humping",
"incest",
"intercourse",
"jack off",
"jail bait",
"jailbait",
"jelly donut",
"jerk off",
"jigaboo",
"jiggaboo",
"jiggerboo",
"jizz",
"juggs",
"kike",
"kinbaku",
"kinkster",
"kinky",
"knobbing",
"leather restraint",
"leather straight jacket",
"lemon party",
"lolita",
"lovemaking",
"love trumps hate",
"love still trumps hate",
"make love",
"make me come",
"male squirting",
"masturbate",
"menage a trois",
"milf",
"missionary position",
"motherfucker",
"mound of venus",
"mr hands",
"muff diver",
"muffdiving",
"nambla",
"nawashi",
"negro",
"neonazi",
"nigga",
"nigger",
"nig nog",
"nimphomania",
"nipple",
"nipples",
"nsfw images",
"nude",
"nudity",
"nympho",
"nymphomania",
"octopussy",
"omorashi",
"one cup two girls",
"one guy one jar",
"orgasm",
"orgy",
"paedophile",
"paki",
"panties",
"panty",
"pedobear",
"pedophile",
"pegging",
"penis",
"phone sex",
"piece of shit",
"pissing",
"piss pig",
"pisspig",
"playboy",
"pleasure chest",
"pole smoker",
"ponyplay",
"poof",
"poon",
"poontang",
"punany",
"poop chute",
"poopchute",
"porn",
"porno",
"pornography",
"prince albert piercing",
"pthc",
"pubes",
"pussy",
"queaf",
"queef",
"quim",
"raghead",
"raging boner",
"rape",
"raping",
"rapist",
"rectum",
"reverse cowgirl",
"rimjob",
"rimming",
"rosy palm",
"rosy palm and her 5 sisters",
"rusty trombone",
"sadism",
"santorum",
"scat",
"schlong",
"scissoring",
"semen",
"sex",
"sexo",
"sexy",
"shaved beaver",
"shaved pussy",
"shemale",
"shibari",
"shit",
"shitblimp",
"shitty",
"shota",
"shrimping",
"skeet",
"slanteye",
"slut",
"s&m",
"smut",
"snatch",
"snowballing",
"sodomize",
"sodomy",
"spic",
"splooge",
"splooge moose",
"spooge",
"spread legs",
"spunk",
"strap on",
"strapon",
"strappado",
"strip club",
"style doggy",
"suck",
"sucks",
"suicide girls",
"sultry women",
"swastika",
"swinger",
"tainted love",
"taste my",
"tea bagging",
"threesome",
"throating",
"tied up",
"tight white",
"tit",
"tits",
"titties",
"titty",
"tongue in a",
"topless",
"tosser",
"towelhead",
"tranny",
"tribadism",
"trump",
"trumps",
"tub girl",
"tubgirl",
"tushy",
"twat",
"twink",
"twinkie",
"two girls one cup",
"undressing",
"upskirt",
"urethra play",
"urophilia",
"vagina",
"venus mound",
"vibrator",
"violet wand",
"vorarephilia",
"voyeur",
"vulva",
"wank",
"wetback",
"wet dream",
"white power",
"wrapping men",
"wrinkled starfish",
"xx",
"xxx",
"yaoi",
"yellow showers",
"yiffy",
"zoophilia"
);

function containsProfanity(text){
	var str = text.replace(/[^A-Za-z 0-9 \.,\?""\^&\(\)_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
    var returnVal = false; 
    for (var i = 0; i < profanities.length; i++) {
        if(str.toLowerCase().contains(profanities[i].toLowerCase())){
            returnVal = true;
            break;
        }
    }
    return returnVal;
}



// }


