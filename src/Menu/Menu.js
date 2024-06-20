import React,{ useState, useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiDeleteBin2Line } from "react-icons/ri";
import Navbar from '../components/Navbar';
import './Menu.css'
const Menu = () => {
    const [id,setID] = useState([]);
    const [image,setImage]  =useState({preview:'',data:''})

    useEffect(() => {
        fetch(`http://localhost:5000/all-foods`)
            .then((res) => res.json())
            .then((data) => setID(data))
    }, []);
    const fetchdata = id.map(item =>(
        <div key={item._id}>
            <div className='container mt-5'>
                <div className='row'>        <br></br>

                    <div className='col xs={12} md={6} lg={4}'>
                    <div class="card" style={{ width: '18rem' }}>
  <img src={item.url}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <h5>{item.price}</h5>
    <h5>{item.desc}</h5>
    <p class="card-text">{item.cate}</p>
    <a href="#" class="btn btn-primary">Add to Cart</a>

  </div>
</div>
</div>
                </div>
            </div>
           
        {/* <table cellspacing="10" cellpadding="5" >    
            <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Images</th>
            <th scope="col">URL</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
      <tbody>
        <tr>
        <td>{item.name}</td>
        <td>{image.preview && <img src={image.preview} width='100' height='100' />}
        </td>
        <td class="myImage2"><img src={item.url}/>
        </td>
    
        <td>{item.price}</td>
        <td>{item.desc}</td>
        <td>{item.cate}</td>
        <td>
        </td>
      </tr>
      </tbody>
      </table> */}
      
      </div>
    ))
  return (
    <div>
        <Navbar/>
{fetchdata}
    </div>
  )
}

export default Menu