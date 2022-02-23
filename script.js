//les variables globales
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let openDoor1;
let openDoor2;
let openDoor3;

const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"; 
let numClosedDoors = 3;
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let startButton = document.getElementById('start');
let currentlyPlaying = true;

//les fonctions
const isBot=(door)=>{
    if(door.src===botDoorPath){
        return true;
    }else{
        return false;
    }
}

const isClicked=(door)=>{
    if(door.src ===closedDoorPath){
        return false;
    }else{
        return true;
    }
}

const playDoor=(door)=>{
    numClosedDoors-- ;
    if(numClosedDoors===0){
        gameOver('win');
    }else if(isBot(door)){
        gameOver();
    }

}

const randomChoreDoorGenerator=()=>{// genere de maniere aleatoire les images des 3 portes
    let choreDoor = Math.floor(Math.random()* numClosedDoors);
    if(choreDoor === 0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }else if(choreDoor === 1){
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    }else{
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    }
}

doorImage1.onclick=()=>{
    if(currentlyPlaying && !isClicked(doorImage1)){
        doorImage1.src = openDoor3;
        playDoor(doorImage1);
    }
}

doorImage2.onclick=()=>{
    if(currentlyPlaying && !isClicked(doorImage2)){
        doorImage2.src = openDoor1;
        playDoor(doorImage2);
    }
}

doorImage3.onclick=()=>{
    if(currentlyPlaying && !isClicked(doorImage3)){
        doorImage3.src = openDoor2;
        playDoor(doorImage3);
    }
}

startButton.onclick=()=>{
    if(!currentlyPlaying){
        starRound();
    }
}

const starRound=()=>{
    numClosedDoors = 3;
    startButton.innerHTML="Good luck!";
    currentlyPlaying = true;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    randomChoreDoorGenerator();

}

const gameOver=(status) =>{
    if(status==='win'){
        startButton.innerHTML="You win! Play again?";
    }else{
        startButton.innerHTML = "Game Over! Play again?";
    }
    currentlyPlaying=false;
}

starRound();