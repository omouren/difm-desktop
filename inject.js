document.addEventListener('keydown', function(e){
    if (e.keyCode == 32) {
        e.preventDefault();
        if (document.querySelector('.ico.icon-play')) {
            document.querySelector('.ico.icon-play').click()   
        }
        if (document.querySelector('.ico.icon-pause')) {
            document.querySelector('.ico.icon-pause').click()   
        }
    }
});