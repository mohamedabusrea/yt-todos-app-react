import React from 'react';

import './Footer.style.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <span>يمكنك الوصول الي ملفات المشروع علي </span>
      <a href="https://github.com/mohamedabusrea/yt-todos-app-react"
         className="Footer__link"
         target="_blank"
         rel="noopener noreferrer">هذا الرابط</a>
    </footer>
  );
}

export default Footer;
