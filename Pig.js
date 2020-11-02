class Pig{//name of the class
    constructor(x, y){//constructor takes x, y, width, height
    var options = { //giving properties to the box
        restitution:0.5, 
        friction:0.3,
        density:1.5
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);//creating box using bodies
    this.width = 50;//giving width to the box
    this.height = 50;//giving height to the box
    World.add(world1, this.body);//adding this box in to our world1
    
    }
    
    display(){
    var pos = this.body.position;//store the position of the box in variable pos
   
    var angle = this.body.angle;//store the angle of the box in variable angle
    push();//only required when we are using an angle
    translate(pos.x, pos.y);//shift the box by the position
    rotate(angle);//rotate the box by the angle
    rectMode(CENTER);//take centre point as x, y for the rectangle
    fill("green");//color for the rectangle
    rect(0, 0, this.width, this.height);//draw the rectangle
    
    pop();//only required when we are using angle
    
    }
    }