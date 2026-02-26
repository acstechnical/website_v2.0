import React from 'react';
import styles from './FeatureItem.module.css';
import * as Icons from "phosphor-react";

const FeatureItem = ({ iconName, icon: IconProp, Icon, title, descriptions }) => {
  const isPhosphorName = typeof iconName === 'string';
  const IconComponent = Icon || IconProp || (isPhosphorName ? Icons[iconName] : iconName) || Icons.Cube;

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <IconComponent
          size={24}
          {...(isPhosphorName ? { weight: 'duotone' } : {})}
        />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.descContainer}>
          {/* Cho phép descriptions là một mảng để render nhiều dòng */}
          {Array.isArray(descriptions) ? (
            descriptions.map((line, index) => (
              <p key={index} className={styles.descLine}>{line}</p>
            ))
          ) : (
            <p className={styles.descLine}>{descriptions}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;