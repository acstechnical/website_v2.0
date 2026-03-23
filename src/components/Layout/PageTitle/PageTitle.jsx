import React from 'react';
import styles from './PageTitle.module.css';

const PageTitle = ({ title, imgSrc }) => {
  return (
    <div 
      className={styles.pageTitle} 
      style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className={styles.overlay}></div>
        <h1>{title}</h1>
    </div>
    );
};

export default PageTitle;