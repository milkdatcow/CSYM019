function circlePress(){
    console.log("button pressed");
    document.body.style.background = 'none';
    document.body.style.backgroundColor = 'blue';
}

function onLoad(){
    var circle = document.getElementById('circle');

    circle.addEventListener('click',circlePress);
}


document.addEventListener('DOMContentLoaded', onLoad)