import React from 'react';
import styles from './TechProcess.module.css';
import { hpcProcessData } from './data';

import hpc_ai_2 from '../../../../../assets/image/hpc_product/hpc_ai_2.jpg';
import hpc_ai_3 from '../../../../../assets/image/hpc_product/hpc_ai_3.jpg';
import hpc_ai_4 from '../../../../../assets/image/hpc_product/hpc_ai_4.jpg';
import hpc_ai_5 from '../../../../../assets/image/hpc_product/hpc_ai_5.jpg';

// Tạo map để lấy ảnh dựa trên key trong data
const IMG_MAP = {
  hpc_ai_2,
  hpc_ai_3,
  hpc_ai_4,
  hpc_ai_5,
};


const TechProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.processGrid}>
          {hpcProcessData.map((item) => {
            const images = item.imgKey || item.imgKeys || [];
            const imagesToRender = images.map((key) => IMG_MAP[key]).filter(Boolean);

            return (
              <article key={item.id} className={styles.processCard}>
                <h3 className={styles.titleText}>{item.title}</h3>
                <div className={styles.imageGrid}>
                  {imagesToRender.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${item.title} - ${index + 1}`}
                      className={styles.contentImage}
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechProcess;