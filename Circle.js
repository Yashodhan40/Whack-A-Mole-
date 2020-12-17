class Circle{
    constructor(x,y){
            this.r=20;
            this.x=x;
            this.y=y;

    }
    display(){
            fill("black");
            strokeWeight(2);
            stroke("white");
             
            ellipseMode(CENTER);
            ellipse(this.x,this.y,this.r*2);
    }
}