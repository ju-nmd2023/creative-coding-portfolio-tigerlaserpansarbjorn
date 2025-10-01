function setup() {
    createCanvas(600, 900);
    noFill();
    stroke(0);

    let cols = 12;
    let rows = 20;
    let size = 40;
    let spacing = 50;

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let xpos = 50 + x * spacing;
            let ypos = 50 + y * spacing;
        }
    }
}