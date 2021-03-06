// Updates other pars when moving slider
var rSlider = document.getElementById('r-slider');
var rInput = document.getElementById("R-color");
var gSlider = document.getElementById('g-slider');
var gInput = document.getElementById("G-color");
var bSlider = document.getElementById('b-slider');
var bInput = document.getElementById("B-color");
var hexInput = document.getElementById("event-color");
var aValue = 1;


// Update color wheel based on hex input
document.getElementById('hex-btn').onclick = async () => {
    console.log($('#event-color').val());
    $('#color-input').wheelColorPicker('setValue', hexInput.value);
    setSliders();
    const response = await performPostRequest(rInput.value, gInput.value, bInput.value)
      .catch((err) => {
        console.log(err);
      })
    console.log(response);
};

/* document.getElementById('brightness-btn').onclick = () => {
    postBrightness(brightnessInput.value);
} */

/* document.getElementById('strandtest-btn').onclick = () => {
    postAnimation('strandtest');
} */

/* document.getElementById('rainbow-btn').onclick = () => {
    postAnimation('rainbow');
} */

// Update slider+hex when moving color wheel
$(function() {
    $('#color-input').on('slidermove', function() {
        setSliders();
        if ($('#check-id:checked').val() !== undefined) {
            performPostRequest(rInput.value, gInput.value, bInput.value);
        }
    });
});

document.getElementById('logout').onclick = () => {
    console.log("logged out");
}

rSlider.onchange = function(){
    rInput.value = rSlider.value;
    var co = "rgba("+rInput.value+","+gInput.value+","+bInput.value+"," + aValue +")";
    $('#color-input').wheelColorPicker('setValue', co);
    hexInput.value = rgbToHex(rInput.value, gInput.value, bInput.value);
}
rSlider.oninput = function(){
    rInput.value = rSlider.value;
    var co = "rgba("+rInput.value+","+gInput.value+","+bInput.value+"," + aValue +")";
    $('#color-input').wheelColorPicker('setValue', co);
    hexInput.value = rgbToHex(rInput.value, gInput.value, bInput.value);
}
rInput.onchange = function() {
    rSlider.value = rInput.value;
    var co = "rgba("+rInput.value+","+gInput.value+","+bInput.value+"," + aValue +")";
    $('#color-input').wheelColorPicker('setValue', co);
    hexInput.value = rgbToHex(rInput.value, gInput.value, bInput.value);
}
gSlider.onchange = function(){
    gInput.value = gSlider.value;
    var co = "rgba("+rInput.value+","+gInput.value+","+bInput.value+"," + aValue +")";
    $('#color-input').wheelColorPicker('setValue', co);
    hexInput.value = rgbToHex(rInput.value, gInput.value, bInput.value);
}
gSlider.oninput = function(){
    gInput.value = gSlider.value;
    var co = "rgba("+rInput.value+","+gInput.value+","+bInput.value+"," + aValue +")";
    $('#color-input').wheelColorPicker('setValue', co);
    hexInput.value = rgbToHex(rInput.value, gInput.value, bInput.value);
}
gInput.onchange = function() {
    gSlider.value = gInput.value;
    var co = "rgba("+rInput.value+","+gInput.value+","+bInput.value+"," + aValue +")";
    $('#color-input').wheelColorPicker('setValue', co);
    hexInput.value = rgbToHex(rInput.value, gInput.value, bInput.value);
}
bSlider.onchange = function(){
    bInput.value = bSlider.value;
    var co = "rgba("+rInput.value+","+gInput.value+","+bInput.value+"," + aValue +")";
    $('#color-input').wheelColorPicker('setValue', co);
    hexInput.value = rgbToHex(rInput.value, gInput.value, bInput.value);
}
bSlider.oninput = function(){
    bInput.value = bSlider.value;
    var co = "rgba("+rInput.value+","+gInput.value+","+bInput.value+"," + aValue +")";
    $('#color-input').wheelColorPicker('setValue', co);
    hexInput.value = rgbToHex(rInput.value, gInput.value, bInput.value);
}
bInput.onchange = function() {
    bSlider.value = bInput.value;
    var co = "rgba("+rInput.value+","+gInput.value+","+bInput.value+"," + aValue +")";
    $('#color-input').wheelColorPicker('setValue', co);
    hexInput.value = rgbToHex(rInput.value, gInput.value, bInput.value);
}

/* Helper Functions */

setSliders = function() {
    $('#event-color').val($("#color-input").wheelColorPicker('getValue', 'hex'));
    var rgb = $("#color-input").wheelColorPicker('getValue', 'rgba');
    var save = rgb;
    rgb = rgb.substring(5,rgb.length-1)
    var arr = rgb.split(",");
    $('#R-color').val(arr[0]);
    $('#G-color').val(arr[1]);
    $('#B-color').val(arr[2]);
    $('#r-slider').val(arr[0]);
    $('#g-slider').val(arr[1]);
    $('#b-slider').val(arr[2]);
    $('#span1').css('color', save);
    // $('slider::-moz-range-thumb').css('background', save);
    // $('slider::-webkit-slider-thumb').css('background', save);
    aValue = arr[3];
}
var rgbHelper = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };
var rgbToHex = function(r,g,b) {   
    var red = rgbHelper(r);
    var green = rgbHelper(g);
    var blue = rgbHelper(b);
    return red+green+blue;
  };

