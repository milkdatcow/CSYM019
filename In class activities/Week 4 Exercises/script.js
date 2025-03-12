/*
function alertfive(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}
//alertfive();
//alertfive();
*/

function updateheader(){
    var header = document.getElementById('header');
    header.firstChild.nodeValue = 'New Header';
}
function updatetext(){
    var text = document.getElementById('text');
    text.firstChild.nodeValue = 'New Paragraph';
}
function addlisteners(){
    var header = document.getElementById('header');
    var text = document.getElementById('text');
    header.addEventListener('click',updateheader)
    text.addEventListener('click',updatetext)

}

document.addEventListener('DOMContentLoaded', addlisteners)