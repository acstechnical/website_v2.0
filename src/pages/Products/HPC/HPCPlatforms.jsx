import { useEffect } from "react";
import styles from "./HPCPlatforms.module.css";
import PageTitle from "../../../components/Layout/PageTitle/PageTitle";
import FeaturesTab from "./components/FeaturesTab/FeaturesTab";
import TechProcess from "./components/TechProcess/TechProcess";
import VideoShowcase from "./components/VideoShowcase/VideoShowcase";

import imgBg from "../../../assets/image/hpc_product/hpc_product_bg.webp";
import hpc_example from "../../../assets/image/hpc_product/hpc_example.png";
import hpc_ai_1 from "../../../assets/image/hpc_product/hpc_ai_1.png";

const HPCPlatforms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "HPC Platforms - Acronics";
  }, []);

  return (
    <div>
      {/* 1. Page title */}
      <PageTitle title="HIGH PERFORMANCE COMPUTING PLATFORMS" imgSrc={imgBg} />

      {/* 2. High Performance Computing Platforms */}  
      <section className={styles.hpcPlatformsSection}>
        <div className={styles.container}>
          <div className={styles.leftContent}>
            <h1 className={styles.sectionTitle}>High Performance Computing Platforms</h1>
            <p className={styles.description}>
              <span className={styles.highlight}>High Performance Computing (HPC)</span> refers to the use of powerful computing systems and parallel processing techniques to solve complex computational problems and process massive amounts of data at high speed.
            </p>
            <p className={styles.description}>
              HPC systems consist of interconnected compute nodes working together to deliver significantly greater performance than traditional systems. This architecture is widely applied in fields such as <span className={styles.highlight}>AI and Machine Learning, scientific simulation, engineering design, quantitative finance, and big data analytics.</span>
            </p>
            <p className={styles.description}>
              <span className={styles.highlight}>The Acronics Solutions HPC Platform</span> provides an integrated and scalable environment for managing workloads, monitoring performance, and optimizing costs — enabling organizations to fully leverage computational power for research, innovation, and production.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={hpc_example} alt="HPC Platforms"/>
          </div>
        </div>
      </section>

      {/* 3. HPC Types */}
      <FeaturesTab />

      {/* 4. Our new HPC technologies*/}
      <section className={styles.newTechSection}>
        <div className={styles.container}> {/* Dùng class container chung của bạn */}
          <div className={styles.techGrid}>
            
            {/* CỘT TRÁI: NỘI DUNG CHỮ */}
            <div className={styles.techContent}>
              <h2 className={styles.sectionTitle}>Our new HPC technologies</h2>
              
              {/* <h3 className={styles.sectionSubtitle}>
                AI-Based Network Security and Hardware Protection Solutions by Acronics Solutions (ACS)
              </h3> */}
              <p className={styles.sectionSubtitle}>
                AI-Based Network Security and Hardware Protection Solutions by Acronics Solutions (ACS)
              </p>

              {/* Danh sách công nghệ */}
              <ul className={styles.techList}>
                <li>DDoS Detection: Random Forest (RamFor Core)</li>
                <li>Malware Detection: Convolutional Neural Network (CNN)</li>
                <li>Abnormal Behavior Detection: Support Vector Machine (SVM)</li>
              </ul>

              {/* Đoạn văn 1 */}
              <p className={styles.description}>
                ACS provides advanced AI-powered network security solutions implemented directly on hardware and FPGA chips. The system applies deep learning (ML/DL) algorithms optimized for FPGA deployment, featuring a fully self-developed Linux-based operating system, custom control and monitoring programs, and in-house board design and manufacturing for seamless system integration.
              </p>

              {/* Đoạn văn 2 */}
              <p className={styles.description}>
                With complete technological autonomy, the solution is easy to upgrade, maintain, and customize. Developed and produced 100% in Vietnam, ACS’s platform enables ultra-fast malware and DDoS attack detection in real time, capable of processing live network traffic at high speed. The system ensures robust cybersecurity with no malware infection, no backdoors, and no interception risks.
              </p>
            </div>

            {/* CỘT PHẢI: HÌNH ẢNH SƠ ĐỒ */}
            <div className={styles.imageWrapper}>
              <img src={hpc_ai_1} alt="AI-Based HPC Architecture Diagram" />
            </div>

          </div>
          <TechProcess> </TechProcess> 
        </div>
      </section>

      {/* 5. Video showcase */}
      <section className={styles.videoShowcaseSection}>
        <div className={styles.container}>
          <VideoShowcase 
            src="https://www.youtube.com/embed/68IyMgsF3v0"
            title="Overview of ML/DL-Based Malware Detection and Prevention on SoC-FPGA"

          />

          <VideoShowcase 
            src="https://www.youtube.com/embed/Ef0ItagAmdA"
            title="Demo of Network Traffic Malware Detection Scenarios Using ML/DL on SoC-FPGA"
          />
        </div>
      </section>
    </div>
  );
}

export default HPCPlatforms;