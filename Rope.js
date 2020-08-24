class Rope{
    constructor(bodyA,bodyB){
    var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:1,
    length:5
    }
    this.chain =Constraint.create(options);
    World.add (world,this.chain);
    
    
    
    }
    display(){
    var pointA = this.chain.bodyA.positon;
    var pointB = this.chain.bodyB.positon;
    strokeWeight(3);
    //line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    
    
    
    
    
    }