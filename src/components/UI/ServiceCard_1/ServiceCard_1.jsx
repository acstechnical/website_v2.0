import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceCard_1.module.css';

// Component này nhận vào 4 thông số (props) để tự động thay đổi nội dung
const ServiceCard = ({ icon: Icon, title, description, linkTo }) => {
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
      
      <Link to={linkTo} className={styles.readMore}>
        Read more <span className={styles.arrow}>→</span>
      </Link>
    </div>
  );
};

export default ServiceCard;