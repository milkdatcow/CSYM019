function circlePress(){
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.1;
    console.log(element.style.opacity);
}

function onLoad(){
    var circle = document.getElementById('circle');
    circle.addEventListener('click',circlePress);
    circle.style.opacity = 0.5;
}


document.addEventListener('DOMContentLoaded', onLoad)