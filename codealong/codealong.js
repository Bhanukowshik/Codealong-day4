let button = document.getElementById("TheBoxes");
button.addEventListener("Click", myfunction);
var oldvalue = 0;
var i = 1;

function myfunction() {
    letn = document.getElementById("number").Value;
    n = parseInt(oldvalue + n) + parseInt(n);
    for (; i <= n; i++) {
        var box = document.createElement('div');
        box.classList.add('mydiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;
        var oldvalue = document.getElementById("box").lastElementChild.innerHTML;
        console.log(oldvalue);


    }
}