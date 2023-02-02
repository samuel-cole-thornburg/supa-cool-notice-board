noseX=0;
noseY=0;
difference=0;
rightX = 0;
leftX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150)
    
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose',gotPoses)
}
function draw() {
    background('#4682b4')

    document.getElementById("square").innerHTML = "W and H of sqare is:" + difference +"px";
    textSize(difference);
     fill('#FFE787');
     text('Samuel', 50, 400);

}
function modelLoaded() {
    console.log('poseNet Is cool')
} 
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log("results")
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("1:" + noseX + "2:" + noseY);
        leftX = results[0].pose.leftWrist.x
        rightX = results[0].pose.rightWrist.x
        difference = floor(leftX - rightX);

        console.log(leftX + rightX + difference);
    }
}