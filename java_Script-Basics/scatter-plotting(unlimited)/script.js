var boxElement = document.createElement('div');
boxElement.style.width = "700px";
boxElement.style.height = "700px";
boxElement.style.backgroundColor = "yellow";
boxElement.style.position = "relative";
boxElement.style.border = "1px solid green";
boxElement.setAttribute('class', 'block');

var body = document.getElementsByTagName('body')[0];
body.appendChild(boxElement);

var list = document.createElement('ul');
list.style.fontSize = "15px";
body.appendChild(list);

for (var i = 0; i < 100; i++) {
    var child = document.createElement('div');
    child.style.height = "15px";
    child.style.width = "15px";
    child.style.position = "absolute";
    child.style.top = Math.random() * 600 + "px";
    child.style.left = Math.random() * 500 + "px";
    child.style.backgroundColor = "orange";
    boxElement.appendChild(child);

    child.onclick = function() {
        this.parentNode.removeChild(this);
        var Top = this.style.top;
        var Left = this.style.left;
        var gone = document.createElement('li');
        gone.appendChild(document.createTextNode("top: " + Top + "\n" + "left: " + Left));
        list.appendChild(gone);
    }
}