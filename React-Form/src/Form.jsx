import { useState } from "react"

export default function Form(){

    let [fullName, setFullName] = useState("");

    let handleChange = (event) => {
        setFullName(event.target.value);
    };
    /*
    input field ma jo value user le raha h vo event object k through mil rhi h
    aur usi value ko hum setFullName k through fullName state ma store krwa rhe h   

    input field k andar jo value h vo fullName state k barabar h
    isliye jab bhi user input field ma kuch type krega to handleChange function call hoga
    aur event.target.value k through jo value user ne input field ma di h vo milegi
    aur setFullName k through hum us value ko fullName state ma store krwa denge
    jisse input field k andar ki value fullName state k barabar ho jayegi

    1. input field ma jo value user le raha h vo event object k through mil rhi h
    2. aur usi value ko hum setFullName k through fullName state ma store krwa rhe h   
    3. input field k andar jo value h vo fullName state k barabar h 

    input change -> onChange event -> handleChange function call -> event.target.value se value milegi
    -> setFullName se fullName state ma store krwa denge -> input field k andar ki value fullName state k barabar ho jayegi     

    */

    return(
        <form>
            <input placeholder="enter full name" type="text" value={fullName}
            onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}