import React from 'react';
import styles from './VideoShowcase.module.css';

const VideoShowcase = ({ src, title }) => {

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Tiêu đề */}
        <h2 className={styles.title}>
          {title}
        </h2>

        {/* Khung chứa Video YouTube */}
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.iframe}
            src={src} 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;