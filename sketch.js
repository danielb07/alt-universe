
var mercury, venus, earth, mars, jupiter, saturn, uranus, neptune;
var sun;
var r_sun;

function setup() {
  createCanvas(1580,800);

  // orbit
  orb_merc = new Orbit(300,150);
  orb_venus = new Orbit(450,250);
  orb_earth = new Orbit(600,350);
  orb_mars = new Orbit(750,450);
  orb_jupiter = new Orbit(900,550)
  orb_saturn = new Orbit(1050,650);
  orb_uranus = new Orbit(1300,750);
  orb_neptune = new Orbit(1450,850);

  // planet
  mercury = new Planet(639,400,20, 249, 137, 97);
  venus = new Planet(564,400,30, 221, 210, 216);
  earth = new Planet(490,395,35, 114, 185, 221);
  mars = new Planet(413,398,25, 249, 137, 97);
  jupiter = new Planet(340,395,77, 204, 209, 209);
  saturn = new Planet(265,394,70, 112, 5, 26);
  uranus = new Planet(139,395,60, 153, 190, 198);
  neptune = new Planet(63,394,50, 104, 126, 167);
  sun = new Sun(790,400,100,"#eea814");
}

function draw() {
  background("#000000");  
  console.log(frameCount);

  if(frameCount===168){
    mercury.destroy();
  }

  if(frameCount===287){
    venus.destroy();
  }

  if(frameCount===396){
    earth.destroy();
  }

  if(frameCount===536){
    mars.destroy();
  }

  if(frameCount===631){
    jupiter.destroy();
  }

  if(frameCount===742){
    saturn.destroy();
  }

  if(frameCount===932){
    uranus.destroy();
  }
  if(frameCount===1096){
    neptune.destroy();
  }
  drawSprites();  
  // orbit
  orb_neptune.display();
  orb_uranus.display();
  orb_saturn.display();
  orb_jupiter.display();
  orb_mars.display();
  orb_earth.display();
  orb_venus.display();  
  orb_merc.display();

  sun.display();
  // planet
  mercury.display(20);
  venus.display();
  earth.display();
  mars.display();
  jupiter.display();
  saturn.display();
  uranus.display();
  neptune.display();


  sun.make_bigger();
}

function mouseClicked() { 
  console.clear();
  console.log(mouseX+","+mouseY );

} 