import React from 'react';
import { Link} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';


const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/services">Services</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/our-doctors">Our Doctors</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/contact">Contact</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/aboutus">About us</Link>
                </li>
                </ul>
                <div className="d-flex">
                    {!user.email? <div className="justify-content-end align-items-center">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               <Link class="nav-link" aria-current="page" to="/login">Login</Link>     
                            </li>
                            <li className="nav-item">
                               <Link class="nav-link" aria-current="page" to="/singup">Sing Up</Link>     
                            </li>
                        </ul>
                        </div> :
                            <div className="justify-content-end align-items-center">
                                <span>{user.displayName }</span>
                                <button className="btn" onClick={logOut}>Log out  <i class="bi bi-box-arrow-in-right fs-5"></i></button>
                        </div>
                    }
                </div>
            </div>
        </div>
    </nav>
    );
};

export default NavBar;