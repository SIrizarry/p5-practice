let ps;

function setup() {
    createCanvas(640, 360);
    ps = new ParticleSystem(createVector(width/2, 50));
}

function draw() {
    background(51);
    ps.addParticle();
    ps.run();
}

class Particle {
    constructor(position) {
        this.position = position.copy();
        this.acceleration = createVector(0,0.05);
        this.velocity = createVector(random(-1,1), random(-1,0));
        this.lifespan = 255.0;
    }

    run(){
        this.update();
        this.display();
    }

    update(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 1.0;
    }

    display(){
        stroke(255, this.lifespan);
        fill(255,this.lifespan);
        ellipse(this.position.x, this.position.y, 8 ,8);
    }

    isDead(){
        if(this.lifespan < 0){
            return true;
        }
        return(this.lifespan < 0);
    }
}

class ParticleSystem{
    constructor(location){
        this.origin = location.copy();
        this.particles = [];
    }

    addParticle() {
        this.particles.push(new Particle(this.origin));
    }

    run(){
        let p;
        for (var i = this.particles.length - 1; i >= 0; i--){
            p = this.particles[i];
            p.run();
            if(p.isDead()){
                this.particles.splice(i,1);
            }
        }
    }
}