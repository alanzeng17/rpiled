var ws281x = require('rpi-ws281x-native');
var sleep = require('sleep');

var NUM_LEDS = parseInt(process.argv[2], 10) || 300,
    pixelData = new Uint32Array(NUM_LEDS);

ws281x.init(NUM_LEDS);

// ---- trap the SIGINT and reset before exit
process.on('SIGINT', function () {
  ws281x.reset();
  process.nextTick(function () { process.exit(0); });
});


// ---- animation-loop
var offset = 0;

/*
setInterval(function () {
  for (var i = 0; i < NUM_LEDS; i++) {
    pixelData[i] = colorwheel((offset + i) % 256);
  }

  offset = (offset + 1) % 256;
  ws281x.render(pixelData);
}, 1000 / 30);
*/
// ugh
let sleepTime = 50/1000;
let realSleepTime = parseInt(sleepTime * Math.pow(10, 6));
console.log(realSleepTime);
let color = 0xbf00ff;
let iterations = 50;

for (let i = 100; i < 200; i++) {
  pixelData[i] = 0xffff00;
}
for (let i = 200; i < 300; i++) {
  pixelData[i] = 0xff0000;
}
ws281x.render(pixelData);

/*
for (let i = 0; i < iterations; i++){
  for (let q = 0; q < 3; q++){
    for(let j = 0; j < 300; j+=3){
      pixelData[j+q] = color;
    }
    ws281x.render(pixelData);
    sleep.usleep(realSleepTime);
    for (let j = 0; j < 300; j+=3){
      pixelData[j+q] = 0;
    }
  }
}
*/
console.log('Press <ctrl>+C to exit.');


// rainbow-colors, taken from http://goo.gl/Cs3H0v
function colorwheel(pos) {
  pos = 255 - pos;
  if (pos < 85) { return rgb2Int(255 - pos * 3, 0, pos * 3); }
  else if (pos < 170) { pos -= 85; return rgb2Int(0, pos * 3, 255 - pos * 3); }
  else { pos -= 170; return rgb2Int(pos * 3, 255 - pos * 3, 0); }
}

function rgb2Int(r, g, b) {
  return ((r & 0xff) << 16) + ((g & 0xff) << 8) + (b & 0xff);
}