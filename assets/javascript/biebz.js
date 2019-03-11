var questions = [
	{ // 01
		question: "Where did Justin Bieber\'s talent manager discover him?",
		answerChoices: [
			{ answer: "Star Search", value: false, isUsed: false },
			{ answer: "American Idol", value: false, isUsed: false },
			{ answer: "YouTube", value: true, isUsed: false },
			{ answer: "The Voice", value: false, isUsed: false }
		],
		info: "Justin\'s early fanbase developed on YouTube, where he was discovered by a talent manager and signed to RBMG (Raymond Braun Media Group).",
		isAnswered: false,
	},
	{ // 02
		question: "What was the name of Justin\'s debut album?",
		answerChoices: [
			{ answer: "My Life", value: false, isUsed: false },
			{ answer: "My Girl", value: false, isUsed: false },
			{ answer: "My World", value: true, isUsed: false },
			{ answer: "My House", value: false, isUsed: false }
		],
		info: "Bieber released his debut EP, My World, in late 2009. It was certified Platinum in the U.S.",
		isAnswered: false,
	},
	{ // 03
		question: "Who has Justin dated off and on since 2010?",
		answerChoices: [
			{ answer: "Elle King", value: false, isUsed: false },
			{ answer: "Selena Gomez", value: true, isUsed: false },
			{ answer: "Lorde", value: false, isUsed: false },
			{ answer: "Miley Cyrus", value: false, isUsed: false }
		],
		info: "In December 2010, he began dating Selena Gomez. After separating in November 2012, they reconciled a few weeks later before splitting up again in January 2013. They reconciled for a few months in 2013, in 2014 and in 2015. In November 2017, it was revealed that Bieber and Gomez had gotten back together again.",
		isAnswered: false,
	},
	{ // 04
		question: "On which popular TV show did Justin guest star in 2010?",
		answerChoices: [
			{ answer: "The Big Bang Theory", value: false, isUsed: false },
			{ answer: "Pretty Little Liars", value: false, isUsed: false },
			{ answer: "CSI", value: true, isUsed: false },
			{ answer: "Glee", value: false, isUsed: false }
		],
		info: "Bieber guest-starred in the season premiere of the CBS crime drama CSI: Crime Scene Investigation, which aired on September 23, 2010. He played a troubled teen, faced with a difficult decision regarding his only brother, who is also a serial bomber.",
		isAnswered: false,
	},
	{ // 05
		question: "Who performs a duet with Justin in \"Baby\"?",
		answerChoices: [
			{ answer: "Ludacris", value: true, isUsed: false },
			{ answer: "Miley Cyrus", value: false, isUsed: false },
			{ answer: "Selena Gomez", value: false, isUsed: false },
			{ answer: "Nicki Minaj", value: false, isUsed: false }
		],
		info: "After the second verse, Ludacris comes in with the verse-rap, an anecdote of young love when he was thirteen.",
		isAnswered: false,
	},
	{ // 06
		question: "Where was Justin born?",
		answerChoices: [
			{ answer: "London, England", value: false, isUsed: false },
			{ answer: "London, Ontario", value: true, isUsed: false },
			{ answer: "London, Ohio", value: false, isUsed: false },
			{ answer: "London, Arkansas", value: false, isUsed: false }
		],
		info: "Justin Bieber was born on March 1, 1994, in London, Ontario.",
		isAnswered: false,
	},
	{ // 07
		question: "What was Justin's high school GPA?",
		answerChoices: [
			{ answer: "2.35", value: false, isUsed: false },
			{ answer: "1.97", value: false, isUsed: false },
			{ answer: "3.84", value: false, isUsed: false },
			{ answer: "4.00", value: true, isUsed: false }
		],
		info: "He graduated from the St. Michael Catholic Secondary School in 2012 with a 4.00 GPA.",
		isAnswered: false,
	},
	{ // 08
		question: "What is Justin\'s favorite food?",
		answerChoices: [
			{ answer: "Peanut Butter and Jelly", value: false, isUsed: false },
			{ answer: "Swedish Fish", value: false, isUsed: false },
			{ answer: "Spaghetti", value: true, isUsed: false },
			{ answer: "Pizza", value: false, isUsed: false }
		],
		info: "Justin Bieber\'s favorite food is spaghetti Bolognese.",
		isAnswered: false,
	},
	{ // 09
		question: "What instrument did Justin learn to play as a child?",
		answerChoices: [
			{ answer: "French Horn", value: false, isUsed: false },
			{ answer: "Trumpet", value: true, isUsed: false },
			{ answer: "Trombone", value: false, isUsed: false },
			{ answer: "Clarinet", value: false, isUsed: false }
		],
		info: "Growing up, he learned to play the piano, drums, guitar, and trumpet.",
		isAnswered: false,
	},
	{ // 10
		question: "What song earned Justin his first Grammy Award?",
		answerChoices: [
			{ answer: "Baby", value: false, isUsed: false },
			{ answer: "Purpose", value: false, isUsed: false },
			{ answer: "Where Are U Now", value: true, isUsed: false },
			{ answer: "Love Yourself", value: false, isUsed: false }
		],
		info: "In 2015, \"Where Are U Now\" won a Grammy Award for Best Dance Recording.",
		isAnswered: false,
	},
	{ // 11
		question: "Although Usher ultimately won out, what other singer wanted to mentor Justin?",
		answerChoices: [
			{ answer: "Michael Jackson", value: false, isUsed: false },
			{ answer: "Justin Timberlake", value: true, isUsed: false },
			{ answer: "Eminem", value: false, isUsed: false },
			{ answer: "Jay-Z", value: false, isUsed: false }
		],
		info: "Justin Timberlake was also reportedly in the running to sign Bieber but lost the bidding war to Usher.",
		isAnswered: false,
	},
	{ // 12
		question: "Why did Justin have to pay his neighbor $80,900?",
		answerChoices: [
			{ answer: "For stealing his car", value: false, isUsed: false },
			{ answer: "For running over his cat", value: false, isUsed: false },
			{ answer: "For throwing eggs at his house", value: true, isUsed: false },
			{ answer: "For dating his daughter", value: false, isUsed: false }
		],
		info: "On July 9, 2014, Bieber was charged with one misdemeanor count of vandalism for throwing eggs at his Calabasas neighbor's home. With him pleading no contest to the charge, the Los Angeles County Superior Court sentenced him on July 9 to pay $80,900 in restitution.",
		isAnswered: false,
	},
	{ // 13
		question: "What country banned Justin from performing in 2017?",
		answerChoices: [
			{ answer: "China", value: true, isUsed: false },
			{ answer: "Norway", value: false, isUsed: false },
			{ answer: "Germany", value: false, isUsed: false },
			{ answer: "Russia", value: false, isUsed: false }
		],
		info: "In July 2017, the Chinese government banned Justin Bieber from performing in China. A Chinese fan reached out to the Beijing Municipal Bureau of Culture requesting the reason for the ban. The Bureau released a statement, explaining \"Justin Bieber is a gifted singer, but he is also a controversial young foreign singer\", and \"In order to maintain order in the Chinese market and purify the Chinese performance environment, it is not suitable to bring in badly behaved entertainers.\"",
		isAnswered: false,
	},
	{ // 14
		question: "In what song does Justin sing: \" I didn\'t wanna write a song \'cause I didn\'t want anyone thinking I still care\"?",
		answerChoices: [
			{ answer: "Eenie Meenie", value: false, isUsed: false },
			{ answer: "Sorry", value: false, isUsed: false },
			{ answer: "That Should Be Me", value: false, isUsed: false },
			{ answer: "Love Yourself", value: true, isUsed: false }
		],
		info: "\"Love Yourself\" is a kiss-off to a narcissistic ex-lover who did Bieber wrong.",
		isAnswered: false,
	},
	{ // 15
		question: "How many songs from Justin's debut album made the Billboard Hot 100?",
		answerChoices: [
			{ answer: "1", value: false, isUsed: false },
			{ answer: "3", value: false, isUsed: false },
			{ answer: "5", value: false, isUsed: false },
			{ answer: "7", value: true, isUsed: false }
		],
		info: "He became the first artist to have seven songs from a debut record chart on the Billboard Hot 100.",
		isAnswered: false,
	},
	{ // 16
		question: "What is the name of Justin\'s half brother?",
		answerChoices: [
			{ answer: "James", value: false, isUsed: false },
			{ answer: "Jabari", value: false, isUsed: false },
			{ answer: "Jace", value: false, isUsed: false },
			{ answer: "Jaxon", value: true, isUsed: false }
		],
		info: "Bieber has two half-siblings: Jazmyn (born 2009) and Jaxon (born 2010).",
		isAnswered: false,
	},
	{ // 17
		question: "In 2015, Justin became the spokesman for what fashion designer?",
		answerChoices: [
			{ answer: "Ralph Lauren", value: false, isUsed: false },
			{ answer: "Calvin Klein", value: true, isUsed: false },
			{ answer: "Christian Dior", value: false, isUsed: false },
			{ answer: "Tommy Hilfiger", value: false, isUsed: false }
		],
		info: "He became the new \"face\" and \"body\" of Calvin Klein in early 2015.",
		isAnswered: false,
	},
	{ // 18
		question: "Who performs a duet with Justin in \"Never Say Never\"?",
		answerChoices: [
			{ answer: "Usher", value: false, isUsed: false },
			{ answer: "Ludacris", value: false, isUsed: false },
			{ answer: "Sean Kingston", value: false, isUsed: false },
			{ answer: "Jaden Smith", value: true, isUsed: false }
		],
		info: "Between Bieber's R&B vocals and the endearing, catchy rap interlude of Jaden Smith, son of Will and star of \"The Karate Kid\" for which the song was recorded, \"Never Say Never\" is one of Justin\'s many memorable duets.",
		isAnswered: false,
	},
	{ // 19
		question: "What was the name of Justin\'s second studio album?",
		answerChoices: [
			{ answer: "Under the Mistletoe", value: true, isUsed: false },
			{ answer: "Believe", value: false, isUsed: false },
			{ answer: "Purpose", value: false, isUsed: false },
			{ answer: "L.O.V.E", value: false, isUsed: false }
		],
		info: "He released his second studio album, Under the Mistletoe, in November 2011, when it debuted at number one on the Billboard 200.",
		isAnswered: false,
	},
	{ // 20
		question: "Justin serves as a celebrity spokesman for what charity?",
		answerChoices: [
			{ answer: "Packs of Promise", value: false, isUsed: false },
			{ answer: "Pencils of Promise", value: true, isUsed: false },
			{ answer: "Projects of Promise", value: false, isUsed: false },
			{ answer: "Parliament of Promise", value: false, isUsed: false }
		],
		info: "Bieber supports Pencils of Promise, a charity founded by Adam Braun, the younger brother of Bieber's manager. The organization builds schools in developing countries, and Bieber became manager for the organization's campaign in Guatemala.",
		isAnswered: false,
	}
];




