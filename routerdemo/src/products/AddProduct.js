import React,{useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router';
import './AddProduct.css';

export default function AddProduct() {
    let history = useNavigate();
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');

    const sendData = (e) =>  {

        e.preventDefault();
        
        
        axios.post('https://6621225f3bf790e070b1f43a.mockapi.io/product', {
            name,
            price
        })
        .then(response => {
            console.log("Data sent successfully:", response.data);
            // You can add additional logic here, such as resetting the form fields
            setName('');
            setPrice('');
        })
        .then(() => {
            history('/products');
        })
        .catch(error => {
            console.error("Error sending data:", error);
            // Handle error if needed
        });
        
    }
    const handleName = (e) =>{
        setName(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
  return (
    <div className="main">
        <h1>Add New Product</h1><br/>
        <form>
            <label>Name:</label>
            <input type="text" name="fname" value={name} onChange={handleName}/><br/><br/>
            <label>Price:  </label>
            <input type="number" name="price" value={price} onChange={handlePrice} /><br/><br/>
            <center><button type="submit" onClick={sendData}>Add</button></center>

        </form>
    </div>
  )
}
