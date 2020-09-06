import React from 'react';

import './Footer.style.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <span>يمكنك مشاهدة خطوات بناء هذا المشروع في </span>
      <a className='Footer__link'
         href="#"
         target='_blank'
         rel="noopener noreferrer">هذا الفيديو</a>
    </footer>
  );
}

export default Footer;