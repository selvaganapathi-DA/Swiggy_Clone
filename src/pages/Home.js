import React from 'react'
import Navbar from '../components/Navbar'
import '../pages/Home.css'
import Biryani from '../images/Biryani_2.png'
import south from '../images/South.png'
import Burger from '../images/Pizza.png'
import Momo from '../images/Burger.png'
import cakes from '../images/Cakes.png'
import Parotta from '../images/Parotta.png'
import order from '../images/ord.png'

import { Link} from 'react-router-dom'

const Home = () => {


    return (
    <div className='home'>
        <Navbar/>
        
        <div class="container mt-4">
          <h4> <strong>What's on your mind?</strong></h4>
          <div class ="row">
 <div class="col-2">
 <div class="card">
 <Link to = {'/biriyani'}>
 <img src={Biryani} alt=""/>
 </Link> </div>
</div>

            <div class="col-2">
              <div class="card">
              <img src={south} alt=""/>
              </div>
            </div>
            
            <div class="col-2">
              <div class="card">
              <img src={Burger} alt=""/>
              </div>
            </div>
            <div class="col-2">
              <div class="card">
              <img src={Parotta} alt=""/>
              </div>
            </div>
            <div class="col-2">
              <div class="card">
              <img src={Momo} alt=""/>
              </div>
            </div>
            <div class="col-2">
              <div class="card">
              <img src={cakes} alt=""/>
              </div>
            </div>
           
          </div>
        </div>
        <hr/>
<section>
<div class="container">
<h4>Top restaurant chains in Coimbatore</h4>
  <div class="row">
    <div class="col-md-3">
    <div class="card">
    <img src={order} class="card-img-top"  alt="Card image cap"/>
              </div>
              <div class="card-body"><br/>
    <h5 class="card-title">Pizza Hut</h5>
    <p class="card-text">4.3.20-25 mins</p>
    <p class="card-text">Pizzas</p>
    <p class="card-text">Peelamedu</p>

  </div>
    </div>
    <div class="col-md-3">
    <div class="card">
    <img src={order} class="card-img-top"  alt="Card image cap"/>
              </div>
              <div class="card-body"><br/>
    <h5 class="card-title">Pizza Hut</h5>
    <p class="card-text">4.3.20-25 mins</p>
    <p class="card-text">Pizzas</p>
    <p class="card-text">Peelamedu</p>

  </div>
    </div>
    <div class="col-md-3">
    <div class="card">
    <img src={order} class="card-img-top"  alt="Card image cap"/>
              </div>
              <div class="card-body"><br/>
    <h5 class="card-title">Pizza Hut</h5>
    <p class="card-text">4.3.20-25 mins</p>
    <p class="card-text">Pizzas</p>
    <p class="card-text">Peelamedu</p>

  </div>
    </div>
    <div class="col-md-3">
    <div class="card">
    <img src={order} class="card-img-top"  alt="Card image cap"/>
              </div>
              <div class="card-body"><br/>
    <h5 class="card-title">Pizza Hut</h5>
    <p class="card-text">4.3.20-25 mins</p>
    <p class="card-text">Pizzas</p>
    <p class="card-text">Peelamedu</p>

  </div>
    </div>
  </div>
</div>
</section>

</div>
    )
}
export default Home;