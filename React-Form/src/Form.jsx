import { useState } from "react"

export default function Form(){

    let[formData,setFormData]=useState({
        username:"",
        Passowrd:""
    });   

    let handleInputChange = (event) => {
        setFormData((currDate)=>{
            return{
                ...currDate,
                [event.target.name]: event.target.value
            };
        });
    };

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            username:"",
            Passowrd:""
        });
    }

    return(
        <form>
            <label htmlFor="username">User Name</label>
            <input placeholder="enter username"
            type="text" 
            value={FormData.username}
            onChange={handleInputChange}
            name="username"
            id="username"
            />
            <br></br> <br></br>
            <label htmlFor="Passowrd">Passowrd</label>
            <input placeholder="enter Password"
            type="Passowrd" 
            value={FormData.Passowrd}
            onChange={handleInputChange}
            name="Passowrd"
            id="Passowrd"
            />
            <br></br> <br></br> 
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}