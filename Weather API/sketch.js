// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;
var gradient = setGradient

var fr = 90; //starting FPS
function setup() {
  setInterval(loadWeather, 5000);
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22London%2C%20UK%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  gotWeather);
  
  
  
  createCanvas(windowWidth,windowHeight);
    
  // Define colors
  b1 = color(255);
  b2 = color(0);
  c1 = color(222, 165, 164);
  c2 = color(174, 198, 207);

  noLoop();
}
function loadWeather() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22London%2C%20UK%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  gotWeather);
}
function gotWeather(data){
    var city = data.query.results.channel.location.city;
    var country = data.query.results.channel.location.country;
    
    var date = data.query.results.channel.item.forecast[0].date;
    var day = data.query.results.channel.item.forecast[0].day;
    
    var condition = data.query.results.channel.item.forecast[0].text;
    
    var low = round((data.query.results.channel.item.forecast[0].low-32)*5/9);
    var high = round((data.query.results.channel.item.forecast[0].high-32)*5/9);
    var current = round((data.query.results.channel.item.condition.temp-32)*5/9);
    textAlign(LEFT);
    noStroke();
    textSize(30);
    fill(255);
    text("LONDON",30,60);
    textSize(8)
    text("UK",160,60);
    textSize(10)
    text("FRIDAY   3rd",32,80);
    text("MARCH",32,95);
    text("2017",32,110);
    textAlign(RIGHT);
    text("PARTLY CLOUDY / RAIN",675,60);
    textAlign(LEFT);
    text("20:42",635,155);
   rect(620,90,5,300);
   fill(0,0,0,150);
   rect(615,150,15,5);
    fill(255,255,255,240)
    ellipse(random(windowWidth),random(windowHeight),3,7);
    fill(20,255,182,50);
    ellipse(200,250,300,300);
    textSize(120);
    text(current+"°C",30,600);
    textSize(40);
    fill(182,255,20,50);
    text(low+"°C",60,640)
    textAlign(RIGHT);
    text(high+"°C",300,640)
}

function draw() {
 //background
  setGradient(0, 0, width, height, c1, c2, Y_AXIS);
  frameRate(fr); // starting FPS
  fr=map(mouseX,0,600,30,900);
    
  
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}
    //text
    
    
