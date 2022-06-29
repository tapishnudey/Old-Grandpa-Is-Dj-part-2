Legends_Never_Die="";
Fly_Away="";

function preload(){
    Legends_Never_Die=loadSound("Legends Never Die.mp3");
    Fly_Away=loadSound("TheFatRat-Fly Away.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}