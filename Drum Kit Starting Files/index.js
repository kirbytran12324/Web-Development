for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', handleClick);
}

function handleClick() {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

function makeSound(key) {
  switch (key) {
    case "w":
      const crash = new Audio('sounds/crash.mp3');
      crash.play().then(r => console.log(r) ).catch(e => console.log(e));
        break;
    case "a":
        const tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play().then(r => console.log(r) ).catch(e => console.log(e));
            break;
    case "s":
        const tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play().then(r => console.log(r) ).catch(e => console.log(e));
            break;
    case "d":
        const tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play().then(r => console.log(r) ).catch(e => console.log(e));
            break;
    case "j":
        const tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play().then(r => console.log(r) ).catch(e => console.log(e));
            break;
    case "k":
        const kick = new Audio('sounds/kick-bass.mp3');
        kick.play().then(r => console.log(r) ).catch(e => console.log(e));
            break;
    case "l":
        const snare = new Audio('sounds/snare.mp3');
        snare.play().then(r => console.log(r) ).catch(e => console.log(e));
            break;
    default:
        console.log(key);
        break;
  }
}

document.addEventListener('keydown', function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}