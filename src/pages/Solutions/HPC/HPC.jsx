import React, { useEffect} from 'react';
import styles from './HPC.module.css';
import PageTitle from '../../../components/Layout/PageTitle/PageTitle';
import hpcSampleImage from '../../../assets/image/hpc_solutions/hpc_sample_01.png';
import switchImage from '../../../assets/image/hpc_solutions/hpc_arch_1.png';
import platformImage from '../../../assets/image/hpc_solutions/hpc_5.png';
import imgBg from '../../../assets/image/hpc_solutions/hpc_solution_bg.webp';
const HPC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
          // Đổi tiêu đề tab trình duyệt
          document.title = "HPC Solutions | Acronics Solutions"; 
      }, []);

  return (
    <div className={styles.hpcSolutionContainer}>
      {/* 1. Page title */}
      <PageTitle title="HIGH PERFORMANCE COMPUTING SOLUTIONS" imgSrc={imgBg} />

      {/* 1. HPC Intro Section */}
      <section className={styles.overviewDesc}>
        <div className={styles.container}>
          <h1 className={styles.sectionTitle}>High Performance Computing Solutions</h1>
          <p className={styles.introText}>
            <span style={{color: 'var(--primary-color)'}}>Acronics Solutions</span> High Performance Computing (HPC) refers to the use of powerful computing systems and parallel processing techniques to solve complex computational problems and process massive amounts of data at high speed.
          </p>
          <p className={styles.introText}>
            HPC systems consist of interconnected compute nodes working together to deliver significantly greater performance than traditional systems. This architecture is widely applied in fields such as <span style={{color: 'var(--primary-color)'}}>AI and Machine Learning, scientific simulation, engineering design, quantitative finance, and big data analytics.</span>
          </p>
          <p className={styles.introText}>
            <span style={{color: 'var(--primary-color)'}}>The Acronics Solutions HPC Platform</span> provides an integrated and scalable environment for managing workloads, monitoring performance, and optimizing costs — enabling organizations to fully leverage computational power for research, innovation, and production.
          </p>
        </div>
      </section>

      {/* 2. FPGA Section */}
      <section className={styles.fpgaSection}>
        <div className={styles.container}>
          <div className={styles.fpgaGrid}>
            <div className={styles.fpgaImageWrapper}>
              <img src={hpcSampleImage} alt="HPC Sample" />
            </div>
            <div className={styles.fpgaContent}>
              <h1 className={styles.sectionTitle}>FPGA Technology</h1>

              {/* Feature 1 */}
              <div className={styles.featureItem}>
                <h2 className={styles.featureTitle}>Balanced Performance</h2>
                <p className={styles.featureDesc}>
                  High processing speeds exceeding CPUs and approaching the power of GPUs.
                </p>
              </div>

              {/* Feature 2 */}
              <div className={styles.featureItem}>
                <h2 className={styles.featureTitle}>Absolute Security</h2>
                <p className={styles.featureDesc}>
                  Completely eliminating risks of malware or espionage from pre-packaged foreign hardware.
                </p>
              </div>

              {/* Feature 3 */}
              <div className={styles.featureItem}>
                <h2 className={styles.featureTitle}>Complete Autonomy</h2>
                <p className={styles.featureDesc}>
                  Enabling 100% domestic design, development, and packaging. Proactively upgrade and maintain flexibly based on needs without licensing dependencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. GIGABIT SWITCH Architecture section */}
      <section className={styles.switchSection}>
        <div className={styles.container}>
          <div className={styles.switchGrid}>
            
            {/* Cột 1: Nội dung Chữ (Nằm bên trái) */}
            <div className={styles.switchContent}>
              <h1 className={styles.sectionTitle}>
                GIGABIT SWITCH Architecture
              </h1>

              {/* Feature 1 */}
              <div className={styles.featureItem}>
                <h2 className={styles.featureTitle}>
                  {/* Badge 100% */}
                  <span className={styles.badge}>100%</span> 
                  Technology Ownership
                </h2>
                <p className={styles.featureDesc}>
                  Gigabit Switch systems and FPGA cards are designed and developed from the core.
                </p>
              </div>

              {/* Feature 2 */}
              <div className={styles.featureItem}>
                <h2 className={styles.featureTitle}>Flexible Scalability</h2>
                <p className={styles.featureDesc}>
                  Easy expansion through cascading (8-port Switch, supporting 2-tier cascading with 8 FPGA cards per tier).
                </p>
              </div>

            </div>

            {/* Cột 2: Hình ảnh Sơ đồ (Nằm bên phải) */}
            <div className={styles.switchImageWrapper}>
              <img src={switchImage} alt="Gigabit Switch Architecture Diagram" />
            </div>

          </div>
        </div>
    </section>

    {/* HPC system platform section */}
    <section className={styles.platformSection}>
        <div className={styles.container}>
          <div className={styles.platformGrid}>
            <h1 className={styles.sectionTitle}>HPC system platform developed on a self-developed Cluster Gigabit Switch architecture.</h1>
            <div className={styles.platformImageWrapper}>
              <img src={platformImage} alt="HPC System Platform Diagram" />
            </div>
            <div className={styles.platformDesc}>
              <h2 className={styles.featureTitle}>HPC solutions developed on SoC-FPGA allow for the implementation of various specific requirements, serving specialized professional tasks such as:</h2>
              <ul className={styles.platformList}>
                <li>Pentest systems</li>
                <li>Malware analysis and identification systems</li>
                <li>Cryptanalysis systems</li>
                <li>Information security risk analysis/forecasting and big data processing systems</li>
              </ul>
            </div>
          </div>
        </div>
    </section>
    </div>
  );
};

export default HPC;
