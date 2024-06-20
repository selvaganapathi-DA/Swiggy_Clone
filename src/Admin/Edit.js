import React, { useState,useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Edit = () => {
    const {id}= useParams();

    // const [user,setUsers]  =  useState([]);
    // const [name,setName] = useState('')
    // const [images,setImages] = useState('')
    // const [url,setUrl] = useState('')
    // const [price,setPrice] =useState('')
    // const [desc,setDesc] = useState('')
    // const [cate,setCate] = useState('')
    // const [submit,setSubmit] = useState('');

    const [formData, setFormData] = useState({
        name:"",
        url:"",
        images:"",
        price:"",
        desc:"",
        cate:""

    });



    // const params = useParams()

    useEffect (()=>{
        fetch(`http://localhost:5000/foods/${id}`)
        .then((res) => res.json())
        .then((data) => setFormData(data))
    },[id])
   
    const handleUpdate =(event) =>{
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const images = form.images.value
        const url = form.url.value
        const price = form.price.value
        const desc = form.desc.value
        const cate = form.cate.value
      
    
        const dataToSubmit ={
            name,
            images,
            url,
            price,
            desc,
            cate
        };
        fetch(`http://localhost:5000/foods/${id}`,{
            method:'PATCH',
            headers :{
                'Content-type' : 'application/json',
          },
          body:JSON.stringify(dataToSubmit)
        })
        .then(res => res.json())
        .then(() =>{
           alert('Edited Form Submit Successfully')
           
        });
    };

  return (

            <div class="container center_div">
        
        <Form className="create-form" onSubmit={handleUpdate}>
        <Form.Field>
        <label htmlFor="name">Name</label>
        <input type="name" name="name" class="form-control" defaultValue={formData.name}/>
        </Form.Field>

        <Form.Field>
        <label htmlFor="images" >Image:</label>
    <input type="file" name="images" class="form-control" defaultValue={formData.images}/>
        </Form.Field>

        <Form.Field>
        <label htmlFor="url">Image Url:</label>
        <input  type="url" name="url" class="form-control" defaultValue={formData.url}/>
        </Form.Field>

        <Form.Field>
        <label htmlFor="price">Price:</label>
        <input type="number" name="price"  defaultValue={formData.price} class="form-control"/>
        </Form.Field>  

        <Form.Field>
        <label htmlFor="text">Description:</label>
        <input type="text" name="desc" defaultValue={formData.desc} class="form-control"/>
        </Form.Field>

        <Form.Field>
        <label htmlFor="cate">Category:</label>
        <input type="text" name="cate" defaultValue={formData.cate} class="form-control"/><br/>
        </Form.Field>
        
       <button type='submit'  class="btn btn-primary">Submit</button>
    </Form>
        </div>

  );
};

export default Edit

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Form } from 'semantic-ui-react';

// const Edit = () => {
//     const { id } = useParams();

//     const [formData, setFormData] = useState({
//         name: "",
//         url: "",
//         images: "",
//         price: "",
//         desc: "",
//         cate: ""
//     });

//     useEffect(() => {
//         fetch(`http://localhost:5000/foods/${id}`)
//             .then((res) => res.json())
//             .then((data) => setFormData(data));
//     }, [id]);

//     const handleUpdate = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const images = form.images.value;
//         const url = form.url.value;
//         const price = form.price.value;
//         const desc = form.desc.value;
//         const cate = form.cate.value;

//         const dataToSubmit = {
//             name,
//             images,
//             url,
//             price,
//             desc,
//             cate
//         };

//         fetch(`http://localhost:5000/foods/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'Content-type': 'application/json',
//             },
//             body: JSON.stringify(dataToSubmit)
//         })
//         .then(res => res.json())
//         .then(() => {
//             alert('Edited Form Submit Successfully');
//         });
//     };

//     return (
//         <div className="container center_div">
//             <Form className="create-form" onSubmit={handleUpdate}>
//                 <Form.Field>
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" name="name" className="form-control" defaultValue={formData.name} />
//                 </Form.Field>

//                 <Form.Field>
//                     <label htmlFor="images">Image:</label>
//                     <input type="file" name="images" className="form-control" defaultValue={formData.images} />
//                 </Form.Field>

//                 <Form.Field>
//                     <label htmlFor="url">Image Url:</label>
//                     <input type="url" name="url" className="form-control" defaultValue={formData.url} />
//                 </Form.Field>

//                 <Form.Field>
//                     <label htmlFor="price">Price:</label>
//                     <input type="number" name="price" className="form-control" defaultValue={formData.price} />
//                 </Form.Field>

//                 <Form.Field>
//                     <label htmlFor="desc">Description:</label>
//                     <input type="text" name="desc" className="form-control" defaultValue={formData.desc} />
//                 </Form.Field>

//                 <Form.Field>
//                     <label htmlFor="cate">Category:</label>
//                     <input type="text" name="cate" className="form-control" defaultValue={formData.cate} />
//                 </Form.Field>

//                 <button type='submit' className="btn btn-primary">Submit</button>
//             </Form>
//         </div>
//     );
// };

// export default Edit;
