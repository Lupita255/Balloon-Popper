class chain {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:7,
            stiffness:0.04
        }

    this.pointB= pointB
    this.chain = Matter.Constraint.create(options)
    World.add(world,this.chain);

    }
fly(){

    this.chain.bodyA = null;
}
    attach(body){
		this.chain.bodyA=body;
	}

display(){
    if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
       
    }
   
}
}