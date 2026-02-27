import React from 'react';
import styles from './PageTitle.module.css';

const PageTitle = ({ title, videoSrc }) => {
  return (
    <div className={styles.pageTitle}>
        <video autoPlay muted loop playsInline preload="auto" className={styles.videoBackground}>
            <source src={videoSrc} type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
        <h1>{title}</h1>
    </div>
    );
};

export default PageTitle;