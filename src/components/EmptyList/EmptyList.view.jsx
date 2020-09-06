import React from 'react';
import emptyImg from '../../assets/icon-empty.svg';

import './EmptyList.style.scss'

const EmptyList = () => {
  return (
    <div className='EmptyList'>
      <img className='EmptyList__img' src={emptyImg} alt="list is empty"/>
      <p>قائمة المهام فارغة</p>
    </div>
  );
}

export default EmptyList;