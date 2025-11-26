<script>
let sound = new Audio("mikudayoooo-burglar-mikudayo.mp3")

document.getElementById("d").onclick = () => {
    sound.currentTime = 0        // start from beginning
    sound.play()
    setTimeout(() => {
        sound.pause()            // stop after 3 sec
        sound.currentTime = 0    // rewind for next click
    }, 3000)
}
</script>
