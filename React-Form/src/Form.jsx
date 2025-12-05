import { useState } from "react"

export default function Form(){

    let [fullName, setFullName] = useState("");

    let handleChange = (event) => {
        setFullName(event.target.value);
    };

    return(
        <form>
            <label htmlFor="username">Full Name</label>
            <input placeholder="enter full name" type="text" value={fullName}
            onChange={handleChange}
            id="username"
            />
            <button>Submit</button>
        </form>
    )
}