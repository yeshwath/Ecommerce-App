

import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <div>
 <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <a class="navbar-brand px-4 text-light" href="#">emart</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <form class="form-inline mx-auto">
    <input class="form-control mr-2" type="text" placeholder="Search emart…" aria-label="Search"/>
  </form>
  <a class="navbar-brand ml-auto text-light" href="#">
  <Link to= '/cart'>
          <div className="cart">Cart
          {/* <span>
            {cartItems.length}
          </span> */}
          </div>
          </Link>
  </a>
</nav>



    </div>
    <div className="subMenu">
    <ul>
          <Link to="/mobiles" className="custom-link">
            <li>Mobiles</li>
          </Link>

          <Link to="/computers" className="custom-link">
            <li>Computers</li>
          </Link>

          <Link to="/watch" className="custom-link">
            <li>Watches</li>
          </Link>

          <Link to="/men" className="custom-link">
            <li>Mens Wear</li>
          </Link>

          <Link to="/woman" className="custom-link">
            <li>Woman Wear</li>
          </Link>

          <Link to="/furniture" className="custom-link">
            <li>Furniture</li>
          </Link>

          <Link to="/kitchen" className="custom-link">
            <li>Kitchen</li>
          </Link>

          <Link to="/fridge" className="custom-link">
            <li>Fridge</li>
          </Link>

          <Link to="/speaker" className="custom-link">
            <li>Speakers</li>
          </Link>

          <Link to="/tv" className="custom-link">
            <li>TV's</li>
          </Link>

          <Link to="/ac" className="custom-link">
            <li>AC</li>
          </Link>
        </ul>
      
    </div>
    </>
   
  )
}

export default Navbar