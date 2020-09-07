import React from 'react';
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";

import './SocialLinks.style.scss';

const SocialLinks = () => {
  const linksData = [
    {
      url: 'https://www.facebook.com/programmingAdvice',
      src: facebook,
      alt: 'facebook icon',
    },
    {
      url: 'https://twitter.com/mohamed_abusrea',
      src: twitter,
      alt: 'twitter icon',
    },
    {
      url: 'https://www.youtube.com/mohamedabusrea',
      src: youtube,
      alt: 'youtube icon',
    },
  ]
  return (
    <div className='SocialLinks'>
      {linksData.map((link, index) =>
        <a key={index}
           href={link.url}
           target='_blank'
           rel="noopener noreferrer">
          <img className='SocialLinks__img' src={link.src} alt={link.alt}/>
        </a>)}
    </div>
  );
};

export default SocialLinks;