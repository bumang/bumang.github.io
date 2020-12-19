var colors = ["red", "blue", "green", "yellow"];
var n = colors.length;
var i = 0;

var newElement = document.createElement('div');
newElement.style.width = "600px";
newElement.style.height = "300px";
newElement.style.margin = "40px 700px";
newElement.style.border = "1px solid black"
var body = document.getElementsByTagName('body')[0];
body.appendChild(newElement);

newElement.onclick = function() {
    newElement.style.backgroundColor = colors[i];
    i++;
    if (i == n) {
        i = 0;
    }

}