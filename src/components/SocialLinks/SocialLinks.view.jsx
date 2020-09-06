import React from 'react';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';

import './SocialLinks.style.scss';

const SocialLinks = () => {
  return (
    <div className='SocialLinks'>
      <a href="https://www.facebook.com/programmingAdvice"
         target='_blank'
         rel="noopener noreferrer">
        <img className='SocialLinks__img' src={facebook} alt="facebook icon"/>
      </a>
      <a href="https://twitter.com/mohamed_abusrea"
         target='_blank'
         rel="noopener noreferrer">
        <img className='SocialLinks__img' src={twitter} alt="twitter icon"/>
      </a>
      <a href="https://www.youtube.com/mohamedabusrea"
         target='_blank'
         rel="noopener noreferrer">
        <img className='SocialLinks__img' src={youtube} alt="youtube icon"/>
      </a>
    </div>
  );
}

export default SocialLinks;