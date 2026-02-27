import React, { useState } from 'react';
import styles from './AccordionModule.module.css';

const AccordionModule = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.module}>
      <h3 
        className={`${styles.moduleTitle} ${isOpen ? styles.active : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={styles.icon}>{isOpen ? '▲' : '▼'}</span>
      </h3>
      
      {isOpen && (
        <div className={styles.moduleContent}>
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionModule;