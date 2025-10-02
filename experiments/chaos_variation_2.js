function setup() {
  createCanvas(600, 900);
  noFill();
  stroke(0);
  
  let cols = 12;     // number of columns
  let rows = 25;     // number of rows
  let spacing = 50;  // distance between centers
  let size = 30;     // triangle size (radius)
  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let xpos = 60 + x * spacing;
      let ypos = 60 + y * spacing;
      
      // chaos factor grows lower down
      let chaos = map(y, 0, rows, 0, 1);
      
      // random offsets
      let dx = random(-chaos * 20, chaos * 20);
      let dy = random(-chaos * 20, chaos * 20);
      
      // random rotation
      let angle = random(-chaos * PI, chaos * PI);
      
      push();
      translate(xpos + dx, ypos + dy);
      rotate(angle);
      polygon(0, 0, size, 3);  // draw a triangle
      pop();
    }
  }
}

// helper function to draw a polygon (n-gon)
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
