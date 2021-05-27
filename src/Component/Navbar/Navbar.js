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
       
       {/* BCA */}

        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkbca" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          bca
        </a>
       
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkbca">
          
                <Link className="nav-link dropdown-item dropdown-toggle"   id="navbarDropdownMenuLinkbca1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">    
                    1st sem
                </Link>
          
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkbca1" >

                        <Link className="dropdown-item" to="/question/C">CFA</Link>
                        <Link className="dropdown-item" to="/question/math">Math</Link>
                        <Link className="dropdown-item" to="/question/digitallogic">English</Link>
                        <Link className="dropdown-item" to="/question/english">Sociology and technology</Link>
                        <Link className="dropdown-item" to="/question/socialogy">Digital Logic</Link>
                  
                    </div>


                <Link className="dropdown-item dropdown-toggle" to=""  id="navbarDropdownMenuLinkbca2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  2nd
                </Link>
                      
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkbca2" >

                          <a className="dropdown-item" href="/question/C">C</a>
                          <a className="dropdown-item" href="/question/math">Math</a>
                          <a className="dropdown-item" href="/question/english">English</a>
                          <a className="dropdown-item" href="/question/microprocessor">Microprocessor</a>
                          <a className="dropdown-item" href="/question/account">Account</a>

                    </div>


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
