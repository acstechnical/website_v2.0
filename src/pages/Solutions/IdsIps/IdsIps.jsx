import {useEffect} from 'react';
import PageTitle from '../../../components/Layout/PageTitle/PageTitle';
import styles from './IdsIps.module.css';
import ServiceCard_2 from '../../../components/UI/ServiceCard_2/ServiceCard_2';
import FeatureItem from '../../../components/UI/FeatureItem/FeatureItem';
import ids_img from "../../../assets/image/idsips/ids.webp";
import ips_img from "../../../assets/image/idsips/ips.webp";
import ipds_bg from "../../../assets/image/idsips/ipds_bg.jpg";
import {Database, Activity, Eye, Search, Zap, MinusCircle, Clipboard, Layers} from "react-feather";
const IdsIps = () => {
    useEffect(() => {
        document.title = 'IDS/IPS Solutions - Your Company Name';
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            {/* 1. PageTitle */}
            <PageTitle title="Intrusion Detection and Prevention System" imgSrc={ipds_bg}/>
            <div className={styles.container}>
                {/* 2. What is IDS/IPS */}
                <section className={styles.introSection}>
                    <h2 className={styles.sectionTitle}>What is IDS/IPS?</h2>
                    <p className={styles.text}>Intrusion Detection System (IDS) and Intrusion Prevention System (IPS) are cybersecurity technologies that work together to detect and prevent malicious activities in networks. They play a crucial role in protecting networks against cyber threats such as malware, unauthorized access attempts, and denial-of-service (DoS) attacks.</p>

                    <div className={styles.idsContent}>
                        <div className={styles.content}>
                            <h3 className={styles.featureTitle}>Intrusion Detection System (IDS)</h3>
                            <ul className={styles.bulletList}>
                                <li>Intrusion Detection System (IDS) monitors network traffic to detect potential threats and suspicious activities, but it only alerts administrators and does not block traffic </li>
                                <li>IDS is usually placed outside the main traffic flow, analyzing mirrored copies of network data to avoid affecting network performance.</li>
                                <li>There are several types of IDS, including NIDS, HIDS, PIDS, APIDS, and Hybrid IDS.</li>
                                <li>Two common detection methods are signature-based detection (matching known attack patterns) and anomaly-based detection (identifying unusual behavior).</li>
                                <li>IDS works by comparing network activity with known patterns and detecting abnormal behavior in protocols and applications.</li>
                            </ul>
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src={ids_img} alt="IDS" />
                        </div>
                    </div>
                    <div className={styles.ipsContent}>
                        <div className={styles.imageWrapper}>
                            <img src={ips_img} alt="IPS" />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.featureTitle}>Intrusion Prevention System (IPS)</h3>
                            <ul className={styles.bulletList}>
                                <li>Intrusion Prevention System (IPS) is a security solution that monitors and actively blocks malicious traffic before it can enter the network.</li>
                                <li>IPS is placed directly in the network traffic path, allowing it to analyze and respond to threats in real time, unlike IDS which only monitors.</li>
                                <li>It can block attacks, drop malicious packets, block source IP addresses, reset connections, and send alerts.</li>
                                <li>IPS helps protect systems from vulnerability exploitation, often acting before security patches are applied, and is commonly integrated into next-generation firewalls, UTM devices, and cloud security services.</li>
                                <li>To reduce false positives, IPS uses signature-based, anomaly-based, and policy-based detection methods to distinguish real threats from normal traffic.</li>
                            </ul>
                        </div>
                    </div>
                        
                </section>
                {/* 4. How does IDS/IPS work? */}
                <section className={styles.howDoesWorkSection}>
                    <h2 className={styles.sectionTitle}>How does IDS/IPS work?</h2>
                    <p styles={styles.text}>IDS/IPS relies on a combination of three methods to identify and respond to security threats:</p>
                    <div className={styles.cardGrid}>
                        <ServiceCard_2
                            icon={Database}
                            title="Signature-based detection"
                            description="Compares network traffic to a database of known attack patterns. If a match is found, an alert is triggered or action is taken. While effective against known threats, this method struggles with new or evolving attack patterns."
                        />
                        <ServiceCard_2
                            icon={Activity}
                            title="Anomaly-based detection"
                            description="Establishes a baseline of normal network behavior and flags deviations that may indicate an attack. It is particularly useful for detecting zero-day exploits or advanced persistent threats (APTs)."
                        />
                        <ServiceCard_2
                            icon={Eye}
                            title="Behavioral analysis"
                            description="Uses machine learning and artificial intelligence to identify suspicious behavior that deviates from established norms, even if no known signature exists."
                        />
                    </div>
                    <p className={styles.text}>IDS/IPS inspects network packets in real time, analyzes traffic flows, and determines whether traffic is legitimate or malicious. If a potential threat is identified, IDS generates alerts, while IPS actively blocks or mitigates the threat.</p>
                </section>

                {/* 5. Why should I consider IDS/IPS? */}
                <section className={styles.whyConsiderSection}>
                    <h2 className={styles.sectionTitle}>Why should I consider IDS/IPS?</h2>
                    <p className={styles.text}>With cyber threats becoming more sophisticated and frequent, organizations must implement proactive security measures to protect their networks and sensitive data. IDS/IPS provides an essential layer of defense against a wide range of attacks, including:</p>
                    <ul className={styles.bulletList}>
                        <li>Malware infections: Detect and block malware before it can spread within the network.</li>
                        <li>Unauthorized access attempts: Identify and mitigate intrusion attempts by unauthorized users or malicious insiders.</li>
                        <li>Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS) attacks: Prevent attackers from overwhelming network resources and disrupting business operations.</li>
                        <li>Data exfiltration: Identify suspicious data transfer patterns that may indicate data breaches or insider threats.</li>
                        <li>Zero-day attacks: Detect anomalies and new attack patterns that traditional security solutions may miss.</li>
                    </ul>
                    <p className={styles.text}>Integrating IDS/IPS into a broader security strategy can significantly reduce the risk of data breaches, service disruptions, and financial losses caused by cyber threats.</p>
                </section>

                {/* 6.Benefits of IDS/IPS */}
                <section className={styles.benefitsSection}>
                    <h2 className={styles.sectionTitle}>Benefits of IDS/IPS</h2>
                    <p className={styles.text}>Implementing IDS/IPS provides numerous benefits, including:</p>
                    <div className={styles.benefitsGrid}>
                        <FeatureItem
                            iconName={Search}
                            title="Enhanced threat detection"
                            descriptions="Real-time monitoring and deep packet inspection to identify threats at an early stage."
                        />
                        <FeatureItem
                            iconName={Zap}
                            title="Automated threat response"
                            descriptions="Inline IPS solutions can take immediate action against threats, reducing the time it takes to mitigate risks."
                        />
                        <FeatureItem
                            iconName={MinusCircle}
                            title="Reduced attack surface"
                            descriptions="Helps minimize an organization's exposure to cyber threats by blocking malicious traffic and unauthorized access attempts."
                        />
                        <FeatureItem
                            iconName={Clipboard}
                            title="Compliance and regulatory requirements"
                            descriptions="Meets compliance mandates that require IDS/IPS implementation to protect sensitive data (e.g., PCI DSS, HIPAA, GDPR)."
                        />
                        <FeatureItem
                            iconName={Eye}
                            title="Network visibility and intelligence"
                            descriptions="Provides valuable insights into network traffic patterns, helping organizations identify vulnerabilities and improve their overall security posture."
                        />
                        <FeatureItem
                            iconName={Layers}
                            title="Scalability and integration"
                            descriptions="Integrate with Security Information and Event Management (SIEM) systems, firewalls, and other security tools to create a comprehensive security ecosystem."
                        />
                    </div>
                    <p className={styles.text}>IDS/IPS is an essential component of modern cybersecurity frameworks, helping organizations detect, prevent, and respond to cyber threats using advanced detection techniques and automated responses. Whether deployed inline or out-of-band, IDS/IPS plays a critical role in maintaining network integrity, compliance, and overall security resilience.</p>
                </section>
            </div>
        </div>
    );
}

export default IdsIps;