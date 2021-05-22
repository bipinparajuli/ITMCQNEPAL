import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">ITMCQNEPAL</a>
    
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    
    <li class="nav-item dropdown">
       
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          bca
        </a>
       
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          
              <a class="dropdown-item dropdown-toggle" href="#"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">    
                  1st sem
              </a>
          
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >

              <a class="dropdown-item" href="#">C</a>
              <a class="dropdown-item" href="#">Math</a>
              <a class="dropdown-item" href="#">Digital Logic</a>
              <a class="dropdown-item" href="#">English</a>
              <a class="dropdown-item" href="#">Socialogy</a>
        
      </div>

                <a class="dropdown-item dropdown-toggle" href="#"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  2nd
                </a>
                      
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >

<a class="dropdown-item" href="#">Java</a>
<a class="dropdown-item" href="#">888</a>
<a class="dropdown-item" href="#">***</a>
<a class="dropdown-item" href="#">***</a>
<a class="dropdown-item" href="#">***</a>

</div>
                
                
                <a class="dropdown-item" href="#">3rd</a>
                <a class="dropdown-item" href="#">4th</a>
                <a class="dropdown-item" href="#">5th</a>
                <a class="dropdown-item" href="#">6th</a>
                <a class="dropdown-item" href="#">7th</a>
                <a class="dropdown-item" href="#">8th</a>

        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">mba</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">csit</a>
      </li>
    </ul>
    
  </div>
</nav>


        </div>
    )
}

export default Navbar
