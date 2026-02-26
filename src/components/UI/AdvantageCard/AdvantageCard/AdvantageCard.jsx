import React from 'react';
import styles from './AdvantageCard.module.css';
import * as Icons from "phosphor-react";

const AdvantageCard = ({ iconName, icon: IconProp, Icon, text }) => {
  const isPhosphorName = typeof iconName === 'string';
  const IconComponent = Icon || IconProp || (isPhosphorName ? Icons[iconName] : iconName) || Icons.Lightning;

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <IconComponent
          size={100}
          weight="light"
          strokeWidth={1}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default AdvantageCard;