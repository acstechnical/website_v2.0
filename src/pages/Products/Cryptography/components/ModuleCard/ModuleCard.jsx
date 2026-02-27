import React from 'react';
import styles from './ModuleCard.module.css';

const ModuleCard = ({ title }) => {
  return (
    <div className={styles.moduleCard}>
      <div className={styles.moduleCardContent}>
        {title}
      </div>
    </div>
  );
};

export default ModuleCard;