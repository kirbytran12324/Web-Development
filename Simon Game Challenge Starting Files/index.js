let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let level;

function playSound(randomChosenColour) {
    switch (randomChosenColour) {
        case "red":
            let red = new Audio("sounds/red.mp3");
            red.play().then(r => console.log(r) ).catch(e => console.log(e));
            break;
        case "blue":
            let blue = new Audio("sounds/blue.mp3");
            blue.play().then(r => console.log(r) ).catch(e => console.log(e));
            break;
        case "green":
            let green = new Audio("sounds/green.mp3");
            green.play().then(r => console.log(r) ).catch(e => console.log(e));
            break;
        case "yellow":
            let yellow = new Audio("sounds/yellow.mp3");
            yellow.play().then(r => console.log(r) ).catch(e => console.log(e));
            break;
        default:
            break;
    }
}

function animatePress(userChosenColour) {
    $("#" + userChosenColour).addClass("pressed");
    setTimeout(function () {
        $("#" + userChosenColour).removeClass("pressed");
    }, 100);
}

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    userClickedPattern = [];
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function buttonHandler() {
    $(".btn").click(function () {
        let userChosenColour = this.id;
        playSound(userChosenColour);
        animatePress(userChosenColour);
        userClickedPattern.push(userChosenColour);
    });
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        let wrong = new Audio("sounds/wrong.mp3");
        wrong.play().then(r => console.log(r) ).catch(e => console.log(e));
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startGame();
    }
}

function startGame() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    $(document).off("keypress").keypress(function () {
        nextSequence();
    });
}

$(document).ready(function () {
    buttonHandler()
    startGame();
    $(".btn").click(function () {
        checkAnswer(userClickedPattern.length - 1);
    });
});