var data = [
    { top: 2, left: 5 },
    { top: 10, left: 6 },
    { top: 1, left: 7 },
    { top: 6, left: 3 },
    { top: 9, left: 2 },
    { top: 7, left: 8 },
    { top: 3, left: 9 },
    { top: 5, left: 1 },
    { top: 4, left: 4 },
    { top: 10, left: 10 }
];
var n = data.length;
i = 0;


var newElement = document.createElement('div');
newElement.style.width = "500px";
newElement.style.height = "500px";
newElement.style.position = "relative";
newElement.style.border = "1px solid black";
newElement.style.backgroundColor = "red";

var body = document.getElementsByTagName('body')[0];
body.appendChild(newElement);

for (i = 0; i < n; i++) {
    var child = document.createElement('div');
    child.style.width = '30px';
    child.style.height = '30px';
    child.style.position = 'absolute';
    child.style.top = data[i].top * 40 + 'px';
    child.style.left = data[i].left * 40 + 'px';
    child.style.backgroundColor = 'black';
    child.setAttribute('class', 'blocks');
    newElement.appendChild(child);
    console.log("helloooo before the loop");
    child.onclick = function() {
        console.log("inside the loop");
        newElement.removeChild(this);
        var topData = this.style.top;
        var leftData = this.style.left;
        var removed = document.createElement('li')
        removed.appendChild(document.createTextNode("left: " + leftData + '\t' + "top :" + topData));
        list.appendChild(removed);
    }
}
console.log("outside the loop");
var list = document.createElement('ul');
list.style.fontSize = '25px';
body.appendChild(list);
list.style.marginLeft = "40px";