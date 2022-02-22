//les variables globales
let doorImage1 = document.getElementById('door1');
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";

//les fonctions
doorImage1.onclick=()=>{
    doorImage1.src = botDoorPath;
}