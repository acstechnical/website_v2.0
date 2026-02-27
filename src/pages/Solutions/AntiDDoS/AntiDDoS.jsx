import React, { useEffect} from 'react';
import styles from './AntiDDoS.module.css';
import PageTitle from '../../../components/Layout/PageTitle/PageTitle';
import staticImg from '../../../assets/image/antiddos_solutions/staticstic.png';
import exampleImg from '../../../assets/image/antiddos_solutions/explain_02.png';
import imgBg from '../../../assets/image/antiddos_solutions/anti-ddos_solution_bg.jpg';
import ServiceCard from '../../../components/UI/ServiceCard_2/ServiceCard_2';
import HelpCard from '../../../components/UI/ServiceCard_3/ServiceCard_3';
import { XCircle, Shield, Zap, Settings, Share2, Clock, AlertTriangle, Server, ShieldOff } from 'react-feather';

const AntiDDoS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
          // Đổi tiêu đề tab trình duyệt
          document.title = "Anti-DDoS Solutions | Acronics Solutions"; 
      }, []);

  const solutionsData = [
      {
      title: 'Mechanism of Operation',
      description: 'Attackers mobilize a massive number of controlled devices (botnets) from various sources to send overwhelming volumes of fake traffic, many times stronger than traditional DoS attacks.',
      icon: ShieldOff
      },
      {
      title: 'Objective',
      description: 'Focus on flooding hardware resources or transmission bandwidth, paralyzing servers and applications, and preventing legitimate users from accessing services.',
      icon: Server
      },
      {
      title: 'Consequences',
      description: 'Depending on the scale, attacks can degrade processing performance, cause unstable connections, or lead to complete system downtime.',
      icon: AlertTriangle
      }
  ];

  const helpData = [
    {
      title: "Real-time Attack Prevention",
      description: "Detect and neutralize threats instantly to maintain service uptime.",
      icon: XCircle
    },
    {
      title: "Multi-layer Protection",
      description: "Combining traffic analysis, packet filtering, and authentication mechanisms to block attacks at various layers.",
      icon: Shield
    },
    {
      title: "System Performance Optimization",
      description: "Filtering malicious traffic before it reaches critical systems, ensuring legitimate services operate smoothly.",
      icon: Zap
    },
    {
    
      title: "Flexible Configuration and Management",
      description: "Manage multiple profiles and service ports through an intuitive interface tailored to your needs.",
      icon: Settings
    },
    {
      title: "Scalable Architecture",
      description: "Easily scale to meet growing infrastructure demands and high traffic volumes.",
      icon: Share2
    },
    { 
      title: "High Availability",
      description: "Minimizing downtime and ensuring systems stay online even during large-scale attacks.",
      icon: Clock
    }
  ];

  return (
    <div className={styles.antiddosContainer}>
      {/* 1. Page title */}
      <PageTitle title="DISTRIBUTED DENIAL OF SERVICE (DDoS) PROTECTION" imgSrc={imgBg} />

      {/* 2. Anti-DDoS Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <h1 className={styles.sectionTitle}>What is a DDoS Attack</h1>
          <div className={styles.cardGrid}>
            {solutionsData.map((item, index) => (
              <ServiceCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
          <div className={styles.introImageWrapper}>
            <img src={staticImg} alt="Anti-DDoS Statics" />
          </div>
        </div>
      </section>

      {/* 3. Acronics help section */}
      <section className={styles.helpSection}>
        <div className={styles.container}>
          <div className={styles.rightContent}>
            <h1 className={styles.sectionTitle}>How Acronics Solutions can help you protect your infrastructure?</h1>
            <div className={styles.helpImageWrapper}>
              <img src={exampleImg} alt="Anti-DDoS Example" />
            </div>
          </div>
          <div className={styles.leftContent}>
            {helpData.map((item, index) => (
              <HelpCard 
              key={index} 
              title={item.title} 
              description={item.description}
              icon={item.icon}/>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits section */}
      <section className={styles.benefitsContainer}>
        <div className={styles.container}>
          <h1 className={styles.sectionTitle}>Benefits of Acronics Solutions DDoS protection solution</h1>
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <h2 className={styles.featureTitle}>Massive Network Capacity</h2>
              <p className={styles.featureDesc}>
                Acronics Solutions has 348 Tbps network capacity, 23 times larger than the largest recorded DDoS attack.
              </p>
            </div>
            <div className={styles.featureItem}>
             <h2 className={styles.featureTitle}>Setup in Minutes</h2>
              <p className={styles.featureDesc}>
                Deploy DDoS protection immediately without complex configuration. Start protecting your infrastructure in minutes.
              </p>
            </div>
            <div className={styles.featureItem}>
            <h2 className={styles.featureTitle}>24/7 Email Support</h2>
              <p className={styles.featureDesc}>
                Our dedicated technical support team is available 24/7 to help you monitor, analyze, and mitigate DDoS threats.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h2 className={styles.featureTitle}>Eliminates Slow Performance</h2>
              <p className={styles.featureDesc}>
                Intelligent traffic routing and real-time filtering ensure your website and services remain fast and responsive even under attack.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default AntiDDoS;