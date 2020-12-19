var body = document.getElementsByTagName('body')[0];


var main_wrapper = document.createElement('div');
main_wrapper.style.height = "1000px";
main_wrapper.style.position = "relative";
main_wrapper.style.backgroundColor = "lightgreen";
body.appendChild(main_wrapper);




var left = document.createElement('button');
left.innerHTML = "Left";
left.style.marginLeft = "700px"
main_wrapper.appendChild(left);

var right = document.createElement('button');
right.innerHTML = "Right";
right.style.marginLeft = "30px";
main_wrapper.appendChild(right);

var image_wrapper = document.createElement('div');
image_wrapper.style.height = "500px";
image_wrapper.style.width = "500px";
image_wrapper.style.marginLeft = "700px";
image_wrapper.style.position = "relative";
image_wrapper.style.overflow = "hidden";
main_wrapper.appendChild(image_wrapper);

unorderedList = document.createElement('ul');
unorderedList.style.padding = "0px";
unorderedList.style.position = "absolute";
unorderedList.style.display = "block";
unorderedList.style.overflow = "hidden";
unorderedList.style.whiteSpace = "nowrap";
image_wrapper.appendChild(unorderedList);



for (var i = 1; i < 5; i++) {
    var list = document.createElement('li');
    list.style.listStyle = "none";
    list.style.display = "inline";
    list.setAttribute('class', 'pictures');
    unorderedList.appendChild(list);

    var imgList = document.createElement('img');
    imgList.setAttribute('src', 'img/photo' + i + '.jpg');

    list.appendChild(imgList);
}

var images = document.getElementsByClassName('pictures');
var countL = 0;
var countR = 0;
var count = 0;

left.onclick = function() {
    countL++;
    handleTileLeft(countL);
}

right.onclick = function() {
    countR++;
    handleTileRight(countR);
}

var handleTileLeft = function(x) {
    if (countL % 4 == 0) {
        count = 0;
    } else
        count++;
    var index = setInterval(function() {

        unorderedList.style.left = '-' + count * 500 + 'px';
        clearInterval(index);


    }, 10)
};

var handleTileRight = function(x) {
    if (count == 0) {
        count = 3;
    } else
        count--;
    var index = setInterval(function() {
        unorderedList.style.left = '-' + count * 500 + 'px';
        clearInterval(index);
    }, 10)
};