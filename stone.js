class Stone{
    constructor(){
        var options = {
            'density':1.2
        }
        this.body = Bodies.circle(85, 500, 15, options);
        World.add(world, this.body);
        this.image = loadImage("Plucking Mangoes/stone.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 40, 40);
    }
}