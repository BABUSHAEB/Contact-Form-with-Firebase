import React, {useState} from 'react'
import './login.css'

export default function Login() {
    const [user, setUser] = useState({
        Name:"",
        Email:"",
        Phone:"",
        Remarks:"",
    });
    let name, value;
    const getUserData = (event) =>{

        name = event.target.name;
        value = event.target.value
        setUser({ ...user, [name]: value });

    }
    const pressButton = async (e) =>{
        e.preventDefault();

        const { Name,Email,Phone,Remarks} = user;

         const res = await fetch("https://firstfirebase-24839-default-rtdb.firebaseio.com/contactform.json",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                Name,
                Email,
                Phone,
                Remarks,
            })
        }

        )

    }

  
    return (
        <>
        <div className="loginForm">
            <h1>Create Form</h1>
            <form action="" method="POST">
                <input type="text" name="Name"  placeholder="Username"
                value={user.name} onChange={getUserData} /><br/>
                <input type="email " name="Email"  placeholder="Email"
                value={user.email} onChange={getUserData}/><br/>
                <input type="number" name="Phone"  placeholder="Phone Number"
                value={user.phone} onChange={getUserData}/><br/>
                <input type="text" name="Remarks" placeholder="Remarks"
                value={user.Remarks} onChange={getUserData} /><br/>
                <button onClick={pressButton}>Create</button>
            </form>
        </div>
            
        </>
    )
}
