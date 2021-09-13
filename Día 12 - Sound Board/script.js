
//ARRAY SOUNDS
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

//SOUNDS LOGICA MAIN
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })
    //PRINT BUTTON FOR ACTIONS
    document.getElementById('buttons').appendChild(btn)
})

// STOP SONGS WHEN CLICK
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}