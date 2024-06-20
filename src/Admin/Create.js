import React, { useState } from 'react'
import { Button,Form } from 'semantic-ui-react'
import './Create.css'
import { set } from 'rsuite/esm/internals/utils/date'

const Create = () => {
    
    const [image,setImage]  =useState()

 
// useEffect(() =>{
//     fetch(`http://localhost:5000/upload.food`)
//     .then(res => res.json())
//     .then(res =>{
//         setSubmit(res.message);
//     })

// },[])
// const postData = () => {
//     fetch(`http://localhost:5000/upload.food`,{
//         method:'POST'
       
//     })
    
// }
const handleSubmit =(event) =>{
    event.preventDefault();
    const formData = new FormData()
    formData.append('file', image.data)
    const form = event.target
    const name = form.name.value
    const images = form.images.value
    const url = form.url.value
    const price = form.price.value
    const desc = form.desc.value
    const cate = form.cate.value
    const quantity =1;

    const dataToSubmit ={
        name,
        images,
        url,
        price,desc,cate, quantity
    }
    fetch('http://localhost:5000/upload.food',{
        method:'POST',
        headers :{
            'Content-Type' : 'application/json'
            
      },
      body:JSON.stringify(dataToSubmit)
    }).then((res) => res.json())
    .then((data) =>{
       alert('Form Submit Successfully')
       setImage(data.url);
    })
}
const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
// const handleImageUpload=(e) =>{
//     setImage(e.target.files[0]);
//     setPreview(true);
// }
// const clearImage = () =>{
//     setPreview(false);
//     setImage('');
// }
  return (
    <div>
        <div class="container center_div">
        <Form className="create-form" onSubmit={handleSubmit} >
          <div>
          <Form.Field>
        <label for="name"  value="name" >Name</label>
        <input type="text" name="name" class="form-control" id="name"/>
        </Form.Field>
          </div>
       <div>
       {/* {image.preview && <img src={image.preview} alt = "img" width='100' height='100' />} */}
        <Form.Field>
        <label for="images" value="images">Image:</label>
    <input type="file" method="POST" name="images" class="form-control" onChange={handleFileChange} accept=".png, .jpg, .jpeg" id="images"/>
        </Form.Field>
       </div>
        <div>
        <Form.Field>
        <label for="url"  value="url" >Image Url:</label>
        <input  type="url" name="url" class="form-control" id="url"/>
        </Form.Field>
        </div>
  <div>
  <Form.Field>
        <label for="number" value="price">Price:</label>
        <input type="number" name="price" min="1" class="form-control"  id="number"/>
        </Form.Field>  
  </div>
  <div>
  <Form.Field>
        <label for="desc" value="desc">Description:</label>
        <input type="text" name="desc" class="form-control"  id="desc"/>
  </Form.Field>
  </div>
<div>
        <Form.Field>
        <label for="cate" value="cate">Category:</label>
        <input type="cate" name="cate" class="form-control"  id="cate"/><br/>
        </Form.Field>
</div>
      <div>
      <button type='submit' class="btn btn-primary">Submit</button>  
      </div>
      </Form>
       

        
        
        </div>
       
    </div>
  )
}

export default Create