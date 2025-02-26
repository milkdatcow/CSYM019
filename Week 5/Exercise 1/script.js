function circlePress(){
    alert("The button was pressed");
}

function onLoad(){
    var circle = document.getElementById('circle');

    circle.addEventListener('click',circlePress);
}


document.addEventListener('DOMContentLoaded', onLoad)