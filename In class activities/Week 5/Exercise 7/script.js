function moveButton(){
    var circle = document.getElementById('circle');
    var positionLeft = circle.offsetLeft;
    circle.style.left = positionLeft - 10 + 'px';
}

function onLoad(){
    document.addEventListener('keydown', moveButton)
}


document.addEventListener('DOMContentLoaded', onLoad)