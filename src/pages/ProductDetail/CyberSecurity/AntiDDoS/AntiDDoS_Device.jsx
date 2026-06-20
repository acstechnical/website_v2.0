import React, { useEffect, useState } from 'react';
import styles from './AntiDDoS_Device.module.css';

import PageTitle from '../../../../components/Layout/PageTitle/PageTitle';
import ServiceCard_3 from '../../../../components/UI/ServiceCard_3/ServiceCard_3';
import FeatureItem from '../../../../components/UI/FeatureItem/FeatureItem';
import AdvantageCard from '../../../../components/UI/AdvantageCard/AdvantageCard';
import PrevPageBtn from '../../../../components/UI/PrevPageBtn/PrevPageBtn';

import imgBg from "../../../../assets/image/cyber_security/cyber-security_bg.webp";
import antiDDoS_sample from "../../../../assets/image/ProductDetail/AntiDDoSDevice/ddos_sample_01.png";
import antiDDoS_spec from "../../../../assets/image/ProductDetail/AntiDDoSDevice/Acronics_Sysnef-Def_Tech_Spec.pdf";
import { FileText, Crosshair, Shield, Activity, Link2, TrendingUp, Clock, Cpu, Layers, Bell, Link } from 'react-feather';

import guiDashboard from "../../../../assets/image/cyber_security/Dashboard_DDoS.png";
import guiMonitor from "../../../../assets/image/cyber_security/monitor.png";
import guiAnalyze from "../../../../assets/image/cyber_security/analyze.png";
import guiDevice from "../../../../assets/image/cyber_security/Device_Manager.png";

