class Log{//name of the class
    constructor(x, y,height,angle){//constructor takes x, y, width, height
    var options = { //giving properties to the box
        restitution:0.8, 
        friction:1,
        density:1
    }
    this.body = Bodies.rectangle(x, y, 20, height, options);//creating box using bodies
    this.width = 20;//giving width to the box
    this.height = height;//giving height to the box
    Matter.Body.setAngle(this.body, angle);
    World.add(world1, this.body);//adding this box in to our world1
    
    }
    
    display(){
    var pos = this.body.position;//store the position of the box in variable pos
    var angle = this.body.angle;//store the angle of the box in variable angle
    push();//only required when we are using an angle
    translate(pos.x, pos.y);//shift the box by the position
    rotate(angle);//rotate the box by the angle
    rectMode(CENTER);//take centre point as x, y for the rectangle
    fill("black");//color for the rectangle
    rect(0, 0, this.width, this.height);//draw the rectangle
    
    pop();//only required when we are using angle
    
    }
    }