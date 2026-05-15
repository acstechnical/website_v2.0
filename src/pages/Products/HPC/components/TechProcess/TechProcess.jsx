import React, { useState } from 'react';
import styles from './TechProcess.module.css';
import { CaretRight, CaretDown } from 'phosphor-react';
import { hpcProcessData } from './data';

import hpc_ai_2 from '../../../../../assets/image/firewall/firewall_ai_1.jpg';
import hpc_ai_3 from '../../../../../assets/image/firewall/firewall_ai_2.jpg';
import hpc_ai_4 from '../../../../../assets/image/hpc_product/hpc_ai_4.jpg';
import hpc_ai_5 from '../../../../../assets/image/hpc_product/hpc_ai_5.jpg';

// Map ảnh từ data
const IMG_MAP = {
  "hpc_ai_2": hpc_ai_2,
  "hpc_ai_3": hpc_ai_3,
  "hpc_ai_4": hpc_ai_4,
  "hpc_ai_5": hpc_ai_5
};

const TechProcess = () => {
  const [openId, setOpenId] = useState(null); 
  // State lưu URL của ảnh đang được zoom
  const [zoomedImg, setZoomedImg] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id); 
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.accordionWrapper}>
          
          {hpcProcessData.map((item) => {
            const isOpen = openId === item.id;
            const images = item.imgKey || item.imgKeys || [];
            const imagesToRender = images.map(key => IMG_MAP[key]).filter(Boolean);

            return (
              <div key={item.id} className={`${styles.accordionItem} ${isOpen ? styles.activeItem : ''}`}>
                
                <button 
                  className={styles.accordionHeader} 
                  onClick={() => toggleAccordion(item.id)}
                >
                  <span className={styles.icon}>
                    {isOpen ? <CaretDown size={20} weight="bold" /> : <CaretRight size={20} weight="bold" />}
                  </span>
                  <span className={styles.titleText}>{item.title}</span>
                </button>

                <div 
                  className={styles.accordionContent}
                  style={{ maxHeight: isOpen ? '2000px' : '0px' }}
                >
                  <div className={styles.contentInner}>
                    <div className={styles.imageGrid}>
                      {imagesToRender.map((src, index) => (
                        <img 
                          key={index} 
                          src={src} 
                          alt={`${item.title} - ${index}`} 
                          className={styles.contentImage}
                          style={{ cursor: 'zoom-in' }}
                          onClick={() => setZoomedImg(src)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Overlay hiển thị khi zoom ảnh */}
      {zoomedImg && (
        <div className={styles.zoomOverlay} onClick={() => setZoomedImg(null)}>
          <img 
            src={zoomedImg} 
            alt="Zoomed View" 
            className={styles.zoomedImage} 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default TechProcess;