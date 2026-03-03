import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../../assets/image/global/acs_logo.png';
import engFlag from '../../../assets/image/global/flag-for-flag-united-kingdom-svgrepo-com.svg';
import vieFlag from '../../../assets/image/global/flag-for-flag-vietnam-svgrepo-com.svg';

const Header = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'vi' : 'en'));
  };

  // Hàm xử lý khi thay đổi select
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log("Ngôn ngữ hiện tại:", event.target.value);
    // Tại đây bạn có thể gọi hàm i18n.changeLanguage(event.target.value) nếu dùng i18next
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    // Nếu bạn có dùng i18n, hãy gọi i18n.changeLanguage(lang) ở đây
  };

  return (
    <header className={styles.header}>
      {/* 1.Logo */}
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Acronics Logo"/>
        </Link>
      </div>

      {/* 2.Menu */}
      <nav className={styles.nav}>
        {/* Dropdown: Solutions */}
        <div className={styles.dropdownContainer}>
          <span className={styles.navLink}>Solutions</span>
          <div className={styles.dropdownMenu}>
            <Link to="/solutions/hpc" className={styles.dropdownItem}>HPC</Link>
            <Link to="/solutions/anti-ddos" className={styles.dropdownItem}>Anti-DDoS</Link>
            <Link to="/solutions/ipsec" className={styles.dropdownItem}>IPSec</Link>
            <Link to="/solutions/ids-ips" className={styles.dropdownItem}>IDS/IPS</Link>
          </div>
        </div>

        {/* Dropdown: Products */}
        <div className={styles.dropdownContainer}>
          <span className={styles.navLink}>Products</span>
          <div className={styles.dropdownMenu}>
            <Link to="/products/hpc-platforms" className={styles.dropdownItem}>HPC Platforms</Link>
            <Link to="/products/networking-devices" className={styles.dropdownItem}>Networking Devices</Link>
            <Link to="/products/cyber-security" className={styles.dropdownItem}>Cyber Security</Link>
            <Link to="/products/cryptography" className={styles.dropdownItem}>Cryptography</Link>
          </div>
        </div>

        {/* Link: About & Contact */}
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>

        {/* 3. Dropdown Ngôn ngữ*/}
        <div className={styles.dropdownContainer}>
          {/* Hiển thị lá cờ hiện tại */}
          <div className={styles.langDisplay}>
            <img 
              src={language === 'en' ? engFlag : vieFlag} 
              alt="Current Language" 
              className={styles.flagMain} 
            />
          </div>

          {/* Danh sách lựa chọn khi hover */}
          <div className={styles.dropdownMenu}>
            <div 
              className={styles.dropdownItem} 
              onClick={() => changeLanguage('en')}
            >
              <img src={engFlag} alt="English" className={styles.flagIcon} />
              <span>English</span>
            </div>
            <div 
              className={styles.dropdownItem} 
              onClick={() => changeLanguage('vi')}
            >
              <img src={vieFlag} alt="Tiếng Việt" className={styles.flagIcon} />
              <span>Tiếng Việt</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;