function setup() {
  createCanvas(600, 900);
  noFill();
  stroke(0);
  
  let cols = 12;   // number of columns
  let rows = 20;   // number of rows
  let size = 40;   // square size
  let spacing = 50; // distance between squares

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let xpos = 50 + x * spacing;
      let ypos = 50 + y * spacing;
      
      // more chaos the further down on the canvas
      let chaos = map(y, 0, rows, 0, 1);
      
      // add random position
      let dx = random(-chaos * 20, chaos * 20);
      let dy = random(-chaos * 20, chaos * 20);
      
      // add random rotation
      let angle = random(-chaos * 0.5, chaos * 0.5);
      
      push();
      translate(xpos + dx, ypos + dy);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, size, size);
      pop();
    }
  }
}
