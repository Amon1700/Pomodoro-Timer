import { useSelector } from "react-redux"


export default function Audio() {
    
    const selectedVal = useSelector((state)=>state.selectedVal)
    const seconds = useSelector((state)=>state.seconds)
    if(!selectedVal && !seconds) {
        const sound = document.getElementById("beep");
        sound.play()
    }

    return (
        <div>
            <audio id="beep" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
    )
}