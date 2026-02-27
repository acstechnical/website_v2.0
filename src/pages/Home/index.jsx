import React, { useEffect} from 'react';
import styles from './Home.module.css';
import ServiceCard from '../../components/UI/ServiceCard_1/ServiceCard_1';
import introVideo from '../../assets/video/home_background.mp4';
import { Server, Shield, Lock, Eye, Cpu, Share2, CheckCircle, Key  } from 'react-feather';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Đổi tiêu đề tab trình duyệt
        document.title = "Home | Acronics Solutions"; 
    }, []);

    // Tạo mảng dữ liệu cho Solutions để code gọn gàng, dùng vòng lặp render
    const solutionsData = [
        {
        title: 'HPC Solutions',
        description: 'High-performance computing solutions for research and development, optimizing big data processing workflows.',
        linkTo: '/solutions/hpc',
        icon: Server
        },
        {
        title: 'AntiDDoS',
        description: 'Protecting systems against Distributed Denial of Service (DDoS) attacks, ensuring high availability.',
        linkTo: '/solutions/anti-ddos',
        icon: Shield
        },
        {
        title: 'IPSec',
        description: 'Encryption and security for site-to-site Virtual Private Network (VPN) connections, protecting data transmitted between branches.',
        linkTo: '/solutions/ipsec',
        icon: Lock
        },
        {
        title: 'IPS/IDS',
        description: 'Real-time network intrusion detection and prevention, proactively defending against threats.',
        linkTo: '/solutions/ids-ips',
        icon: Eye
        }
    ];

    // Mảng dữ liệu cho Products
    const productsData = [
        {
        title: 'HPC Platforms',
        description: 'Advanced high-performance computing platforms, supporting a wide range of scientific and engineering applications.',
        linkTo: '/products/hpc-platforms',
        icon: Cpu
        },
        {
        title: 'Networking Devices',
        description: 'Specialized networking equipment for enterprises, ensuring stable connectivity and high speeds.',
        linkTo: '/products/networking-devices',
        icon: Share2
        },
        {
        title: 'Cyber Security',
        description: 'Comprehensive cybersecurity solutions, protecting digital infrastructure from potential threats.',
        linkTo: '/products/cyber-security',
        icon: CheckCircle
        },
        {
        title: 'Cryptography',
        description: 'Encryption and data security technology, ensuring information integrity and confidentiality.',
        linkTo: '/products/cryptography',
        icon: Key
        }
    ];

    return (

        <div className={styles.homeContainer}>
            {/* 1. Video intro */}
            <div className={styles.pageTitle}>
                <video autoPlay muted loop playsInline preload="auto" className={styles.videoBackground}>
                    <source src={introVideo} type="video/mp4" />
                </video>
            </div>

            {/* 2. What we do */}
            <section className={styles.whatWeDoSection}>
                <div className={styles.container}>
                    <h1 className={styles.sectionTitle}>What we do?</h1>
                    <p className={styles.introText}>
                        <span style={{color: 'var(--primary-color)'}}>Acronics Solutions</span> Inc provides products and solutions in Cybersecurity, Network security, as well as network infrastructure equipments and High-performance Computing systems based on MPSoC FPGA technology. Our solutions enhance processing performance, optimize energy efficiency, and reduce the total cost of ownership for enterprises.
                    </p>
                    <hr className={styles.divider} />
                </div>
            </section>
            {/* 3. Our Solutions Section */}
            <section className={styles.solutionsSection}>
                <div className={styles.container}>
                    <h1 className={styles.sectionTitle}>Our Solutions</h1>
                    <div className={styles.cardGrid}>
                        {/* Sử dụng hàm map để tự động sinh ra 4 thẻ Card từ mảng dữ liệu */}
                        {solutionsData.map((item, index) => (
                        <ServiceCard 
                            key={index}
                            title={item.title}
                            description={item.description}
                            linkTo={item.linkTo}
                            icon={item.icon}
                        /> ))}
                     </div>
                </div>
            </section>
            {/* 4. Our Products Section */}
            <section className={styles.productsSection}>
                <div className={styles.container}>
                    <h1 className={styles.sectionTitle}>Our Products</h1>
                    <div className={styles.cardGrid}>
                        {productsData.map((item, index) => (
                        <ServiceCard 
                            key={index}
                            title={item.title}
                            description={item.description}
                            linkTo={item.linkTo}
                            icon={item.icon}
                        />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;