const AntiDDoS = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        document.title = "ACS Network Security Device | Acronics Solutions";
    }, []);

    const [activeTab, setActiveTab] = useState(0);
    // State cho cơ chế zoom ảnh
    const [zoomed, setZoomed] = useState(false);

    const guiData = [
        {
            id: 0,
            label: "Dashboard",
            image: guiDashboard,
            title: "Real-Time DDoS Protection Dashboard",
            description: "A centralized dashboard providing real-time visibility into network traffic and DDoS mitigation status. Monitor incoming bandwidth, packet rates, dropped traffic, and protocol distribution, while visual charts highlight ongoing attack patterns and system responses."
        },
        {
            id: 1,
            label: "Monitoring",
            image: guiMonitor,
            title: "Advanced Attack Detection Monitor",
            description: "A detailed monitoring panel designed to detect and visualize various network attack types in real time, including SYN Flood, UDP Flood, ICMP Flood, fragment attacks, and more. Each module displays live packet rates, throughput, and attack status to help administrators quickly identify and respond to threats."
        },
        {
            id: 2,
            label: "Analyze",
            image: guiAnalyze,
            title: "Network Analytics",
            description: "This interface showcases detailed network traffic analytics, highlighting processed, received, and dropped traffic data. The graph provides insights into traffic trends, IP address activity, and attack detection, with visual markers distinguishing normal versus attack traffic patterns. The traffic trend section breaks down various protocols (TCP, UDP, HTTP, etc.) and highlights network anomalies such as SYN Floods and DNS Floods."
        },
        {
            id: 3,
            label: "Device Manager",
            image: guiDevice,
            title: "Device Performance & System Management",
            description: "A comprehensive device management interface that displays system health metrics such as CPU usage, memory consumption, disk utilization, and temperature. Administrators can monitor performance trends and manage system operations, including device resets and uptime tracking."
        }
    ];

    return (
        <div>
            {/* 1. Page Title */}
            <PageTitle title="ACS Network Security Device" imgSrc={imgBg} />
            <div className={styles.container}>
                {/* 2. Overview Section */}
                <section className={styles.overviewSection}>
                    <div className={styles.overviewContent}>
                        <h1 className={styles.title}>ACS Network Security Device</h1>
                        <p className={styles.description} style={{ fontStyle: 'italic' }}>
                            High-Performance FPGA/ASIC-Based Anti-DDoS Defender
                        </p>
                        <h2 className={styles.sectionTitle}>The need for a DDoS defense solution</h2>
                        <p className={styles.text}>
                            Modern DDoS attacks are growing in both scale and complexity, exploiting the rapid expansion of the Internet of Things (IoT) and the availability of attack tools capable of generating traffic reaching hundreds of gigabits per second (Gbps).
                        </p>
                        <p className={styles.text}>
                            Attackers increasingly employ multi-vector techniques, combining multiple attack methods at different protocol layers, which makes detection and mitigation significantly more challenging.
                        </p>
                        <p className={styles.text}>
                            This escalating threat environment requires an adaptive, high-performance security solution that can effectively detect and mitigate DDoS attacks of varying intensity and form.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={antiDDoS_sample} alt="ACS Anti-DDoS Device" />
                        <a href={antiDDoS_spec} target="_blank" rel="noopener noreferrer" className={styles.specButton}>
                            <FileText size={20} />
                            <span>View Anti-DDoS Specification PDF</span>
                        </a>
                    </div>
                </section>

                {/* 3. Solution Section */}
                <section className={styles.solutionSection}>
                    <h2 className={styles.sectionTitle}>FPGA/ASIC-Based DDoS defender solution</h2>
                    <p className={styles.text}>
                        The ACS DDoS defender leverages FPGA/ASIC-based hardware acceleration to deliver real-time, parallel packet processing at the network edge, ensuring early detection and mitigation of high-bandwidth DDoS attacks.
                    </p>
                    <p className={styles.text}>
                        This hardware-driven approach provides superior detection speed, low latency, and robust defense capabilities compared to traditional software-based systems.
                    </p>
                </section>

                {/* 4. Core Features */}
                <section className={styles.coreSection}>
                    <h2 className={styles.sectionTitle}>Core Features</h2>
                    <div className={styles.coreFeaturesGrid}>
                        <ServiceCard_3
                            icon={Crosshair}
                            title="1. DDoS attack detection"
                            description={[
                                "Detects attacks based on traffic thresholds and packet attribute sets per IP, identifying anomalies indicative of potential attacks.",
                                "Supports detection of multiple attack types:",
                                "- Bandwidth attacks: UDP Flood, ICMP Flood, etc.",
                                "- Protocol attacks: SYN Flood, etc.",
                                "- Application layer attacks: HTTP Flood, HTTPs Flood, Slowloris, etc.",
                                "- Detection latency: Under 1 second from the onset of an attack."
                            ]}
                        />
                        <ServiceCard_3
                            icon={Shield}
                            title="2. DDoS attack mitigation"
                            description={[
                                "Implements challenge-response mechanisms to block malicious traffic while maintaining uninterrupted service for legitimate users.",
                                "Bandwidth limiting to protect critical resources.",
                                "Configurable Whitelist / Blacklist for filtering traffic from suspicious or verified sources."
                            ]}
                        />
                        <ServiceCard_3
                            icon={Activity}
                            title="3. DDoS attack monitoring"
                            description={[
                                "Real-time attack monitoring dashboard providing:",
                                "- Source IP details and bandwidth usage statistics.",
                                "- Attack type, duration, and mitigation status.",
                                "- Real-time email alert notifications for administrators upon detection."
                            ]}
                        />
                    </div>
                </section>

                {/* 5. GUI Showcase với cơ chế Zoom */}
                <section className={styles.guiSection}>
                    <h2 className={styles.sectionTitle}>GUI Showcase</h2>
                    <div className={styles.guiGrid}>
                        <div className={styles.guiDisplayCard}>
                            <div className={styles.tabBar}>
                                {guiData.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            <div className={styles.tabContent} key={activeTab}>
                                <img
                                    src={guiData[activeTab].image}
                                    alt={guiData[activeTab].label}
                                    className={styles.guiImage}
                                    style={{ cursor: 'zoom-in' }}
                                    onClick={() => setZoomed(true)}
                                />
                                
                                {zoomed && (
                                    <div className={styles.zoomOverlay} onClick={() => setZoomed(false)}>
                                        <img
                                            src={guiData[activeTab].image}
                                            alt={guiData[activeTab].label}
                                            className={styles.zoomedImage}
                                            onClick={e => e.stopPropagation()}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={styles.guiInfo} key={`info-${activeTab}`}>
                            <h3 className={styles.guiInfoTitle}>{guiData[activeTab].title}</h3>
                            <p className={styles.descriptionText}>
                                {guiData[activeTab].description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Outstanding Features */}
                <section className={styles.outstandingSection}>
                    <h2 className={styles.sectionTitle}>Outstanding Features</h2>
                    <div className={styles.outstandingFeaturesGrid}>
                        <FeatureItem
                            Icon={Link2}
                            title="Easy system integration"
                            descriptions="Seamlessly integrates into existing network infrastructures using FPGA/ASIC hardware acceleration for real-time packet processing without bottlenecking performance."
                        />
                        <FeatureItem
                            Icon={TrendingUp}
                            title="Comprehensive High-Performance solution"
                            descriptions={[
                                "Provides complete multi-layer protection (Layer 2/3/6/7) against:",
                                "- Bandwidth-based and protocol-level attacks.",
                                "- Application-layer threats (HTTP/HTTPs).",
                                "- FPGA acceleration ensures precise, high-speed mitigation of large-scale traffic."
                            ]}
                        />
                        <FeatureItem
                            Icon={Activity}
                            title="Optimized management and monitoring"
                            descriptions={[
                                "Centralized monitoring interface with full attack visibility and event tracking.",
                                "Automated real-time alerts and email notifications for prompt response.",
                                "Simplified configuration to ensure continuous network protection."
                            ]}
                        />
                    </div>
                </section>

                {/* 7. System Advantages */}
                <section className={styles.advantagesSection}>
                    <h2 className={styles.sectionTitle}>System Advantages</h2>
                    <div className={styles.advantagesGrid}>
                        <AdvantageCard iconName={Clock} text="Hardware-based real-time DDoS detection (<1 second)" />
                        <AdvantageCard iconName={Cpu} text="FPGA/ASIC acceleration for ultra-low latency and high throughput" />
                        <AdvantageCard iconName={Layers} text="Multi-layer protection: Network (L2/3) + Application (L6/7) defense" />
                        <AdvantageCard iconName={Bell} text="Centralized management and remote alerting via email" />
                        <AdvantageCard iconName={Link} text="Easy integration into existing network infrastructures" />
                    </div>
                </section>

                <PrevPageBtn linkTo="/products/cyber-security" text="See more of our cybersecurity products" />
            </div>
        </div>
    );
};

export default AntiDDoS;