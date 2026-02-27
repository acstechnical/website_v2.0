import React from 'react';
import styles from './PageTitle.module.css';

const PageTitle = ({ title, imgSrc }) => {
  return (
    <div className={styles.pageTitle}>
        <img src={imgSrc} alt="Page Title Background" className={styles.imgBg} />
        <div className={styles.overlay}></div>
        <h1>{title}</h1>
    </div>
    );
};

export default PageTitle;