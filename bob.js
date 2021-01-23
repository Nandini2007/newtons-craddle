class Bob{
    constructor(x,y,width){
        var opts ={
            isStatic : false
        }
        this.body = Bodies.circle(x,y,width,opts)
        this.width = width;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        circle(pos.x,pos.y,this.width);
    }
}