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
    "What is most harmful to the environment?\n 1. Carbon monoxide\n 2. Carbon dioxide\n 3. Oxygen\n 4. Hydrogen",
    "How can business or business leaders NOT reduce or reverse global warming?\n 1. Improve their energy efficiency\n 2. Usage of renewable energy\n 3. Reduce their carbon emissions\n 4. Offer customers high-carbon-emitting products",
    "What can the community do to NOT help reduce global warming?\n 1. Organise a community event to raise awareness of global warming\n 2. Throw plastic, paper and metal trash into their respective recycling bin\n 3. Increase the usage of CFC products",
    "What is CFC in its full name?\n 1. Chlorofluorocarbon\n 2. Carbonfluorochlorine\n 3. It does not have a full name",
    "What does CFC do?\n 1. Reduce the amount of carbon dioxide in the air\n 2. Helps to reduce carbon monoxide in the air\n 3. Destroys the ozone layer",
    "Can we reduce global warming by reducing the usage of air-conditioning?\n 1. Yes\n 2. No"
]
var normalAnswers=[
    "1",
    "4",
    "3",
    "1",
    "3",
    "1"
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
