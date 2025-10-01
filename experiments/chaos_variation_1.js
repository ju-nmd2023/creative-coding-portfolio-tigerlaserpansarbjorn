function setup() {
  createCanvas(600, 900);
  stroke(0);
  strokeWeight(2);
  
  let cols = 12;   // number of columns
  let rows = 25;   // number of rows
  let spacing = 40; // vertical spacing
  
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let xpos = 50 + x * spacing;
      let ypos = 50 + y * spacing;
      
      // chaos grows lower down the canvas
      let chaos = map(y, 0, rows, 0, 1);
      
      // line length
      let len = 30;
      
      //angle and offset
      let angle = random(-chaos * PI/4, chaos * PI/4); 
      let dx = random(-chaos * 20, chaos * 20);
      let dy = random(-chaos * 20, chaos * 20);
      
      push();
      translate(xpos + dx, ypos + dy);
      rotate(angle);
      line(-len/2, 0, len/2, 0);
      pop();
    }
  }
}
