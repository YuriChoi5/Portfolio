import React from 'react';
import './Footer.css'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
    //   const scrollToBottom = () => {
    //     window.scrollTo({
    //       top: document.body.scrollHeight,
    //       behavior: 'smooth',
    //     });
    //   };
    
    return (
      <footer>
        <button className='scroll-top' onClick={scrollToTop}>&#9650;</button>
        {/* <button className='scrool-bottom' onClick={scrollToBottom}>&#9660; Scroll to Bottom</button> */}
      </footer>
    );
}

export default Footer