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

        {/* 3. Nút chuyển đổi ngôn ngữ Anh / Việt */}
        <div className={styles.langToggle} onClick={toggleLanguage}>
          {/* Vòng tròn trắng di chuyển */}
          <div className={`${styles.langCircle} ${language === 'vi' ? styles.vi : ''}`}></div>
          <div className={styles.flagSelect}>
            <img src={engFlag} alt="Language flag" className={styles.flagIcon}/>
            <img src={vieFlag} alt="Language flag" className={styles.flagIcon}/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;