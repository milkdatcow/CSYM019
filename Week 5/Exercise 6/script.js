function circlePress(){
    var element = document.getElementById('circle');
    setInterval(transparentInterval, 10);
    console.log(element.style.opacity);
}

function transparentInterval(){
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.01;
}

function onLoad(){
    var circle = document.getElementById('circle');
    circle.addEventListener('click',circlePress);
    circle.style.opacity = 1;
}


document.addEventListener('DOMContentLoaded', onLoad)