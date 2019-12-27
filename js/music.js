function play_pause() {
    var audio = document.getElementById('player');
    var btn = document.getElementById('player_btn');
    var btn2 = document.getElementById('player_btn2');
    if (audio.paused) {
        audio.play();
        btn.src = './img/btn/pause.png'
        btn2.src = './img/btn/pause2.png'
     } else {
        audio.pause();
        btn.src = './img/btn/play.png'
        btn2.src = './img/btn/play2.png'
     }
}