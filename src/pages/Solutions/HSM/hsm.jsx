import { useEffect } from 'react';
import PageTitle from '../../../components/Layout/PageTitle/PageTitle';
import styles from './hsm.module.css';
import imgBg from '../../../assets/image/hsm/hsm-bg.jpg';

// Import các components
import ServiceCard_3 from '../../../components/UI/ServiceCard_3/ServiceCard_3';
import AdvantageCard from '../../../components/UI/AdvantageCard/AdvantageCard';
import device from '../../../assets/image/hsm/hsm-device.jpg';
import hsm_pdf from '../../../assets/image/hsm/ACS_HSM_VN_5_5_2025_H04.pdf';

// Import TẤT CẢ các icon từ react-feather
import { 
    Key, Cpu, FileText, Shield, Grid, CheckCircle, 
    Lock, Zap, Award, Database, Edit3, Cloud, Link, Monitor 
} from 'react-feather';

const HSM = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Đổi tiêu đề tab trình duyệt
        document.title = "HSM | Acronics Solutions";
    }, []);

    return (
        <div>
            {/* 1. Page title */}
            <PageTitle title="HSM – Hardware Security Module" imgSrc={imgBg} />

                        {/* 2. Overview - giống HPC */}
                        <section className={styles.overviewDesc}>
                                <div className={styles.container}>
                                    <div className={styles.hsmGrid}>
                                        {/* Cột trái: mô tả */}
                                        <div className={styles.hsmIntroLeft}>
                                            <h1 className={styles.sectionTitle}>HSM – Hardware Security Module</h1>
                                            <p className={styles.introText}>
                                                <span style={{color: 'var(--primary-color)'}}>Hardware Security Module (HSM)</span> is a dedicated security device designed to generate, store, and manage cryptographic keys within a highly secure environment. HSMs protect sensitive data against unauthorized access, key theft, and cyber threats.
                                            </p>
                                            <p className={styles.introText}>
                                                The device performs encryption, decryption, digital signing, and authentication operations with high performance, meeting strict security requirements for enterprises, banking systems, data centers, and critical infrastructure.
                                            </p>
                                            <p className={styles.introText}>
                                                <span style={{color: 'var(--primary-color)'}}>Acronics HSM</span> provides a secure, scalable, and high-performance solution for protecting digital assets, supporting compliance, and enabling trusted transactions in modern IT environments.
                                            </p>
                                        </div>
                                        {/* Cột phải: ảnh thiết bị và nút PDF */}
                                        <div className={styles.hsmIntroRight}>
                                            <img
                                                src={device}
                                                alt="Acronics HSM Device"
                                                className={styles.hsmImage}
                                            />
                                            <div className={styles.hsmBtnGroup}>
                                                <a
                                                    href={hsm_pdf}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.hsmBtn}
                                                >
                                                    View HSM Specification PDF
                                                </a>
                                                {/* <a
                                                    href={hsm_pdf}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.hsmBtn}
                                                >
                                                    Xem thông số kỹ thuật HSM
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>

            {/* 3. Key Features */}
            <section className={styles.featuresSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Key Features</h2>
                    <div className={styles.featuresGrid}>
                        <ServiceCard_3
                            Icon={Key}
                            title="Secure cryptographic key generation and management"
                        />
                        <ServiceCard_3
                            Icon={Cpu}
                            title="High-speed encryption and decryption processing"
                        />
                        <ServiceCard_3
                            Icon={FileText}
                            title="Digital signature and electronic authentication support"
                        />
                        <ServiceCard_3
                            Icon={Shield}
                            title="Protection of secret keys from unauthorized access"
                        />
                        <ServiceCard_3
                            Icon={Grid}
                            title="Integration with PKI, VPN, SSL/TLS, and Data Center systems"
                        />
                        <ServiceCard_3
                            Icon={CheckCircle}
                            title="Compliance with international security standards such as FIPS 140-2/140-3"
                        />
                    </div>
                </div>
            </section>

            {/* 4. Role of HSM */}
            <section className={styles.roleSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Role of HSM</h2>
                    <p className={styles.introText}>
                        HSM acts as the cryptographic security core of an entire system by:
                    </p>
                    <div className={styles.roleGrid}>
                        {/* Truyền trực tiếp Component Icon vào AdvantageCard thay vì string */}
                        <AdvantageCard
                            Icon={Lock}
                            text="Protecting digital assets and sensitive information"
                        />
                        <AdvantageCard
                            Icon={Shield}
                            text="Enhancing cybersecurity and data protection"
                        />
                        <AdvantageCard
                            Icon={CheckCircle}
                            text="Ensuring data integrity and authentication"
                        />
                        <AdvantageCard
                            Icon={Zap}
                            text="Accelerating cryptographic operations"
                        />
                        <AdvantageCard
                            Icon={Award} 
                            text="Supporting enterprise compliance and security standards"
                        />
                    </div>
                </div>
            </section>

            {/* 5. Applications */}
            <section className={styles.applicationsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Applications</h2>
                    
                    <div className={styles.appGrid}>
                        {[
                            { Icon: Database, title: "Banking and financial systems" },
                            { Icon: Edit3, title: "Digital signatures and certificate authorities" },
                            { Icon: Key, title: "Public Key Infrastructure (PKI)" },
                            { Icon: Lock, title: "VPN/IPSec and SSL/TLS security" },
                            { Icon: Cloud, title: "Data centers and cloud computing" },
                            { Icon: Link, title: "Blockchain and digital transaction security" },
                            { Icon: Monitor, title: "Enterprise and industrial cybersecurity systems" }
                        ].map((app, index) => (
                            <div key={index} className={styles.appCard}>
                                <div className={styles.appIconWrapper}>
                                    <app.Icon size={22} />
                                </div>
                                <h3 className={styles.appTitle}>{app.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HSM;