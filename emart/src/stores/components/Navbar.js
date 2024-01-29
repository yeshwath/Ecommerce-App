

import React from 'react'

const Navbar = () => {
  return (
    <div>
 <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <a class="navbar-brand px-4 text-light" href="#">emart</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <form class="form-inline mx-auto">
    <input class="form-control mr-2" type="text" placeholder="Search emart…" aria-label="Search"/>
  </form>
  <a class="navbar-brand ml-auto text-light" href="#">
    <i class="fas fa-shopping-cart"></i> Cart
  </a>
</nav>



    </div>
   
  )
}

export default Navbar