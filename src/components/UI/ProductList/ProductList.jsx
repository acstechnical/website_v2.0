import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'phosphor-react';
import styles from './ProductList.module.css';

const ProductList = ({ data }) => {
  // Kiểm tra an toàn: Nếu không có data thì không render gì cả (hoặc hiện loading)
  if (!data || data.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.listWrapper}>
          
          {/* Lặp để load ra item */}
          {data.map((item) => (
            <div key={item.id} className={styles.productCard}>
              
              <div className={styles.imageCol}>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.title} />
                </div>
              </div>

              <div className={styles.contentCol}>
                <div className={styles.contentWrapper}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <ul className={styles.featureList}>
                    {item.features.map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                </div>

                <Link to={item.linkTo} className={styles.readMoreBtn}>
                  Read more <ArrowRight size={18} weight="bold" style={{ marginLeft: '5px' }} />
                </Link>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProductList;