import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin'
import Update from './Admin/Update';
import Create from './Admin/Create';
import Read from './Admin/Read';
import Edit from './Admin/Edit';
import Login from './Admin/Login';
import Signup from './Admin/Signup';
import Menu from './Menu/Menu';
import Biriyani from './Menu/Biriyani';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin' element ={<Admin/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="*">Ups</Route>
          <Route path='/update' element={<Update/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/read' component={Read} />
          <Route path ='/edit/:id' element ={<Edit/>} loader={({params})=> fetch(`http://localhost:5000/foods/${params.id}`)}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/biriyani" element={<Biriyani/>}/>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
