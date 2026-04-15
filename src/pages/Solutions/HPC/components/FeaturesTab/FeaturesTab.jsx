import React, { useState } from 'react';
import styles from './FeaturesTab.module.css'; 
import { hpcTabData } from './data';

const FeaturesTab = () => {
  // Mặc định chọn tab đầu tiên (id = 1)
  const [activeTabId, setActiveTabId] = useState(1);

  // Tìm ra nội dung của tab đang được chọn để hiển thị bên phải
  const activeContent = hpcTabData.find(tab => tab.id === activeTabId);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          
          {/* CỘT TRÁI: MENU DANH SÁCH */}
          <div className={styles.sidebar}>
            {hpcTabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`${styles.tabButton} ${activeTabId === tab.id ? styles.active : ''}`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* CỘT PHẢI: NỘI DUNG CHI TIẾT */}
          <div className={styles.contentArea}>
            <ul className={styles.contentList}>
              {activeContent.content.map((point, index) => (
                <li key={index} className={styles.listItem}>
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesTab;