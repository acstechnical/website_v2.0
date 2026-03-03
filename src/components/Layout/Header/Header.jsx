import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../../assets/image/global/acs_logo.png';
import engFlag from '../../../assets/image/global/flag-for-flag-united-kingdom-svgrepo-com.svg';
import vieFlag from '../../../assets/image/global/flag-for-flag-vietnam-svgrepo-com.svg';

const Header = () => {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null); // Reset dropdown khi đóng menu
  };

  const toggleDropdown = (name) => {
    // Chỉ xử lý toggle click trên màn hình mobile
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    // Nếu bạn có dùng i18n, hãy gọi i18n.changeLanguage(lang) ở đây
  };

  return (
    <header className={styles.header}>
      {/* 1. Nút 3 thanh ngang (Hamburger) - Xuất hiện đầu tiên trên mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isMenuOpen ? styles.barActive : ''}`}></span>
        <span className={`${styles.bar} ${isMenuOpen ? styles.barActive : ''}`}></span>
        <span className={`${styles.bar} ${isMenuOpen ? styles.barActive : ''}`}></span>
      </div>

      {/* 2. Logo */}
      <div className={styles.logo}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="Acronics Logo"/>
        </Link>
      </div>

      {/* 3. Phần bên phải: Menu + Language */}
      <div className={styles.rightSection}>
        {/* Menu điều hướng */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
          {/* Dropdown: Solutions */}
          <div className={styles.dropdownContainer}>
            <span className={styles.navLink} onClick={() => toggleDropdown('solutions')}>
              Solutions
            </span>
            <div className={`${styles.dropdownMenu} ${activeDropdown === 'solutions' ? styles.showMobile : ''}`}>
              <Link to="/solutions/hpc" className={styles.dropdownItem} onClick={toggleMenu}>HPC</Link>
              <Link to="/solutions/anti-ddos" className={styles.dropdownItem} onClick={toggleMenu}>Anti-DDoS</Link>
              <Link to="/solutions/ipsec" className={styles.dropdownItem} onClick={toggleMenu}>IPSec</Link>
              <Link to="/solutions/ids-ips" className={styles.dropdownItem} onClick={toggleMenu}>IDS/IPS</Link>
            </div>
          </div>

          {/* Dropdown: Products */}
          <div className={styles.dropdownContainer}>
            <span className={styles.navLink} onClick={() => toggleDropdown('products')}>
              Products
            </span>
            <div className={`${styles.dropdownMenu} ${activeDropdown === 'products' ? styles.showMobile : ''}`}>
              <Link to="/products/hpc-platforms" className={styles.dropdownItem} onClick={toggleMenu}>HPC Platforms</Link>
              <Link to="/products/networking-devices" className={styles.dropdownItem} onClick={toggleMenu}>Networking Devices</Link>
              <Link to="/products/cyber-security" className={styles.dropdownItem} onClick={toggleMenu}>Cyber Security</Link>
              <Link to="/products/cryptography" className={styles.dropdownItem} onClick={toggleMenu}>Cryptography</Link>
            </div>
          </div>

          {/* Link: About & Contact */}
          <Link to="/about" className={styles.navLink} onClick={toggleMenu}>About</Link>
          <Link to="/contact" className={styles.navLink} onClick={toggleMenu}>Contact</Link>
        </nav>

        {/* Nút Ngôn ngữ */}
        <div className={styles.langWrapper}>
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
        </div>
      </div>
    </header>
  );
}

export default Header;