import { useEffect } from "react";
import styles from "./CyberSecurity.module.css";
import PageTitle from "../../../components/Layout/PageTitle/PageTitle";
import ProductList from "../../../components/UI/ProductList/ProductList";


import antiddos_device_img from "../../../assets/image/cyber_security/antiddos_device.png"
import imgBg from "../../../assets/image/cyber_security/cyber-security_bg.jpg";
const CyberSecurity = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        document.title = "Cyber Security - Acronics";
    }, []);
    
    const data = [
        {
        id: "anti-ddos-device",  
        linkTo: '/products/cyber-security/anti-ddos-device',
        title: 'ANTI-DDoS DEVICE - DDoS DEFENDER',
        image: antiddos_device_img,
        features: [
            'DDoS Attack Detection:',
            '- Detect attacks based on thresholds and packet attributes per IP to identify anomalies and recognize attacks.',
            '- Detectable attack types: Bandwidth attacks: UDP/ICMP Flood,...; Protocol attacks: SYN Flood,..; Application layer attacks: HTTP Flood, HTTPS Flood, Slowloris,..',
            '- Attack detection time under 1 second.',
            'DDoS Attack Mitigation:',
            '- Implement Challenge-Response mechanism to block attack packets and ensure service for legitimate customers; Bandwidth limiting.',
            'DDoS Attack Monitoring:',
            '- Monitor ongoing attacks: Detailed attack information (IP details, bandwidth info, attack type)'
            ]
        }
    ];

    return (
        <div>
            {/* 1. Page title */}
            <PageTitle title="CYBER SECURITY" imgSrc={imgBg} />
            {/* 2. Content section */}
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