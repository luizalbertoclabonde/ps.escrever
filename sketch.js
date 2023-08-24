function setup() {
    createCanvas(600, 600);
    background("blue")
  }
  
  function draw() {
    stroke("red");
    fill("yellow");
      if(mouseIsPressed){
        rect(mouseX,mouseY, 20, 35)
        
      }
    
  }