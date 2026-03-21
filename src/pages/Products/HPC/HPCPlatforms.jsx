import React, { useEffect, useState } from "react";
import styles from "./HPCPlatforms.module.css";
import PageTitle from "../../../components/Layout/PageTitle/PageTitle";
import FeaturesTab from "./components/FeaturesTab/FeaturesTab";
import TechProcess from "./components/TechProcess/TechProcess";
import VideoShowcase from "./components/VideoShowcase/VideoShowcase";

import imgBg from "../../../assets/image/hpc_product/hpc_product_bg.webp";
import hpc_example from "../../../assets/image/hpc_product/hpc_example.png";
import hpc_ai_1 from "../../../assets/image/hpc_product/hpc_ai_1.png";
import hpc_plat_en from "../../../assets/image/hpc_product/hpc_plat_en.pdf";
import hpc_plat_vi from "../../../assets/image/hpc_product/hpc_plat_vi.pdf";
import { FileText } from 'react-feather';
//bổ sung
import hpc_processing from "../../../assets/image/hpc_product/hpc_processing.png";
import hpc_info from "../../../assets/image/hpc_product/hpc_info.png";
import hpc_history from "../../../assets/image/hpc_product/hpc_history.png";
import hpc_performer from "../../../assets/image/hpc_product/hpc_performer.png";
import hpc_version from "../../../assets/image/hpc_product/hpc_version.png";

const HPCPlatforms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "HPC Platforms - Acronics";
  }, []);
  const [activeTab, setActiveTab] = useState(0);
  // Cấu trúc dữ liệu mới: Mỗi tab đi kèm với nội dung riêng biệt
  const guiData = [
    {
      id: 0,
      label: "Processing",
      image: hpc_processing,
      title: "High-Performance Computing Processing", // Thêm gạch nối
      description: "Leverage our advanced HPC platforms for unparalleled computational power and efficiency. Designed for complex simulations, data analysis, and AI workloads."
    },
    {
      id: 1,
      label: "Information",
      image: hpc_info,
      title: "Comprehensive Information Hub",
      description: "Access detailed information about our HPC platforms, including technical specifications, performance metrics, and use cases. Stay informed about the latest advancements in high-performance computing." // 'high-performance' viết thường trong câu.
    },
    {
      id: 2,
      label: "History",
      image: hpc_history,
      title: "Historical Data Analysis",
      description: "Explore the evolution of our HPC platforms through detailed historical data and performance metrics. Understand how our solutions have advanced over time and their impact on various industries."
    },
    {
      id: 3,
      label: "Performance",
      image: hpc_performer,
      title: "Performance Monitoring",
      description: "Monitor the performance of your HPC platforms in real-time with detailed metrics and analytics. Identify bottlenecks and optimize your computational workflows for maximum efficiency."
    },
    {
      id: 4,
      label: "Other Versions",
      image: hpc_version,
      title: "Version Management",
      description: "Access and manage different versions of our HPC platforms. Stay updated with the latest features and improvements across all available releases."
    }
  ];

  return (
    <div>
      {/* 1. Page title */}
      <PageTitle title="High-Performance Computing Platforms" imgSrc={imgBg} />

      {/* 2. High Performance Computing Platforms */}
      <section className={styles.hpcPlatformsSection}>
        <div className={styles.container}>
          <div className={styles.leftContent}>
            <h1 className={styles.sectionTitle}>High-Performance Computing Platforms</h1>
            <p className={styles.description}>
              <span className={styles.highlight}>High Performance Computing (HPC)</span> refers to the use of powerful computing systems and parallel processing techniques to solve complex computational problems and process massive amounts of data at high speed.
            </p>
            <p className={styles.description}>
              HPC systems consist of interconnected compute nodes working together to deliver significantly greater performance than traditional systems. This architecture is widely applied in fields such as <span className={styles.highlight}>AI and machine learning, scientific simulation, engineering design, quantitative finance, and big data analytics.</span>
            </p>
            <p className={styles.description}>
              <span className={styles.highlight}>The Acronics Solutions HPC Platform</span> provides an integrated and scalable environment for managing workloads, monitoring performance, and optimizing costs — enabling organizations to fully leverage computational power for research, innovation, and production.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={hpc_example} alt="HPC Platforms" />
            <div className={styles.gridSpec}>
              <a href={hpc_plat_en} target="_blank" rel="noopener noreferrer" className={styles.specButton}>
                <FileText size={20} />
                <span>View  HPC Specification PDF</span>
              </a>
              <a href={hpc_plat_vi} target="_blank" rel="noopener noreferrer" className={styles.specButton}>
                <FileText size={20} />
                <span>Xem thông số kỹ thuật HPC</span>
              </a>
            </div>
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
              <h2 className={styles.sectionTitle}>Our New HPC Technologies</h2>

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

      {/* 5. GUI Showcase*/}
      <section className={styles.guiSection}>
        <h2 className={styles.sectionTitle}>GUI Showcase</h2>
        <div className={styles.guiGrid}>
          {/* KHỐI TRÁI: HIỂN THỊ TABS VÀ ẢNH */}
          <div className={styles.guiDisplayCard}>
            <div className={styles.tabBar}>
              {guiData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
                >
                  [{tab.label}]
                </button>
              ))}
            </div>

            {/* Ảnh thay đổi theo activeTab kèm hiệu ứng fade-in đơn giản */}
            <div className={styles.tabContent} key={activeTab}>
              <img
                src={guiData[activeTab].image}
                alt={guiData[activeTab].label}
                className={styles.guiImage}
              />
            </div>
          </div>

          {/* KHỐI PHẢI: NỘI DUNG THAY ĐỔI THEO TAB */}
          <div className={styles.guiInfo} key={`info-${activeTab}`}>
            <h3 className={styles.guiInfoTitle}>{guiData[activeTab].title}</h3>
            <p className={styles.text}>
              {guiData[activeTab].description}
            </p>
          </div>
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
            title="Demo of network traffic malware detection scenarios using ML/DL on SoC-FPGA"
          />
        </div>
      </section>
    </div>
  );
}

export default HPCPlatforms;