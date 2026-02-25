import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logoWhite from '../../../assets/image/global/asc_logo_white.svg'; 
import videoBg from '../../../assets/video/footer_background.mp4'; // Video nền cho Footer
const Footer = () => {
  return (
    <footer className={styles.footer}>
        {/* 1. Thẻ Video nằm dưới cùng */}
        <video 
            className={styles.videoBackground}
            autoPlay 
            muted 
            loop
            playsInline>
            <source src={videoBg} type="video/mp4" />
        </video>
       
        
        {/* 2. Lớp phủ màu đen mờ để làm nổi bật chữ */}
        <div className={styles.overlay}></div>

        {/* 3. Nội dung chính của Footer */}
        <div className={styles.footerContent}>

        {/* Cột 1: Logo và Tagline */}
        <div className={styles.brandSection}>
          <Link to="/" className={styles.logo}>
            <img src={logoWhite} alt="Acronics Solutions Logo" />
          </Link>
          <p className={styles.tagline}>
            Innovating cybersecurity, networking, and performance solutions.
          </p>
        </div>

        {/* Cột 2: Solutions */}
        <div className={styles.linksSection}>
          <h3 className={styles.colTitle}>Solutions</h3>
          <div className={styles.linkList}>
            <Link to="/solutions/hpc" className={styles.footerLink}>HPC</Link>
            <Link to="/solutions/anti-ddos" className={styles.footerLink}>AntiDDoS</Link>
            <Link to="/solutions/ipsec" className={styles.footerLink}>IPSec</Link>
            <Link to="/solutions/ids-ips" className={styles.footerLink}>IDS / IPS</Link>
          </div>
        </div>

        {/* Cột 3: Products */}
        <div className={styles.linksSection}>
          <h3 className={styles.colTitle}>Products</h3>
          <div className={styles.linkList}>
            <Link to="/products/hpc-platforms" className={styles.footerLink}>HPC Platforms</Link>
            <Link to="/products/networking-devices" className={styles.footerLink}>Networking Devices</Link>
            <Link to="/products/cyber-security" className={styles.footerLink}>Cyber Security</Link>
            <Link to="/products/cryptography" className={styles.footerLink}>Cryptography</Link>
          </div>
        </div>

        {/* Cột 4: Company */}
        <div className={styles.linksSection}>
          <h3 className={styles.colTitle}>Company</h3>
          <div className={styles.linkList}>
            <Link to="/about" className={styles.footerLink}>About us</Link>
            <Link to="/contact" className={styles.footerLink}>Contact</Link>
          </div>
        </div>

      </div>
      
      {/* Dòng Copyright */}
      <div className={styles.footerBottom}>
        © 2026 Acronics Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;