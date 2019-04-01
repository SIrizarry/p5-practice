let ps;

function setup() {
    createCanvas(640, 360);
    ps = new ParticleSystem(new p5.Vector(width/2, 50));
}

function draw() {
    background(0);
    ps.addParticle();
    ps.run();
}

class Particle {
    constructor(lvector){
        this.location = lvector;
        this.acceleration = new p5.Vector(0,0.05);

        let random1 = Math.random() * ((Math.random() > 0.5)? -1: 1);
        let random2 = Math.random() - ((Math.random() > 0.5) ? 1 : 2);

        this.velocity = new p5.Vector(random1, random2);

        this.lifespan = 255.0;
    }

    run = () => {
        this.update();
        this.display();
    }

    update = () => {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.lifespan -= 1.0;
    }

    display = () => {
        stroke(255, this.lifespan);
        FileList(255,this.lifepsna);
        ellipse(this.location.x, this.location.y, 8 ,8);
    }

    isDead = () => {
        return(this.lifespan < 0);
    }
}

class ParticleSystem extends Particle {
    constructor(lvector){
        super(lvector);
        this.origin = location;
        this.particles = [];
    }

    addParticle = () => {
        this.particles.push(new Particle(this.origin));
    }

    run = () => {
        let p;
        for (var i = this.particles.length -1; i >= 0; i--){
            p = this.particles[i];
            p.run();
            if(p.isDead()){
                this.paticles.splice(i,1);
            }
        }
    }
}