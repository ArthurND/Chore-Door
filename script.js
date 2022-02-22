//les variables globales
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let openDoor1;
let openDoor2;
let openDoor3;

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"; 
let numClosedDoors = 3;

//les fonctions
const randomChoreDoorGenerator=()=>{// genere de maniere aleatoire les images des 3 portes
    let choreDoor = Math.floor(Math.random(numClosedDoors));
    if(choreDoor===0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }else if(choreDoor===1){
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
    doorImage1.src = botDoorPath;
}

doorImage2.onclick=()=>{
    doorImage2.src = beachDoorPath;
}

doorImage3.onclick=()=>{
    doorImage3.src = spaceDoorPath;
}

