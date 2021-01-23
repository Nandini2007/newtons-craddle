/*class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var opts ={
            bodyA: body1,
            bodyB: body2,
             pointB : {x:this.offsetX,y :this.offsetY}
        }
        this.rope = Constraint.create(opts);
        World.add(world, this.rope);
    }
    display(){
       /* var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }*/

   /* class Rope{
        constructor(bodyA, pointB){
            var options ={
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 10
            }
            this.pointB = pointB;
         
            this.rope = Constraint.create(options);
            World.add(world, this.rope);
        }
    
        display(){

            var p1 = this.rope.bodyA.position;
            var p2 = this.pointB;
        
            
           strokeWeight(4);
           // stroke(48, 22, 8);
         line(p1.x,p1.y,p2.x,p2.y);
        }*/
        /*class Chain{
            constructor(bodyA, bodyB){
                var options = {
                    bodyA: bodyA,
                    bodyB: bodyB,
                    stiffness: 0.04,
                    length: 10
                }
                this.chain = Constraint.create(options);
                World.add(world, this.chain);
            }
        
            display(){
                var pointA = this.chain.bodyA.position;
                var pointB = this.chain.bodyB.position;
                strokeWeight(4);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            
        }*/
        class Rope{
            constructor(bodyA, pointB){
                var options = {
                    bodyA: bodyA,
                    pointB: pointB,
                    stiffness: 0.04,
                    length: 250
                }
                this.pointB = pointB;
                this.sling = Constraint.create(options);
                World.add(world, this.sling);
            }
        
        
            display(){
             
                    var pointA = this.sling.bodyA.position;
                    var pointB = this.pointB;
                    strokeWeight(2);
                    line(pointA.x, pointA.y, pointB.x, pointB.y);
                
            }
            
        }

    