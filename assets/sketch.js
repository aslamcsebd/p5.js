function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,105,180);
  
  textAlign(CENTER);
  textSize(20);
  fill(0, 102, 153);
  text('7 star flower', 200, 40);
  
  textSize(14);
  fill(0, 102, 153);
  text('fb/aslam.cse.ctg', 200, 380);
  
  //1st line
  line(50, 100, 100, 100);
  line(100, 100, 125, 56);
  line(125, 56, 150, 100);
  line(150, 100, 250, 100);
  line(250, 100, 275, 56);
  line(300, 100, 275, 56);
  line(300, 100, 350, 100);
 
  //2nd line
  line(50, 100, 75, 143);
  line(75, 143, 50, 186);
  line(50, 186, 100,186);
  line(100,186, 150,272);
  line(150,272, 125, 315);
  line(125, 315, 175, 315);
  line(175, 315, 200, 358);
    
  //3rd line
  line(350, 100, 325, 143);
  line(325, 143, 350, 186);
  line(350, 186, 300, 186);
  line(300, 186,250,272);
  line(250,272, 275, 315);
  line(275, 315, 225, 315);
  line(225, 315, 200, 358);
  
  // 1st star
  line(75, 143, 175, 143);
  line(225, 143, 325, 143);
  line(150, 186, 250,186);
  line(150, 272, 250,272);
  
  //2nd star
  line(150, 100, 100, 186);
  line(300, 100, 250, 186);
  line(225, 143, 175, 229);
  line(225, 229, 175, 315);
  
  // 3rd star
  line(100, 100, 150, 186);
  line(250, 100, 300, 186);
  line(175, 143, 225, 229);
  line(175, 229, 225, 315);
  
  // angle
  line(175, 143, 200, 100);
  line(200, 100, 225, 143);
  
  line(250, 186, 275, 229);
  line(275, 229, 225, 229);
  
  line(175, 229, 125, 229);
  line(125, 229, 150, 186);  
  
}