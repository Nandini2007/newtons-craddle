

class Bob{
    constructor(x,y,width){
        var opts ={
            isStatic : false
          //  restitution: 1,
          //  friction:0,
          //  density:0.8
        }
        this.x = x;
        this.y = y;
        this.r = width
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,opts)
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       ellipseMode(CENTER)
       fill(255,0,255)
       circle(0,0,this.r)
       pop();
    }
} 