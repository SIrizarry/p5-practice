let mySound;

preload = () => {

}

setup = () => {
    createCanvas(windowWidth, windowHeight);
}

windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
}

draw = () => {
    background(51);
    if(getAudioContext().state !== 'running') {
        text('click to start audio', width/2, height/2);
    } else {
        text('audio is enabled', width/2, height/2);
    }
}

mouseClicked = () => {
    // if (getAudioContext().state !== 'running'){
    //     getAudioContext().resume();
    // }
    axios.get('http://localhost:8000/music.mp3')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
}

