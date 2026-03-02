import React, { useEffect} from 'react';
import styles from './AntiDDoS_Device.module.css';

import PageTitle from '../../../../components/Layout/PageTitle/PageTitle';
import ServiceCard_3 from '../../../../components/UI/ServiceCard_3/ServiceCard_3';
import FeatureItem from '../../../../components/UI/FeatureItem/FeatureItem';
import AdvantageCard from '../../../../components/UI/AdvantageCard/AdvantageCard';
import PrevPageBtn from '../../../../components/UI/PrevPageBtn/PrevPageBtn';

import imgBg from "../../../../assets/image/cyber_security/cyber-security_bg.webp";
import antiDDoS_sample from "../../../../assets/image/ProductDetail/AntiDDoSDevice/ddos_sample_01.png";
import antiDDoS_spec from "../../../../assets/image/ProductDetail/AntiDDoSDevice/Acronics_Sysnef-Def_Tech_Spec.pdf";
import { FileText, Crosshair, Shield, Activity, Link2, TrendingUp, Sliders, Clock, Cpu, Layers, Bell, Link } from 'react-feather';

const AntiDDoS = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Đổi tiêu đề tab trình duyệt
        document.title = "ACS Network Security Device | Acronics Solutions"; 
    }, []);

    return (
        <div>
            {/* 1. Page title */}
            <PageTitle title="ACS Networking Security Device" imgSrc={imgBg} />
            <div className={styles.container}>
                {/* 2. Title and overview section */}
                <section className={styles.overviewSection}>
                    <div className={styles.overviewContent}>
                        <h1 className={styles.title}>ACS Network Security Device</h1>
                        <p className={styles.description} style={{fontStyle: 'italic'}}>
                            High-Performance FPGA/ASIC-Based Anti-DDoS Defender
                        </p>
                        <h2 className={styles.sectionTitle}>The need for a DDoS Defense Solution</h2>
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
                        <img src={antiDDoS_sample} alt="ACS Anti-DDoS Device Sample"/>
                        <a href={antiDDoS_spec} target="_blank" rel="noopener noreferrer" className={styles.specButton}>
                            <FileText size={20} />
                            <span>View Anti-DDoS specification PDF</span>
                        </a> 
                    </div>
                </section>

                {/* 3.FPGA/ASIC-Based DDoS Defender Solution */}
                <section className={styles.solutionSection}>
                    <h2 className={styles.sectionTitle}>FPGA/ASIC-Based DDoS Defender Solution</h2>
                    <p className={styles.text}>
                        The ACS DDoS Defender leverages FPGA/ASIC-based hardware acceleration to deliver real-time, parallel packet processing at the network edge, ensuring early detection and mitigation of high-bandwidth DDoS attacks.
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
                            title="1. DDoS Attack Detection"
                            description={[
                                "Detects attacks based on traffic thresholds and packet attribute sets per IP, identifying anomalies indicative of potential attacks.",
                                "Supports detection of multiple attack types:",
                                "- Bandwidth Attacks: UDP Flood, ICMP Flood, etc.",
                                "- Protocol Attacks: SYN Flood, etc.",
                                "- Application Layer Attacks: HTTP Flood, HTTPS Flood, Slowloris, etc.",
                                "- Detection latency: under 1 second from the onset of attack."
                            ]}
                        />
                        <ServiceCard_3
                            icon={Shield}
                            title="2. DDoS Attack Mitigation"
                            description={[
                                "Implements Challenge - Response mechanisms to block malicious traffic while maintaining uninterrupted service for legitimate users.",
                                "Bandwidth limiting to protect critical resources.",
                                "Configurable White List / Black List for filtering traffic from suspicious or verified sources.",
                            ]}
                        />
                        <ServiceCard_3
                            icon={Activity}
                            title="3. DDoS Attack Monitoring"
                            description={[
                                "Real-time attack monitoring dashboard providing:",
                                "- Source IP details",
                                "- Bandwidth usage statistics",
                                "- Attack type and status information",
                                "- Email alert notifications for administrators upon detection of attacks."
                            ]}
                        />
                    </div>
                </section>

                {/* 5.Outstanding Features */}
                <section className={styles.outstandingSection}>
                    <h2 className={styles.sectionTitle}>Outstanding Features</h2>
                    <div className={styles.outstandingFeaturesGrid}>
                        <FeatureItem
                            Icon={Link2}
                            title="Easy System Integration"
                            descriptions="Leverages FPGA/ASIC hardware acceleration for real-time, parallel packet processing at the network edge, ensuring early detection and mitigation of high-bandwidth DDoS attacks."
                        />
                        <FeatureItem
                            Icon={TrendingUp}
                            title="Comprehensive High-Performance Solution"
                            descriptions={[
                                "Provides complete multi-layer protection (Layer 2/3/6/7) against:",
                                "- Bandwidth-based attacks",
                                "- Protocol-level attacks",
                                "- Application-layer attacks",
                                "- FPGA acceleration ensures high-speed handling of large-scale traffic and early attack warnings with precise, efficient mitigation."
                            ]}
                        />
                        <FeatureItem
                            Icon={Activity}
                            title="Optimized Management and Monitoring"
                            descriptions={[
                                "Centralized monitoring interface with full attack visibility and event tracking.",
                                "Automated real-time alerts and email notifications to network administrators.",
                                "Simplified configuration and maintenance, ensuring continuous network protection."
                            ]}
                        />
                    </div>
                </section>

                {/* 5. System Advantages */}
                <section className={styles.advantagesSection}>
                    <h2 className={styles.sectionTitle}>System Advantages</h2>
                    <div className={styles.advantagesGrid}>
                        <AdvantageCard
                            iconName={Clock}
                            text="Hardware-based real-time DDoS detection (<1 second)"
                        />
                        <AdvantageCard
                            iconName={Cpu}
                            text="FPGA/ASIC acceleration for ultra-low latency and high throughput"
                        />
                        <AdvantageCard
                            iconName={Layers}
                            text="Multi-layer protection: Layer 2/3 network + Layer 6/7 application defense"
                        />
                        <AdvantageCard
                            iconName={Bell}
                            text="Centralized management and remote alerting via email"
                        />
                        <AdvantageCard
                            iconName={Link}
                            text="Easy integration into existing network infrastructures"
                        />
                    </div>
                </section>

                {/* PrevPageBtn */}
                <PrevPageBtn linkTo="/products/cyber-security" text="See more our cybersecurity products"/>
            </div>
        </div>
    );
};

export default AntiDDoS;