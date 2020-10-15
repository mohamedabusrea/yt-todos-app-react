import React from 'react';

import './Footer.style.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <p>
        <span>يمكنك الوصول الي ملفات المشروع علي </span>
        <a href="https://github.com/mohamedabusrea/yt-todos-app-react"
           target="_blank"
           rel="noopener noreferrer">
          هذا الرابط
        </a>
      </p>
    </footer>
  );
}

export default Footer;
