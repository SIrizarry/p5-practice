let myImage;
function preload() {
    myImage = loadImage("https://unsplash.it/200?image=1050")
    console.log(myImage);
}

let imgSize = 100;

function setup() {
    canvas = createCanvas(imgSize, imgSize);
    image(myImage,0,0)
}

function draw() {
    loadPixels();

    for (var i = 0; i <= pixels.length; i+=4){
        let cPixel;
        let nPixel;
        let n = i+4;
        cPixel = hue([pixels[i], pixels[i+1], pixels[i+2]]);
        nPixel = hue([pixels[n], pixels[n+1], pixels[n+2]]);

        if (nPixel > cPixel) {
            let t = [pixels[i], pixels[i+1], pixels[i+2]]
            
            pixels[i] = pixels[n]
            pixels[i+1] = pixels[n+1]
            pixels[i+2] = pixels[n+2]
            
            pixels[n] = t[0]
            pixels[n+1] = t[1]
            pixels[n+2] = t[2]
          }
    }

    updatePixels();
}