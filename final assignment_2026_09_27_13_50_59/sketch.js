let d = 57; 
let imgs = [];           
let sounds = [];        

function preload() {
  
  imgs[0] = loadImage('sao paulo.jpg');
  imgs[1] = loadImage('stay.jpg');
  imgs[2] = loadImage('inthedark.jpg');
  imgs[3] = loadImage('nobrokeboys.jpg');
  imgs[4] = loadImage('sajanbin.jpg');
  imgs[5] = loadImage('udiudi.jpg');
  imgs[6] = loadImage('weongo.jpg');
  imgs[7] = loadImage('khelani.jpg');
  imgs[8] = loadImage('laavan.jpg');
  imgs[9] = loadImage('TD.jpg');
  imgs[10] = loadImage('swim.jpg');
  imgs[11] = loadImage('thriller.jpg');
  imgs[12] = loadImage('timeless.jpg');
  imgs[13] = loadImage('questions.jpg');
  imgs[14] = loadImage('mdb.jpg');
  imgs[15] = loadImage('losemymind.jpg');
  imgs[16] = loadImage('vl5.jpg');
  imgs[17] = loadImage('AG.jpg');
  imgs[18] = loadImage('gotosleep.jpg');
  imgs[19] = loadImage('nohook.jpg');
  imgs[20] = loadImage('otr.jpg');
  imgs[21] = loadImage('subh.jpg');
  imgs[22] = loadImage('vaarijava.jpg');

  
  sounds[0] = loadSound('saopaulo.mp3');
  sounds[1] = loadSound('stay.mp3');
  sounds[2] = loadSound('inthedark.mp3');
  sounds[3] = loadSound('nobrokeboys.mp3');
  sounds[4] = loadSound('sajanbin.mp3');
  sounds[5] = loadSound('udiudi.mp3');
  sounds[6] = loadSound('weongo.mp3');
  sounds[7] = loadSound('khelani.mp3');
  sounds[8] = loadSound('lavaan.mp3');
  sounds[9] = loadSound('TD.mp3');
  sounds[10] = loadSound('swim.mp3');
  sounds[11] = loadSound('thriller.mp3');
  sounds[12] = loadSound('timeless.mp3');
  sounds[13] = loadSound('questions.mp3');
  sounds[14] = loadSound('mdb.mp3');
  sounds[15] = loadSound('losemymind.mp3');
  sounds[16] = loadSound('vl5.mp3');
  sounds[17] = loadSound('AG.mp3');
  sounds[18] = loadSound('gotosleep.mp3');
  sounds[19] = loadSound('nohook.mp3');
  sounds[20] = loadSound('otr.mp3');
  sounds[21] = loadSound('subh.mp3');
  sounds[22] = loadSound('vaarijava.mp3');

 
}

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(20);

 

  let imageIndex = 0;

  for (let i = 0; i < floor(height / d); i++) {
    for (let j = 0; j < floor(width / d); j++) {
      let x = j * d + d / 2;
      let y = i * d + d / 2;

      // 1. Draw colorful stroke and container circle
      strokeWeight(5);
      stroke((x / width) * 255, (y / height) * 190, 255 - (x / width) * 255);
      fill(255);
      circle(x, y, d);

      // 2. Grab current image cover
      let currentImg = imgs[imageIndex % imgs.length];

      // 3. Clip image inside circle boundary
      push();
      translate(x, y);

      drawingContext.save();
      drawingContext.beginPath();
      drawingContext.arc(0, 0, (d - 5) / 2, 0, TWO_PI);
      drawingContext.clip();

      imageMode(CENTER);
      if (currentImg) {
        image(currentImg, 0, 0, d, d);
      }

      drawingContext.restore();
      pop();

      imageIndex++;
    }
  }
}

function mousePressed() {
  userStartAudio(); // Enable audio engine on user click

  let imageIndex = 0;

  for (let i = 0; i < floor(height / d); i++) {
    for (let j = 0; j < floor(width / d); j++) {
      let x = j * d + d / 2;
      let y = i * d + d / 2;

      let distance = dist(mouseX, mouseY, x, y);

      if (distance < d / 2) {
        let selectedIndex = imageIndex % imgs.length;

        // Stop all other audio playing
        for (let s of sounds) {
          if (s && s.isPlaying()) {
            s.stop();
          }
        }

        // Play track corresponding to clicked image
        if (sounds[selectedIndex] && sounds[selectedIndex].isLoaded()) {
          sounds[selectedIndex].play();
        }

        return; // Exit search once clicked circle is found
      }

      imageIndex++;
    }
  }
}