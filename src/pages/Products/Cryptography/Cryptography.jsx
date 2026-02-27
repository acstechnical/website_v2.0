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
import module_1_firewall from '../../../assets/image/cryptography/module_1_firewall.png';
import module_2_firewall_1 from '../../../assets/image/cryptography/module_2_firewall_1.png';
import module_2_firewall_2 from '../../../assets/image/cryptography/module_2_firewall_2.png';
import module_2_firewall_3 from '../../../assets/image/cryptography/module_2_firewall_3.png';
import module_2_firewall_4 from '../../../assets/image/cryptography/module_2_firewall_4.png';
import module_2_firewall_5 from '../../../assets/image/cryptography/module_2_firewall_5.png';
import module_3_firewall_1 from '../../../assets/image/cryptography/module_3_firewall_1.png';
import module_3_firewall_2 from '../../../assets/image/cryptography/module_3_firewall_2.png';
import module_3_firewall_3 from '../../../assets/image/cryptography/module_3_firewall_3.png';

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

        {/* Details of some main modules */}
        <section className={styles.detailsSection}>
          <h2 className={styles.sectionTitle}>Details of some main modules</h2>
          {/* --- Module 1 --- */}
          <AccordionModule title="Module 1 - Switch Fabric & Dataplane">
            <div className={styles.subSection}>
                <div className={styles.subContent}>
                  <div className={styles.subText}>
                    <h4>Structure</h4>
                    <ul>
                      <li>Layer 2/3: forwarding</li>
                      <li>QoS management</li>
                      <li>ARP</li>
                      <li>NAC</li>
                      <li>Router</li>
                    </ul>
                  </div>
                  <div className={styles.subImageWrapper}>
                    <img src={module_1_firewall} alt="Module 1" className={styles.subImage} />
                  </div>
                </div>
            </div>
          </AccordionModule>

          {/* --- Module 2 --- */}
          <AccordionModule title="Module 2 - Security: SSL/IPSec Architecture">
            {/* SSL/IPSec Architecture for Small and Medium Networks */}
            <h3 className={styles.subTitle}>SSL/IPSec Architecture for Small and Medium Networks</h3>
            <div className={styles.subSection}>
                <div className={styles.subContent}>
                  <div className={styles.subText}>
                    <h4>Data flows within the system</h4>
                  </div>
                  <div className={styles.subImageWrapper}>
                    <img src={module_2_firewall_1} alt="Module 2" className={styles.subImage} />
                  </div>
                </div>
            </div>
            <div className={styles.subSection}>
                <div className={styles.subContent}>
                  <div className={styles.subText}>
                    <h4>SSL/IPSec hardware model</h4>
                  </div>
                  <div className={styles.subImageWrapper}>
                    <img src={module_2_firewall_2} alt="Module 2" className={styles.subImage} />
                  </div>
                </div>
            </div>

            {/* TLS/IPSec Architecture for Large-Scale Networks */}
            <h3 className={styles.subTitle}>TLS/IPSec Architecture for Large-Scale Networks</h3>
            <div className={styles.subSection}>
                <div className={styles.subContent}>
                  <div className={styles.subText}>
                    <h4>Multi-threaded concurrent data flows</h4>
                  </div>
                  <div className={styles.subImageWrapper}>
                    <img src={module_2_firewall_3} alt="Module 2" className={styles.subImage} />
                  </div>
                </div>
            </div>
            <div className={styles.subSection}>
                <div className={styles.subContent}>
                  <div className={styles.subText}>
                    <h4>Large-scale TLS/SSL hardware architecture model</h4>
                  </div>
                  <div className={styles.subImageWrapper}>
                    <img src={module_2_firewall_4} alt="Module 2" className={styles.subImage} />
                  </div>
                </div>
            </div>

            {/* Details of key modules: Detailed description of the high-speed IPSec traffic security module */}
            <h3 className={styles.subTitle}>Details of key modules: Detailed description of the high-speed IPSec traffic security module</h3>
            <div className={styles.subSection}>
                <div className={styles.subContent}>
                  <div className={styles.subText}>
                    <h4>Detailed architecture with Multi-Cores and Multi-ARMs</h4>
                  </div>
                  <div className={styles.subImageWrapper}>
                    <img src={module_2_firewall_5} alt="Module 2" className={styles.subImage} />
                  </div>
                </div>
            </div>
          </AccordionModule>
              
          {/* --- Module 3 --- */}
          <AccordionModule title="Module 3 - IDS/IPS">
            {/* Overview of the IDS/IPS Block Diagram */}
            <div className={styles.subSection}>
                <div className={styles.subContent}>
                  <div className={styles.subText}>
                    <h4>Overview of the IDS/IPS Block Diagram</h4>
                    <h4>Detection:</h4>
                    <ul>
                      <li>Packets with specific or specialized formats</li>
                      <li>Abnormal behavior</li>
                      <li>Abnormal traffic</li>
                      <li>Malware</li>
                      <li>Viruses</li>
                    </ul>
                    <h4>Response:</h4>
                    <ul>
                      <li>Alerting</li>
                      <li>Blocking</li>
                      <li>Special functions</li>
                    </ul>
                  </div>
                  <div className={styles.subImageWrapper}>
                    <img src={module_3_firewall_1} alt="Module 3" className={styles.subImage} />
                  </div>
                </div>
            </div>

            {/* Extracting and analyzing Payloads to detect malware */}
             <h3 className={styles.subTitle}>Extracting and analyzing Payloads to detect malware</h3>
            <div className={styles.subSection}>
                <div className={styles.subContent}>
                  <div className={styles.subText}>
                    <ul>
                      <li>Massive volume of data</li>
                      <li>Wide variety of malware</li>
                      <li>Snort & Suricata rules: hundreds of thousands</li>
                      <li>Use GPUs or multiple parallel FPGAs for processing</li>
                    </ul>
                  </div>
                  <div className={styles.subImageWrapper}>
                    <img src={module_3_firewall_2} alt="Module 3" className={styles.subImage} />
                  </div>
                </div>
            </div>
            <div className={styles.subSection}>
                <div className={styles.subContent}>
                  <div className={styles.subText}>
                    <ul>
                      <li>Limited data volume</li>
                      <li>Standard SCADA formats: easier to detect</li>
                      <li>Real-time requirements - use FPGA for processing</li>
                    </ul>
                  </div>
                  <div className={styles.subImageWrapper}>
                    <img src={module_3_firewall_3} alt="Module 3" className={styles.subImage} />
                  </div>
                </div>
            </div>
          </AccordionModule>
          


        </section>
      </div> 
    </div>
  );
}

export default Cryptography;