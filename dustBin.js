class dustbin{

    constructor(x,y,w,h)
    {
    var options = { isStatic:true,
                    
                    
    }
    
     this.body = Bodies.rectangle(x, y, w,h,options);
     this.width = w;
     this.height = h;
     this.image = loadImage("dustbin.png");
     World.add(world, this.body)
    
    
    
    }
    display(){
        var pos = this.body.position;
        

        image(this.image,pos.x, pos.y-50, this.width, this.height+130);
        
    }
    
    }