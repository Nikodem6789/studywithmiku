const soundFile = "mikudayoooo-burglar-mikudayo.mp3" // just 1 media file
let mikudayocounter = 0
document.getElementById("d").onclick = () => {
    let sound = new Audio(soundFile)
    sound.currentTime = 0
    sound.play()
    setTimeout(() => {
        sound.pause()
        sound.currentTime = 0
    }, 3000)
mikudayoocounter = mikudayoocounter + 1
console.log("Error Detected: Miku Dayoo: Stage Cooked. You cannot disable this virus")
// Miku Dayoo

}
