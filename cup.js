img = "";
status="";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function preload(){
    img = loadImage('cup.jpg');
}
function modelLoaded() {
    console.log("Model Loaded!")
    status= true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
}


function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000")
    text("cup", 50, 100);
    noFill();
    stroke("#FF0000")
    rect(25, 75, 475, 320);
}