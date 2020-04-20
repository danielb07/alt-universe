class Planet {
    constructor(x, y, rad, r, g, b){
        this.x=x;
        this.y=y;
        this.radius=rad;
        this.planetColor = color(r, g, b);
    }   
    display(){
        ellipseMode(CENTER);
        fill (this.planetColor);
        noStroke();
        ellipse(this.x, this.y, this.radius, this.radius);
    }
    destroy(){
        push();
        // 
        this.planetColor.setAlpha(0);
        pop();
   }

    }
