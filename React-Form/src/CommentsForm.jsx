import { use, useState } from "react";

export default function CommentsForm(){

    let [formData,setFormData]= useState({
        username:"",
        remark:"",
        rating:5
    });

    let handleInputChange = (event) => {
        setFormData((currData)=>{
            return{ ...currData , [event.target.name]: event.target.value };
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username:"",
            remark:"",
            rating:5
        });
    }

    return(
        <div>
            <h2>Comments Form Component</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="username" 
                value={formData.username} onChange={handleInputChange}
                id="username" name="username"/>
                <br></br><br></br>

                <label htmlFor="remark">Remark:</label>
                <textarea value={formData.remark} 
                    placeholder="Add new Remark"
                    onChange={handleInputChange}
                    id="remark" name="remark">
                    Reamark</textarea>
                <br></br><br></br>

                <label htmlFor="rating">Rating:</label>
                <input placeholder="rating" 
                type="number" 
                min={1} max={5} 
                value={formData.rating}
                onChange={handleInputChange}
                id="rating" name="rating"/>
                <br></br><br></br>

                <button>Add Comments</button>
            </form>
        </div>
    );
}