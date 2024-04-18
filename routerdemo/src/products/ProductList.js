import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ProductList.css';

export default function ProductList() {
    const [apidata,setApidata] = useState([]);
    useEffect(()=>{
        axios.get('https://6621225f3bf790e070b1f43a.mockapi.io/product')
        .then((getData)=>{
            setApidata(getData.data);
        });
    },[]);

    const setData = (id,name,price) =>{
        
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('price', price);
    }

    const getData = () => {
        axios.get('https://6621225f3bf790e070b1f43a.mockapi.io/product')
        .then((getData)=>{
            setApidata(getData.data);
        });
    }

    const onDelete = (id) => {
        axios.delete(`https://6621225f3bf790e070b1f43a.mockapi.io/product/${id}`)
        .then(()=>{
            getData();
        });

    }
  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {apidata.map((data) =>{
                return(
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>
                            <Link to = '/products/edit'>
                                <button onClick={()=>setData(data.id,data.name,data.price)}>
                                    Update
                                </button>
                            </Link>
                        </td>
                        <td>
                            <button color="red" onClick={() => onDelete(data.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })}
        </table>
    </div>
  )
}
