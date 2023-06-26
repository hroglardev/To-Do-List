import { useState } from "react"
import Botonsito from "./Botonsito"

const Textarea = () => {
const [texto, setTexto] = useState("")


const handleChange = (e) =>{
    setTexto(
        e.target.value
    )
}



    return (
        <div>
            <textarea name="" id="" cols="30" rows="10" value ={texto} onChange = {handleChange} ></textarea>
            <Botonsito texto = {texto}/>
        </div>
    )
}

export default Textarea