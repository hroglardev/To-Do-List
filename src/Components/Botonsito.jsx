import { useState, useEffect } from "react"

const Botonsito = ({texto}) => {
    const [id, setId] = useState(window.localStorage.length)
    const [arr, setArr] = useState([])
    
    const handleClick = () => {
        window.localStorage.setItem(id, texto)
        setId(
            id + 1
        )
        setArr(
            [...arr, texto]
        )
    }
    
    useEffect(() =>{
        setArr(Object.values(window.localStorage))
    }, [])

    

    return (
        <div>
            <button onClick = {handleClick} texto = {texto} >Hola Ani</button>
            <ul>
            {arr.map((value)=>{
                return (
                <div>
                    <li>{value}</li>
                    <button>x</button>
                </div>
            )})}
            </ul>
        </div>
    )
}

export default Botonsito



