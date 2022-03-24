mustacheX = 0;
mustacheY = 0;
function preload (){
 mustache = loadImage('https://i.postimg.cc/xCtGHszx/m.png');
}

function setup(){
  canvas=createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,300,300);
image(mustache,mustacheX,mustacheY,50,50);
}

function take_snapshot(){
   save('Project - 116.png');
}

function modelLoaded(){
  console.log("Posenet is Initialized");
}

function gotPoses(results){
  if (results.length>0){
     console.log(results);
   mustacheX = results[0].pose. nose.x -20 ;
   mustacheY = results[0].pose. nose.y -13 ;
  }
}