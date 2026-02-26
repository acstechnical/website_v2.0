import React from 'react';
import styles from './ServiceCard_3.module.css';

// Component này nhận vào 4 thông số (props) để tự động thay đổi nội dung
const ServiceCard = ({ icon: IconProp, Icon, title, description }) => {
  const ResolvedIcon = Icon || IconProp;
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {ResolvedIcon ? (
          <ResolvedIcon size={24} color="var(--primary-color)" />
        ) : (
          <div style={{ color: 'var(--primary-color)' }}>❖</div>
        )}
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      {Array.isArray(description) ? (
        description.map((line, index) => (
          <p key={index} className={styles.description}>{line}</p>
        ))
      ) : (
        <p className={styles.description}>{description}</p>
      )}

      
    </div>
  );
};

export default ServiceCard;