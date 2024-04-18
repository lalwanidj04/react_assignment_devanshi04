import React,{useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function EditUser() {
    let history = useNavigate();
    const [name,setName] = useState('');
    const [ID,setID] = useState(null);
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const sendData = (e) =>  {
        e.preventDefault();
        
        axios.put(`https://6621225f3bf790e070b1f43a.mockapi.io/hello/${ID}`, {
            name,
            age,
            email,
            phone
        }).then(()=>{
            history('/users');
        })
        .then(response => {
            console.log("Data sent successfully:", response.data);
            // You can add additional logic here, such as resetting the form fields
            setName('');
            setAge('');
            setEmail('');
            setPhone('');
        })
        .catch(error => {
            console.error("Error sending data:", error);
            // Handle error if needed
        });
    }

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
        setPhone(localStorage.getItem('phone'));
        setID(localStorage.getItem('ID'));
    }, []);

    const handleName = (e) =>{
        setName(e.target.value);
    }
    const handleAge = (e) => {
        setAge(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
  return (
    <div className="main">
        <form>
            <label>Name:</label>
            <input type="text" name="fname" value={name} onChange={handleName}/><br/><br/>
            <label>Age:  </label>
            <input type="number" name="age" value={age} onChange={handleAge} /><br/><br/>
            <label>Email:  </label>
            <input type="text" name="email" value={email} onChange={handleEmail} /><br/><br/>
            <label>Phone:  </label>
            <input type="number" name="phone" value={phone} onChange={handlePhone} /><br/><br/>
            <center><button type="submit" onClick={sendData}>Add</button></center>
        </form>
    </div>
  )
}
