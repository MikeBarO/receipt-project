import React from 'react';

const NavbarIn = () => {
    return (
        <div className="header">
            <nav dir="rtl" className="topnav navbar fixed-top navbar-expand-md navbar-light bg-warning">
                <div className="container">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz8emdMVK7AFJe6O3LehS1aUlE2IaAvT-iRw&usqp=CAU' width={60} height={60} className="d-inline-block align-top mr-4" alt="Autobot Logo" loading="lazy" />
                    <a className="navbar-brand mr-4" href="#">
                        <strong> מחברת מתכונים של </strong>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse row" id="collapsibleNavbar">
                        <ul className="topnav navbar-nav ml-3">
                            <li className="nav-item active">
                                <a className="nav-item nav-link active" href="#">כל המתכונים<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-item nav-link active" href="#">הפרופיל שלי<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-item nav-link active" href="#">מתכון חדש<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-item nav-link active" href="#">המתכונים שלי<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-item nav-link active" href="#">כל המתכונים<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="topnav navbar-nav topnav-right">
                        <a className="nav-item nav-link" href="#">התנתקות</a>
                    </div>
                </div>
            </nav >
        </div>
    );
}

export default NavbarIn;