import React from 'react';
import { Link } from 'react-router-dom';

const NavbarIn = () => {
    return (
        // <div className="header">
        //     <nav dir="rtl" class="topnav navbar fixed-top navbar-expand-lg navbar-light bg-light">
        //         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz8emdMVK7AFJe6O3LehS1aUlE2IaAvT-iRw&usqp=CAU' width={60} height={60} className="d-inline-block align-top mr-4" alt="Autobot Logo" loading="lazy" />
        //         <a class="navbar-brand" href="#"><strong> מחברת מתכונים של </strong></a>
        //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div class="navbar-nav">
        //             <ul className="topnav navbar-nav ml-3">
        //                     <li className="nav-item active">
        //                         <a className="nav-item nav-link active" href="#">כל המתכונים<span className="sr-only">(current)</span></a>
        //                     </li>
        //                     <li className="nav-item active">
        //                         <a className="nav-item nav-link active" href="#">הפרופיל שלי<span className="sr-only">(current)</span></a>
        //                     </li>
        //                     <li className="nav-item active">
        //                         <a className="nav-item nav-link active" href="#">מתכון חדש<span className="sr-only">(current)</span></a>
        //                     </li>
        //                     <li className="nav-item active">
        //                         <a className="nav-item nav-link active" href="#">המתכונים שלי<span className="sr-only">(current)</span></a>
        //                     </li>
        //                     <li className="nav-item active">
        //                         <a className="nav-item nav-link active" href="#">כל המתכונים<span className="sr-only">(current)</span></a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="topnav navbar-nav topnav-right">
        //                 <a className="nav-item nav-link" href="#">התנתקות</a>
        //             </div>
        //         </div>
        //     </nav>
        // </div>

        <div className="header">
            <nav dir="rtl" className="topnav navbar fixed-top navbar-expand-md navbar-light bg-warning">
                <div className="container">
                    <img src='./images/nav_Icon1.jpg' width={80} height={60} className="d-inline-block align-top mr-4" alt="Autobot Logo" loading="lazy" />
                    <Link className="navbar-brand mr-4" to="/mainLogedIn">
                        <strong> מחברת מתכונים של מיכאל </strong>
                    </Link>
                    {/* Accordion */}
                    {/* id="navbarResponsive"
                    className="navbar-nav ml-auto" */}
                    <button className="navbar-toggler navbar-nav ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="dark-blue-text">
                                <i class="fas fa-bars fa-1x"></i>
                            </span>
                    </button> */}
                    <div className="collapse navbar-collapse row" id="collapsibleNavbar">
                        <ul className="topnav navbar-nav ml-3">
                            <li className="nav-item active">
                                <Link className="nav-item nav-link active" to="/updProfile">הפרופיל שלי<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-item nav-link active" to="/receiptCreate">מתכון חדש<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-item nav-link active" to="/mainLogedIn">המתכונים שלי<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-item nav-link active" to="/receiptFilter">כל המתכונים<span className="sr-only">(current)</span></Link>
                            </li>
                            {/* <li className="nav-item active">
                                <Link className="nav-item nav-link active" href="#">כל המתכונים<span className="sr-only">(current)</span></Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="topnav navbar-nav topnav-right">
                        <Link className="nav-item nav-link" to="/mainNotLogedIn">התנתקות</Link>
                    </div>
                </div>
            </nav >
        </div>
    );
}

export default NavbarIn;