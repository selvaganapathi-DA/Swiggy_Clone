import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Read = () => {
    const [APIData, setAPIData] = useState([]);
    const http ='http://localhost:5000/all-foods';

//     fetch(`http://localhost:5000/foods`,{
//                 method:'GET'
// })
    const setData = (data) => {
        let { id, name, url, images, price ,des,cate } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('images', images);
        localStorage.setItem('Url', url);
        localStorage.setItem('price', price);
        localStorage.setItem('des', des);
        localStorage.setItem('cate', cate)
    }

    fetch(`http://localhost:5000/foods`,{
        method:'GET'
    })
    
    const onDelete = (id) =>{
        fetch(`http://localhost:5000/foods/${id}`,{
        method:'DELETE',
       })
        .then(res => res.json())
        .then(res => console.log(res))
    }
    useEffect(() => {
        const fetchata = async () => {
      
            const response = await fetch(
              'http://localhost:5000/foods');
               const data = await response.json();
     
               //use only 3 sample data
               setAPIData()
        }
        // Call the function
        fetchata();
     }, []);

     async function getRequest() {
        const response = await fetch(http);
        return response.json();
      }
  return (
    <div>
 <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Image Url</Table.HeaderCell>
                        <Table.HeaderCell>Images</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data,key) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.images}</Table.Cell>
                                <Table.Cell>{data.url}</Table.Cell>
                                <Table.Cell>{data.price}</Table.Cell>
                                <Table.Cell>{data.des}</Table.Cell>
                                <Table.Cell>{data.cate}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button  onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
    </div>
  )
}

export default Read