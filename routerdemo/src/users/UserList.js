import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserList() {
    const [apidata,setApidata] = useState([]);
    useEffect(()=>{
        axios.get('https://6621225f3bf790e070b1f43a.mockapi.io/hello')
        .then((getData)=>{
            setApidata(getData.data);
        });
    },[]);

    const setData = (id,name,age,email,phone) =>{
        
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email',email);
        localStorage.setItem('phone',phone);

    }

    const getData = () => {
        axios.get('https://6621225f3bf790e070b1f43a.mockapi.io/hello')
        .then((getData)=>{
            setApidata(getData.data);
        });
    }

    const onDelete = (id) => {
        axios.delete(`https://6621225f3bf790e070b1f43a.mockapi.io/hello/${id}`)
        .then(()=>{
            getData();
        });

    }
  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {apidata.map((data) =>{
                return(
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>
                            <Link to = '/users/edit'>
                                <button onClick={()=>setData(data.id,data.name,data.age,data.email,data.phone)}>
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
