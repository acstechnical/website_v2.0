import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from "./SdnSwitch.module.css";
import PageTitle from '../../../components/Layout/PageTitle/PageTitle';
import ServiceCard_3 from '../../../components/UI/ServiceCard_3/ServiceCard_3';
import FeatureItem from '../../../components/UI/FeatureItem/FeatureItem';
import AdvantageCard from '../../../components/UI/AdvantageCard/AdvantageCard/AdvantageCard';

import backgroundVideo from "../../../assets/video/networking-devices_product_background.mp4";
import sdn_sample from "../../../assets/image/ProductDetail/SDN/SDN_sample_01.png";
import sdn_spec from "../../../assets/image/ProductDetail/SDN/sdn_spec.png";
import {Globe, Cpu, Activity, Grid, Sliders, Key, Code, TrendingUp, Monitor, Tool, Clock, Zap, Shield, Layers, ArrowLeft, FileText} from 'react-feather';
const SdnSwitch = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Đổi tiêu đề tab trình duyệt
        document.title = "ACS SDN - Switch on FPGA | Acronics Solutions"; 
    }, []);


    return (
        <div>
            {/* 1. Page title */}
            <PageTitle title="ACS SDN - Switch on FPGA" videoSrc={backgroundVideo} />

            {/* 2. overview section */}
            <section className={styles.overviewSection}>
                <div className={styles.container}>
                    <div className={styles.overviewContent}>
                        <h1 className={styles.title}>ACS SDN - Switch on FPGA</h1>
                        <p className={styles.description} style={{fontStyle: 'italic'}}>
                            Next-Generation Software-Defined Network Switch
                        </p>
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <p className={styles.text}>
                            The ACS SDN - Switch, built on advanced FPGA (Programmable Gate Array) technology, is a next-network switch designed for telecom providers, and centers adopting Software-Defined Networking (SDN).
                        </p>
                        <p className={styles.text}>
                            It delivers the full functionality of traditional Layer 2/ Layer 3 switches while supporting OpenFlow 1.3 and 1.4 dynamic network configuration, intelligent traffic and centralized management. Compared to software-based solutions, the ACS SDN - Switch offers significantly higher, energy efficiency, and security 
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={sdn_sample} alt="ACS SDN Switch"/>
                        <a href={sdn_spec} target="_blank" rel="noopener noreferrer" className={styles.specButton}>
                            <FileText size={20} />
                            <span>View SDN-Switch specification image</span>
                        </a>
                    </div>
                </div>
            </section>


            {/* combine */}
            <div className={styles.combinedSection}>
                {/* 3. Aplication section */}
                <section className={styles.applicationSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Applications</h2>
                        <ul>
                            <li className={styles.text}>Internet Service Providers (ISPs) and Telecom Networks</li>
                            <li className={styles.text}>Enterprise and Campus Networks</li>
                            <li className={styles.text}>Cloud and Data Center Infrastructure</li>
                            <li className={styles.text}>Research and Educational Networks</li>
                            <li className={styles.text}>Smart City and IoT Infrastructure Systems</li>
                        </ul>
                    </div>
                </section>

                {/* 4. Technical Highlights */}
                <section className={styles.technicalSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Technical Highlights</h2>
                        <ul>
                            <li className={styles.text}>Architecture: FPGA-based SDN switch supporting OpenFlow 1.3 / 1.4</li>
                            <li className={styles.text}>Network Layers: Layer 2 / Layer 3 switching capabilities</li>
                            <li className={styles.text}>Performance: Hardware-accelerated packet processing with Multi-Core optimization</li>
                            <li className={styles.text}>Management Interface: Open SDN planes with centralized control</li>
                            <li className={styles.text}>Virtualization: Network and storage virtualization for modern data centers</li>
                            <li className={styles.text}>Power Management: Dynamic active/inactive function control for energy efficiency</li>
                        </ul>
                    </div>
                </section>
            </div>

            

            {/* 5. Key Features */}
            <section className={styles.featuresSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Key Features</h2>
                    <div className={styles.featuresGrid}>
                        <ServiceCard_3
                            Icon={Globe}
                            title="Compliance with International Standards"
                            description="Fully compatible with global telecommunications network standards."
                        />
                        <ServiceCard_3
                            Icon={Cpu}
                            title="Integrated SDN Controller Support"
                            description="Works seamlessly with OpenFlow-based SDN controllers and OF-DPA environments."
                        />
                        <ServiceCard_3
                            Icon={Activity}
                            title="Real-Time Remote Operation"
                            description="Enables real-time network configuration, monitoring, and optimization."
                        />
                        <ServiceCard_3
                            Icon={Sliders}
                            title="Adaptive Traffic Control"
                            description="Dynamically manages and prioritizes traffic for efficient utilization."
                        />
                        <ServiceCard_3
                            Icon={Grid}
                            title="Open and Extensible Design"
                            description="Based on open SDN standards for easy integration and long-term scalability."
                        />
                    </div>
                </div>
            </section>

            {/* 6. Outstanding Features */}
            <section className={styles.outstandingSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Outstanding Features</h2>
                    <div className={styles.featuresGrid}>
                        <FeatureItem
                            iconName={Key}
                            title="Mastery of Core Technology"
                            descriptions='Full in-house design of integrated circuits, core logic, control software, and custom PCB boards. Guaranteed security, no hidden code, no backdoors.'
                        />
                        <FeatureItem
                            iconName={Code}
                            title='Proprietary Algorithm Development'
                            descriptions='Hardware-implemented OpenFlow algorithms on FPGA with proprietary management policies competing with software-based SDN platforms.'
                        />
                        <FeatureItem
                            iconName={TrendingUp}
                            title='High-Performance Data Throughput'
                            descriptions='Accelerated high-speed data processing using hardware-optimized logic and Multi-Core solutions.'
                        />
                        <FeatureItem
                            iconName={Monitor}
                            title='Advanced System Management'
                            descriptions='Compatible with network control and monitoring applications for complete operational visibility.'
                        />
                        <FeatureItem
                            iconName={Tool}
                            title='Proactive Maintenance and Upgrades'
                            descriptions='Flexible to feature expansion, standard updates, and hardware upgrades on demand.'
                        />
                    </div>
                </div>
            </section>

            {/* 7. System Advantages */}
            <section className={styles.advantagesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>System Advantages</h2>
                    <div className={styles.advantagefeatures}>
                        <AdvantageCard
                            iconName={Clock}
                            text="Absolute security with complete in-house design and no third-party dependencies."
                        />
                        <AdvantageCard
                            iconName={Zap}
                            text="High performance with hardware-accelerated processing and optimized algorithms."
                        />
                        <AdvantageCard
                            iconName={Shield}
                            text="Complete autonomy with flexible maintenance and upgrade capabilities."
                        />
                        <AdvantageCard
                            iconName={Layers}
                            text="Complete autonomy with flexible maintenance and upgrade capabilities."
                        />
                    </div>
                </div>
            </section>

            {/* 8. Back to Products */}
            <section className={styles.backSection}>
                <div className={styles.container}>
                    <Link to="/products/networking-devices" className={styles.backButton}>
                        <ArrowLeft size={20} />
                        <span>See more our networking devices</span>
                    </Link>
                </div>
            </section>
                
        </div>
    );
}

export default SdnSwitch;