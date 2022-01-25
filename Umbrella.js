class Umbrella {
    constructor (x,y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 50,options);
        this.radius = 50;
        this.image = loadImage(
        "walking_1.png",
        "walking_2.png",
        "walking_3.png",
        "walking_4.png",
        "walking_5.png",
        "walking_6.png",
        "walking_7.png",
        "walking_8.png");
        World.add(world, this.body)
    }
    display() {
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y + 70, 250,300)
    }
}