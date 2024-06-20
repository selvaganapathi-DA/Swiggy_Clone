import React from 'react'
import './Admin.css'
import Create from '../Admin/Create'
import Update from '../Admin/Update'
const Admin = props => {

// useEffect(()=>{
//   axios.get('http://localhost:5000/upload.food')
//   .then(res=>setData(res.data))
//   .catch(er =>console.log(er));
// },[])
// const handleSubmit =(event) =>{
//   event.preventDefault();
//   const id= data.length  +1;
//   axios.get('http://localhost:5000/upload.food')
//   .then(res => console.log(res))
//   .catch(er => console.log(er));
// }
// const handleEdit =(id) =>{
//       setEditId(id)
// }
// const handleUpdate =() =>{
//   axios.put('http://localhost:5000/users/' +editId)
// }
// const handleDelete =(id) =>{
//   setDeleteId(id)
// }
  return (
    <div>

<div class="container mt-5">

<div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Upload Items</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Update Items</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Users</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Logout</button>
  </div>
  <div class="tab-content pl-5" id="v-pills-tabContent">
    
  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
  <Create/>
    </div>

    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
  <Update/>
</div>
   
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
    <div class="form-group">
    
  </div>
  </div>

    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    <div class="form-group">
    
  </div>
    </div>
   
   
  </div>
</div>
        </div>
  
  )
}


export default Admin