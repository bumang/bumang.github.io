var body = document.getElementsByTagName('body')[0];

var main_wrapper = document.createElement('div');
main_wrapper.style.height = "500px";
main_wrapper.style.width = "900px";
main_wrapper.style.position = "relative";
main_wrapper.style.backgroundColor = "black";
body.appendChild(main_wrapper);

var box = document.createElement('div');
box.style.height = "15px";
box.style.width = "15px";
box.style.backgroundColor = "red";
box.style.position = "absolute";
main_wrapper.appendChild(box);