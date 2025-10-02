function setup(){
    createCanvas(600, 900);
    noFill();
    stroke(0);

    let cols = 12;
    let rows = 25;
    let spacing = 50;
    let size = 30;

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++){
            let xpos = 60 + x * spacing;
            let ypos = 60 + y * spacing;

            let chaos = map(y, 0, rows, 0, 1);

            let dx = random(-chaos * 20, chaos * 20);
            let dy = random(-chaos * 20, chaos * 20);

            let angle = random(-chaos * PI, chaos * PI);

            push();
            translate(xpos + dx, ypos + dy);
            rotate(angle);
            polygon(0, 0, size, 3);
            pop();
        }
    }
}

function polygon(x, y, radius, npoints){
    let angle = TWO_PI / npoints;
    beginshape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}