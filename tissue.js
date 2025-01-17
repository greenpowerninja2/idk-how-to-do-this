img = "";
status="";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function preload(){
    img = loadImage('tissue.jpg');
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
    text("tissue", 50, 50);
    noFill();
    stroke("#FF0000")
    rect(270, 50, 600, 400;)
}