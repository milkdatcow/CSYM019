function circlePress(){
    console.log("button pressed");
    var circle = document.getElementById('circle');

    circle.style.opacity = 1;
}

function onLoad(){
    var circle = document.getElementById('circle');
    circle.style.opacity = 0.5;
    circle.addEventListener('click',circlePress);
}


document.addEventListener('DOMContentLoaded', onLoad)