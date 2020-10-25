class Mango{
    constructor(posx, posy, radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(posx, posy, radius, options);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("Plucking mangoes/mango.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}