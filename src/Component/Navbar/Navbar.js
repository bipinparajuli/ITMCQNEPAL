import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#">ITMCQNEPAL</a>
    
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    
    <li className="nav-item dropdown">
       
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          bca
        </a>
       
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          
              <a className="dropdown-item dropdown-toggle" href="#"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">    
                  1st sem
              </a>
          
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >

              <Link className="dropdown-item" to="/question/C">C</Link>
              <Link className="dropdown-item" to="/question/math">Math</Link>
              <Link className="dropdown-item" to="/question/digitallogic">Digital Logic</Link>
              <Link className="dropdown-item" to="/question/english">English</Link>
              <Link className="dropdown-item" to="/question/socialogy">Socialogy</Link>
        
      </div>

                <Link className="dropdown-item dropdown-toggle" to=""  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  2nd
                </Link>
                      
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >

<a className="dropdown-item" href="#">Java</a>
<a className="dropdown-item" href="#">888</a>
<a className="dropdown-item" href="#">***</a>
<a className="dropdown-item" href="#">***</a>
<a className="dropdown-item" href="#">***</a>

</div>
                
                
                <a className="dropdown-item" href="#">3rd</a>
                <a className="dropdown-item" href="#">4th</a>
                <a className="dropdown-item" href="#">5th</a>
                <a className="dropdown-item" href="#">6th</a>
                <a className="dropdown-item" href="#">7th</a>
                <a className="dropdown-item" href="#">8th</a>

        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">mba</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">csit</a>
      </li>
    </ul>
    
  </div>
</nav>


        </div>
    )
}

export default Navbar
