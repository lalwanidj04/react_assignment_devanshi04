import React,{useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function EditProduct() {
    let history = useNavigate();
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [ID,setID] = useState(null);

    const sendData = (e) =>  {
        e.preventDefault();
        
        axios.put(`https://6621225f3bf790e070b1f43a.mockapi.io/product/${ID}`, {
            name,
            price
        }).then(()=>{
            history('/products');
        })
        .then(response => {
            console.log("Data sent successfully:", response.data);
            // You can add additional logic here, such as resetting the form fields
            setName('');
            setPrice('');
        })
        .catch(error => {
            console.error("Error sending data:", error);
            // Handle error if needed
        });
    }

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setPrice(localStorage.getItem('price'));
        setID(localStorage.getItem('ID'));
    }, []);
    const handleName = (e) =>{
        setName(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
  return (
    <div className="main">
        <form>
            <label>Name: </label>
            <input type="text" name="fname" value={name} onChange={handleName}/><br/>
            <label>Price: </label>
            <input type="number" name="price" value={price} onChange={handlePrice} /><br/>
            <button type="submit" onClick={sendData}>Update</button>

        </form>
    </div>
  )
}
