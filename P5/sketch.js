// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA
// https://editor.p5js.org/codingtrain/sketches/SJ02W1OgV

class Square{
  constructor(){
    
  }

  display(){
    translate(150, 200);

    let x = 0;
    let y = 0;

    for (let i = 0; i < slider.value(); i++) {
      let prevx = x;
      let prevy = y;

      let n = i * 2 + 1;
      let radius = 75 * (4 / (n * PI));
      x += radius * cos(n * time);
      y += radius * sin(n * time);

      stroke(165, 21, 209);
      noFill();
      ellipse(prevx, prevy, radius * 2);

      stroke(243, 236, 24);
      line(prevx, prevy, x, y);
    }
    wave.unshift(y);

    translate(200, 0);
    line(x - 200, y, 0, wave[0]);
    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
      vertex(i, wave[i]);
    }
    endShape();

    time += 0.05;

    if (wave.length > 250) {
      wave.pop();
    }
  }
}

class Saw{
  constructor(){
    
  }

  display(){
    translate(-200, 400);

    let x = 0;
    let y = 0;

    for (let i = 1; i <= slider2.value(); i++) {
      let prevx = x;
      let prevy = y;

      let sign;
      if(i%2 == 1){
        sign = -1;
      }else{
        sign = 1;
      }

      let radius = 75 * (sign*2 / (i * PI));
      x += radius * cos(i * time);
      y += radius * sin(i * time);

      stroke(165, 21, 209);
      noFill();
      ellipse(prevx, prevy, abs(radius*2));

      stroke(243, 236, 24);
      line(prevx, prevy, x, y);
    }
    wave2.unshift(y);

    translate(200, 0);
    line(x - 200, y, 0, wave2[0]);
    beginShape();
    noFill();
    for (let i = 0; i < wave2.length; i++) {
      vertex(i, wave2[i]);
    }
    endShape();

    time += 0.05;

    if (wave2.length > 250) {
      wave2.pop();
    }
  }
}

let time = 0;
let wave = [];
let wave2 = [];
let slider;
let slider2;
let square;
let saw;

function setup() {
  createCanvas(600, 800);
  slider = createSlider(1, 256, 1);
  slider2 = createSlider(1, 256, 1);
  square = new Square();
  saw = new Saw();
}

function draw() {
  background(0);
  square.display();
  saw.display();
}
