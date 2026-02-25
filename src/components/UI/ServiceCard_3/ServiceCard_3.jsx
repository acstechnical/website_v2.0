import React from 'react';
import styles from './ServiceCard_3.module.css';

// Component này nhận vào 4 thông số (props) để tự động thay đổi nội dung
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {Icon ? (
          <Icon size={24} color="var(--primary-color)" />
        ) : (
          <div style={{ color: 'var(--primary-color)' }}>❖</div>
        )}
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServiceCard;