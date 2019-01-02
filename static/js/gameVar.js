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
    "What kind of devices is NOT part of a smart home?\n 1. Telephone\n 2. Smart phone\n 3. Roomba\n 4. Samrt lock",
    "Can a person use their smart phones to remotely control other smart devices?\n 1. Yes\n 2. No",
    "What is one of the benefits of having a smart home?\n 1. Cost\n 2. Reliability\n 3. Security\n 4. Learning ",
    "What is another name for smart home?\n 1. Home Automation\n 2. Technologically adapt\n 3. House Intel",
    "What does smart houses not include?\n 1. Centralized control of security locks\n 2.Surveillance cameras\n 3. Universal remote",
    "Smart home uses radio frequency devices to enable the remote monitoring and management of appliances and systems, such as lighting and heating.?\n 1. Yes\n 2. No"
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
    "What is the device used to convert harmful gas into more harmless gas for vehicles?\n (Please answer in small letters)",
    "What is NOT one of the effects of global warming?\n 1. Increase in sea level\n 2. Unnatural changes to the seasons\n 3. Reduction of greenhouse gases\n 4. Destruction of the ozone layer",
    "Which country currently emits the most greenhouse gases?\n 1. China\n 2. The United States\n 3. India\n 4. The United Kingdom",
    "Which planet's poisonous atmosphere has been described as the product of a 'runaway greenhouse effect'?\n 1. Earth\n 2. Jupiter\n 3. Mars\n 4. Venus",
    "Which of the following lightbulb types uses the least energy, and therefore results in fewer greenhouse gas emissions?\n 1. Halogen\n 2. Incandescent\n 3. Compact flourescent",
    "How many human deaths per year does the World Health Organization attribute to climate change?\n 1. 10,500\n 2. 1,500\n 3. 150,000\n 4. 1,500,000"
]
var hardAnswers=[
    "catalytic converter",
    "3",
    "1",
    "4",
    "3",
    "3"
]
