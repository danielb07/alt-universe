class Sun {
    constructor(x,y,r,c){
        
        
        this.x=x;
        this.y=y;
        this.radius=r;
        this.color=c;   
    }
    display(){
        ellipseMode(CENTER);
        fill (this.color);
        ellipse(this.x, this.y, this.radius,this.radius)
    }

    make_bigger(){
        if(frameCount%20===0){
            this.radius = this.radius+25;
          }
    }

    }
