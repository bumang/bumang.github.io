var body = document.getElementsByTagName('body')[0];

var main_wrapper = document.createElement('div');
main_wrapper.style.height = "500px";
main_wrapper.style.width = "1000px";
main_wrapper.style.position = "relative";
main_wrapper.style.backgroundColor = "black";
body.appendChild(main_wrapper);

var box = document.createElement('div');
box.style.height = "10px";
box.style.width = "10px";
box.style.backgroundColor = "red";
box.style.position = "absolute";
box.style.top = '250px';
box.style.left = '250px';

main_wrapper.appendChild(box);



function Snake() {

    this.element = box;
    this.directionX = '';
    this.directionY = '';
    this.velocity = '';
    this.x = '';
    this.y = '';

    this.initialize = function(info) {
        this.directionX = info.directionX;
        this.directionY = info.directionY;
        this.velocity = info.velocity;
        this.x = info.x;
        this.y = info.y;

    };

    this.updateValue = function(updateData) {
        this.directionX = updateData.directionX;
        this.directionY = updateData.directionY;
        this.velocity = updateData.velocity;
        this.x = updateData.x;
        this.y = updateData.y;
    };


    this.changePosition = function() {
        movingX = this.x + 10;
        movingY = this.y + 10;


        if (movingX >= 900) {
            this.directionX = '-1';
        } else if (this.x <= 0) {
            this.directionX = '1';
        }

        if (movingY >= 500) {
            this.directionY = '-1';
        } else if (this.y <= 0) {
            this.directionY = '1';
        }

        this.x = this.x + this.velocity + this.directionX;
        this.y = this.y + this.velocity + this.directionY;
        this.element.style.top = this.y + 'px';
        this.element.style.left = this.x + 'px';
    }
}

var snake = new Snake();



snake.initialize({
    directionX: 1,
    directionY: 0,
    velocity: 1,
    x: 0,
    y: 0,
});

document.onkeydown = function(event) {
    var keyNumber = event.keyCode;

    switch (keyNumber) {

        case 37:

            snake.updateValue({
                directionX: -1,
                directionY: 0,
                velocity: 1,
                y: snake.y,
                x: snake.x
            });
            // changeDirection();
            break;

        case 38:

            snake.updateValue({
                directionX: 0,
                directionY: -1,
                velocity: 1,
                y: snake.y,
                x: snake.x
            });
            // changeDirection();
            break;

        case 39:

            snake.updateValue({
                directionX: 1,
                directionY: 0,
                velocity: 1,
                y: snake.y,
                x: snake.x
            });
            // changeDirection();
            break;

        case 40:

            snake.updateValue({
                    directionX: 0,
                    directionY: 1,
                    velocity: 1,
                    y: snake.y,
                    x: snake.x
                })
                // changeDirection();
    }
};







setInterval(function() {
    snake.changePosition();
}, 1);