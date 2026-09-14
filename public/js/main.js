// Source - https://stackoverflow.com/a/19792168
// Posted by alexander farkas
// Retrieved 2026-09-06, License - CC BY-SA 3.0

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);