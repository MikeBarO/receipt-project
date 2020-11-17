import React from 'react';
import { Link } from 'react-router-dom';

const NavbarExternal = () => {
    return (
        <div className="header">
            <nav dir="rtl" className="topnav navbar fixed-top navbar-expand-md navbar-light bg-warning">
                <div className="container">
                    <img src='./images/nav_Icon1.jpg' width={80} height={60} className="d-inline-block align-top mr-4" alt="Autobot Logo" loading="lazy" />
                    <Link className="navbar-brand mr-4" to="/mainNotLogedIn">
                        <strong> מחברת מתכונים </strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse row" id="collapsibleNavbar">
                        <ul className="topnav navbar-nav ml-3">
                            <li className="nav-item active">
                                <Link className="nav-item nav-link active" to="/mainNotLogedIn">
                                    כל המתכונים
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                {/* <a className="nav-item nav-link active" href="#">כל המתכונים<span className="sr-only">(current)</span></a> */}
                            </li>
                        </ul>
                    </div>
                    <div className="topnav navbar-nav topnav-right">
                        <Link className="nav-item nav-link" to="/signUp">רישום</Link>
                        <Link className="nav-item nav-link" to="/logIn">התחברות</Link>
                        {/* <a class="nav-item nav-link disabled" href="#">Disabled</a> */}
                    </div>
                </div>
            </nav >
        </div>
    );
}

export default NavbarExternal;