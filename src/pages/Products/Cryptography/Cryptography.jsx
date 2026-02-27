import { useEffect } from "react";
import PageTitle from "../../../components/Layout/PageTitle/PageTitle";
import styles from './Cryptography.module.css';
import ModuleCard from "./components/ModuleCard/ModuleCard";
import AccordionModule from "./components/AccordionModule/AccordionModule";

import cryptographyImg from '../../../assets/image/cryptography/crypto_bg.webp';
import firewallImg from '../../../assets/image/cryptography/firewall.png';
import firewall_thr_1 from '../../../assets/image/cryptography/firewall_thr_1.png';
import firewall_thr_2 from '../../../assets/image/cryptography/firewall_thr_2.png';
import firewall_thr_3 from '../../../assets/image/cryptography/firewall_thr_3.png';

const Cryptography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Đổi tiêu đề tab trình duyệt
    document.title = "Cryptography | Acronics Solutions"; 
  }, []);

  const corePolicies = [
    "Monitoring policies based on User ID and Group ID → ACL",
    "Cybersecurity: IPSec/TLS combined with hardware-software co-design to ensure throughput for real-time applications",
    "Network protection: Built-in DDoS mitigation at Layer 3/4 and Layer 6/7",
    "Detection of viruses/malware embedded (hidden) within network traffic",
    "DPI-based traffic analysis for QoS requirements and industrial control protocols (SCADA)"
  ];

  const operationalFlows = [
    {
      title: "Content-ID",
      description: "Detects and prevents threats such as malware, unauthorized data, files, and web content",
      imgSrc: firewall_thr_1
    },
    {
      title: "User-ID",
      description: "Controls all group and user information within the network using the Active Directory data repository",
      imgSrc: firewall_thr_2
    },
    {
      title: "App-ID",
      description: "Accurately identifies applications passing through the network using various techniques such as application signatures, port decryption, protocols, and inspection",
      imgSrc: firewall_thr_3
    }
  ];

  return (
    <div>
      {/* PAGE TITLE */}
      <PageTitle title="CRYPTOGRAPHY" imgSrc={cryptographyImg} />

      {/* content */}
      <div className={styles.container}>
      {/* Next generation SCADA Firewall structure */}
        <section className={styles.scadaSection}>
          <div className={styles.scadaContent}>
            <h2 className={styles.sectionTitle}>Next generation SCADA Firewall structure</h2>
            <div className={styles.scadaGrid}>
              <ModuleCard title="Module Control Plane Processor" />
              <ModuleCard title="Module Network Processor" />
              <ModuleCard title="Module Multi-Core Security Processor" />
              <ModuleCard title="Module Signature Match Engine - DPI" />
              <ModuleCard title="Module SCADA & QoS" />
            </div>
          </div>
          <div className={styles.scadaImageWrapper}>
            <img src={firewallImg} alt="SCADA Firewall" className={styles.scadaImage} />
          </div>
          
        </section>

      {/* Core Architecture: Control & Management Policies
 và Operational Data Flow */}
        <section className={styles.archContainer}>
          <div className={styles.archGrid}>
            
            {/* Cột bên trái: Core Architecture */}
            <div className={styles.archColumn}>
              <h2 className={styles.archTitle}>Core Architecture: Control & Management Policies</h2>
              <div className={styles.policyList}>
                {corePolicies.map((text, index) => (
                  <div key={index} className={styles.policyCard}>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Cột bên phải: Operational Data Flow */}
            <div className={styles.archColumn}>
              <h2 className={styles.archTitle}>Operational Data Flow</h2>
              <div className={styles.flowList}>
                {operationalFlows.map((flow, index) => (
                  <div key={index} className={styles.flowCard}>
                    <div className={styles.flowText}>
                      <strong>{flow.title}:</strong> {flow.description}
                    </div>
                    <div className={styles.flowImage}>
                      <img src={flow.imgSrc} alt={flow.title} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div> 

    </div>
  );
}

export default Cryptography;