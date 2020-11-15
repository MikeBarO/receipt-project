import React from 'react';
import '../../../App.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (    
      <div className="footer">
      <hr />
        <footer className="footer-stl bg-warning">
          <p>Created by Michael Bar On ⓒ {year}</p>
        </footer>    
      </div>
    );
}

export default Footer;