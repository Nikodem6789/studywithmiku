const soundFile = "mikudayoooo-burglar-mikudayo.mp3" // just 1 media file

document.getElementById("d").onclick = () => {
    let sound = new Audio(soundFile)
    sound.currentTime = 0
    sound.play()
    setTimeout(() => {
        sound.pause()
        sound.currentTime = 0
    }, 3000) // only first 3 sec
}
