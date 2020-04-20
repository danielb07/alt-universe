class Orbit {
    constructor(w, h){

        

        this.x = 790;
        this.y = 400;
        this.width = w;
        this.height = h;
    }
    display(){
        push();
        fill("#000000");
        stroke("#ffffff");
        strokeWeight(0.5);
        ellipse(this.x, this.y, this.width, this.height);
        pop();
    }
}