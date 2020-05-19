function init() {
    canva = document.getElementById("canva2");
    console.log(canva);
    W = 700
    H = 400
    canva.width = W;
    canva.height = H;
    pen = canva.getContext('2d');
    console.log(pen);
    e = {
        x: 10,
        y: 10,
        wbird: 60,
        hbird: 60,
        speed: 20,
    };
    e1 = {
        x: 150,
        y: 50,
        wbird: 60,
        hbird: 60,
        speed: 30,
    };
    e2 = {
        x: 300,
        y: 150,
        wbird: 60,
        hbird: 60,
        speed: 40,
    };
    virus = [e, e1, e2];
    virus_image = new Image();
    virus_image.src = "Assets/v1.png";
}

function draw() {
    // console.log("draw");
    //clear the entire screen
    pen.clearRect(0, 0, W, H);
    pen.fillStyle = "red";
    // pen.fillRect(bird.x, bird.y, bird.wbird, bird.hbird);
    pen.drawImage(virus_image, bird.x, bird.y, bird.wbird, bird.hbird);
    // pen.drawImage(virus_image, bird.x, bird.y, bird.wbird, bird.hbird);
    // pen.drawImage(virus_image, bird.x, bird.y, bird.wbird, bird.hbird);
}

function update() {
    //console.log("update");
    bird.y += bird.speed;
    if (bird.y > H) {
        bird.speed *= -1;
    }
    if (bird.y <= 0) {
        bird.speed *= -1;
        bird.x += 20;
    }
}

function gameloop() {
    console.log("hum yha aa gyae hain bro");
    draw();
    update();
}
init();
// draw();
// update();
//repeatly call gameloop
setInterval(gameloop, 100);