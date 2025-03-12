function circlePress(){
    console.log("button pressed");
    document.body.style.background = 'none';
    document.body.style.backgroundColor = 'blue';
}

function onLoad(){
    var circle = document.getElementById('circle');
    circle.style.opacity = 0.5;
    circle.addEventListener('click',circlePress);
}


document.addEventListener('DOMContentLoaded', onLoad)