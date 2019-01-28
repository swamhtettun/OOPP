var canvas = document.getElementById("myGame");
var ctx = canvas.getContext("2d");
var speed=5
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = speed;
var dy = -speed;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount=6;
var brickColumnCount=6;
var brickWidth=130;
var brickHeight=20;
var brickPadding=10;
var brickOffsetTop=30;
var brickOffsetLeft=30;
var bricks=[];
var score=0;
var totalScore=0;
var lives=3;
var easyQuestionsNo=5;
var normalQuestionsNo=5;
var hardQuestionsNo=5;
//var random=Math.floor((Math.random() * 5) + 0);
var easyQuestions=[
    "What is the definition of smart home?\n 1. A house that can think for itself \n 2. A house fitted with technology for comfort\n 3. A house lived by a genius\n 4. A house under the supervision of a highly sophisticated A.I.",
    "What can a smart home NOT do?\n 1. Provides security\n 2. Energy efficient\n 3. Provide daily updates around the house\n 4. Provides convenience",
    "When was the concept of smart home thought of and invented?\n 1. 1970\n 2. 1975\n 3. 1979\n 4. 2001",
    "X10, a communication protocol, sends radio frequency burst of digital information to remotely control devices.\n 1. True\n 2. False",
    "A transmitter can send a signal along the house's electric wiring, telling a device to turn on at a specific time.\n 1. True\n 2. False",
    "X10 is fully reliable as a communication protocol.\n 1. True\n 2. False"
]
var easyAnswers=[
    "2",
    "3",
    "2",
    "1",
    "1",
    "2"
]
var normalQuestions=[
    "What kind of devices is NOT part of a smart home?\n 1. Telephone\n 2. Smart phone\n 3. Roomba\n 4. Smart lock",
    "Can a person use their smart phones to remotely control other smart devices?\n 1. Yes\n 2. No",
    "What is one of the benefits of having a smart home?\n 1. Cost\n 2. Reliability\n 3. Security\n 4. Learning ",
    "What is another name for smart home?\n 1. Home Automation\n 2. Technologically adapt\n 3. House Intel",
    "What does smart houses not include?\n 1. Centralized control of security locks\n 2.Surveillance cameras\n 3. Universal remote",
    "Smart home uses radio frequency devices to enable the remote monitoring and management of appliances and systems, such as lighting and heating?\n 1. Yes\n 2. No"
]
var normalAnswers=[
    "1",
    "1",
    "3",
    "1",
    "3",
    "2"
]
var hardQuestions=[
    "What is the roundabout monthly cost of having a smart home?\n 1. $10-$20\n 2. $35-$70\n 3. $100-$200\n 4. $200-$500",
    "A smart home consists of devices connecting to one another using the Internet.\n 1. False\n 2. True",
    "Which country invented the smart toilet?\n 1. Japan\n 2. The United States\n 3. India\n 4. China",
    "Who was one of the following which invented the computer chip, which led to the invention of today's smart home technology?\n 1. Mike scott\n 2. Matthew Jeff\n 3. Tim Mathius\n 4. Jack Kilby",
    "Which home appliance was first created, triggering the path towards smart home?\n 1. Washing Machine\n 2. Television\n 3. Vacuum Cleaner",
    "Who created the remote control, which then became an essential part of modern life and smart home?\n 1. Albert Einstien\n 2. Marie Curie\n 3. Nikola Tesla\n 4. Tomas Jefferson"
]
var hardAnswers=[
    "4",
    "2",
    "1",
    "4",
    "3",
    "3"
]
