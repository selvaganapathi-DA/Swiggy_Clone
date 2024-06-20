import React,{ useState, useEffect } from 'react'
import './Update.css'
import {  RiDeleteBin2Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';

const Update = () => {
  
    const [id,setID] = useState([]);
    const [image,setImage]=useState({})
    const [currentPage, setCurrentPage] = useState(1);
    const[totalpages,setTotalPages] =useState(1);
    const [selectedItems,setSelectedItems] =useState([]);
    const limit = 10;



  // componentDidMount() {
  //   axios.get(`http://localhost:5000/all-foods`).then((res) => {
  //     const posts = res.data.slice(1, 100);
  //     this.setState({ posts });
  //     // console.log(posts);
  //   });
  // }

useEffect(() => {
    fetch(`http://localhost:5000/all-foods?page=${currentPage}&limit=${limit}`)
        .then((res) => res.json())
        .then((data) => {setID(data.foodname);
          setTotalPages(data.totalpages)
        }) 

        .catch((error)=>{
          console.error("Error fetching food items:", error)
        });
        
}, [currentPage]);

// const indexOfLastRecord = currentPage * recordsPerPage;
//     const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//     const currentRecords = id.slice(indexOfFirstRecord, indexOfLastRecord);
//     const nPages = Math.ceil(id.length / recordsPerPage)

    const handleFileChange = (e) => {
      const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      }
      setImage(img)
    }
    const handleSelectItem = (id) => {
      setSelectedItems(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev,id]
      );
  };
  
    const DeleteId =(id) => {
      fetch(`http://localhost:5000/foods/${id}`,{
          method: 'DELETE'
         })
          .then((res) => res.json())
          .then((data) => {
              toast.success("Successfully deleted the item!");
              setID(prevFood => prevFood.filter(item => item._id !== id));
              console.log(`Delete Post with ID ${id}`);
          })
          .catch((error) => {
            console.error("Error Deleting Items:", error);
        });
  };

  const deleteSelecteditems = () =>{
    fetch('http://localhost:5000/foods',{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ ids : selectedItems })
    })
    .then((res) => res.json())
    .then((data)=>{
        // toast.success("Successfully Deleted");
        setID(prevFood => prevFood.filter(item => !selectedItems.includes(item._id)));
        setSelectedItems([]);
    })
    .catch((error)=>{
      console.error("error delete", error);
    });
  };


  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalpages));
  };

// const fetchdata = id.map(item => (
//     <div className="card" key={item._id}>
  
//     <table cellspacing="15" cellpadding="5" >
//         <thead>
//         <tr>
//           <th scope='col'></th>
//         {/* <th> <input type="checkbox" name={item.name} checked={selectedItems.includes(item._id)} onChange={()=> handleSelectItem(item._id)}/></th> */}
//         <th scope="col">Name</th>
//         <th scope="col">Images</th>
//         <th scope="col">URL</th>
//         <th scope="col">Price</th>
//         <th scope="col">Description</th>
//         <th scope="col">Category</th>
//         <th scope="col">Action</th>
//     </tr>
//     </thead>
//   <tbody>
//     <tr>
//       <td><input type="checkbox" checked={selectedItems.includes(item._id)} onChange={()=> handleSelectItem(item._id)}/>
//       <Link to ={`/foods/${item._id}`}><img src={item.url} alt={item.name}></img></Link>
//       </td>
   
//     <td>{item.name}</td>
//     <td>{<img src={image.preview} width='100' height='100' />}
//     </td>
//     <td class="myImage2"><img src={item.url}/>
//     </td>
//     <td>{item.price}</td>
//     <td>{item.desc}</td>
//     <td>{item.cate}</td>
//     <td>
//    <Link to={`/edit/${item._id}`}><FaRegEdit size={20} color="Green"/></Link>
//     <RiDeleteBin2Line size={20} color="Red" onClick={()=>DeleteId(item._id)} />
//     </td>
//   </tr>
//   </tbody>
//   </table>
  
//   </div>
// ))

const fetchdata = id.map(item=>(
  <div className="card" key = {item._id}>
    <li>
    <div className='div1'>
    <input type="checkbox" checked={selectedItems.includes(item._id)} onChange={()=> handleSelectItem(item._id)}/>
         <Link to ={`/foods/${item._id}`}><img src={item.url} alt={item.name}></img></Link>
</div>
<div className='div2'>
       <h4><span>Category:</span>{}</h4>
       <h4><span>Price:</span>{}</h4>
       </div>
       <div className='div2'>
       <Link to={`/edit/${item._id}`}><FaRegEdit size={20} color="Green"/></Link>
       <RiDeleteBin2Line size={20} color="Red" onClick={()=>DeleteId(item._id)} />

     </div>
    </li>
  
  </div>
))
  return (
    <div>
    <div>
   
    <ul>{ fetchdata }</ul>
    
  </div>
  <div className='pagination'>
    <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
    <span>
      Page{currentPage} of {totalpages}
    </span>

    <button onClick={handleNextPage} disabled={currentPage === totalpages}>Next</button>

  </div>
  {/* <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            /> */}
    <button class ="btn btn-danger" onClick={  deleteSelecteditems } disabled={selectedItems.length === 0}>Delete</button>
    <ToastContainer />
    </div>
    
  );
}

export default Update;