class Paper{

constructor(x,y,r)
{
var options = { isStatic:false,
                restitution:0.7,
                friction:0.2,
                density:1
}

 this.body = Bodies.circle(x, y, r, options);
 this.radius = r
 this.image = loadImage("paper.png");
 World.add(world, this.body)



}
display(){
    var pos = this.body.position;
    
    imageMode(CENTER);

    image(this.image,pos.x, pos.y, this.radius+this.radius, this.radius+this.radius)
    
}

}