import { useEffect } from "react";
import styles from "./CyberSecurity.module.css";
import PageTitle from "../../../components/Layout/PageTitle/PageTitle";
import ProductList from "../../../components/UI/ProductList/ProductList";


import antiddos_device_img from "../../../assets/image/cyber_security/antiddos_device.png"
import imgBg from "../../../assets/image/cyber_security/cyber-security_bg.webp";
const CyberSecurity = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        document.title = "Cyber Security | Acronics";
    }, []);
    
    const data = [
        {
            id: "anti-ddos-device",  
            linkTo: '/products/cyber-security/anti-ddos-device',
            title: 'Anti-DDoS Device - DDoS Defender', // Chuyển từ ALL CAPS sang Title Case để thanh thoát hơn
            image: antiddos_device_img,
            features: [
                'DDoS attack detection:',
                'Detects attacks based on thresholds and packet attributes per IP to identify anomalies and recognize attacks.',
                'Supports detection of bandwidth attacks (UDP/ICMP Flood), protocol attacks (SYN Flood), and application layer attacks (HTTP/HTTPs Flood, Slowloris).',
                'Attack detection time is optimized to under 1 second.',
                'DDoS attack mitigation:',
                'Implements challenge-response mechanisms to block malicious packets while ensuring service for legitimate users.',
                'Integrated bandwidth limiting and traffic shaping.',
                'DDoS attack monitoring:',
                'Real-time monitoring of ongoing attacks with detailed insights (IP details, bandwidth metrics, and attack types).'
            ]
        }
    ];

    return (
        <div>
            {/* 1. Page Title */}
            <PageTitle title="Cyber Security" imgSrc={imgBg} />
            
            {/* 2. Content Section */}
            <div className={styles.contentSection}>
                <h1 className={styles.sectionTitle}>Our Cyber Security Solutions</h1>
                <ProductList 
                    data={data} 
                />
            </div>
        </div>
    );
};

export default CyberSecurity;