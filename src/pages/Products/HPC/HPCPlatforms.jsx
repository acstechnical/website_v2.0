import React, { useEffect, useState } from "react";
import styles from "./HPCPlatforms.module.css";
import PageTitle from "../../../components/Layout/PageTitle/PageTitle";
import FeaturesTab from "./components/FeaturesTab/FeaturesTab";
import TechProcess from "./components/TechProcess/TechProcess";
import VideoShowcase from "../../../components/UI/VideoShowcase/VideoShowcase";

import imgBg from "../../../assets/image/hpc_product/hpc_product_bg.webp";
import hpc_example from "../../../assets/image/hpc_product/hpc_example.jpg";
import hpc_ai_1 from "../../../assets/image/hpc_product/hpc_ai_1_bg_rm.png";
import hpc_plat_en from "../../../assets/image/hpc_product/hpc_plat_en.pdf";
import hpc_plat_vi from "../../../assets/image/hpc_product/hpc_plat_vi.pdf";
import { FileText } from 'react-feather';
//bổ sung
import home from "../../../assets/image/hpc_product/home.png";
// import hpc_processing from "../../../assets/image/hpc_product/hpc_processing.png";
import processing from "../../../assets/image/hpc_product/processing.png";
// import hpc_info from "../../../assets/image/hpc_product/hpc_info.png";
import info from "../../../assets/image/hpc_product/info.png";
// import hpc_history from "../../../assets/image/hpc_product/hpc_history.png";
import history from "../../../assets/image/hpc_product/history.png";
// import hpc_performer from "../../../assets/image/hpc_product/hpc_performer.png";
import performace from "../../../assets/image/hpc_product/performance.png";
import hpc_version from "../../../assets/image/hpc_product/hpc_version.png";
import hpc_device from "../../../assets/image/hpc_product/hpc_device.jpg";

const HPCPlatforms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "HPC Platforms - Acronics";
  }, []);
  const [activeTab, setActiveTab] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  // Cấu trúc dữ liệu mới: Mỗi tab đi kèm với nội dung riêng biệt
  const guiData = [
    {
      id: 0,
      label: "Overview",
      // image: hpc_home,
      image: home,
      title: "HPC Password Recovery Dashboard", // Thêm gạch nối
      description: "The HPC Password Recovery Dashboard provides a centralized interface for recovering encrypted files with simple drag-and-drop functionality, supporting formats such as Office, PDF, and RAR. The system integrates multiple features including Wi-Fi recovery, disk recovery, hash cracking, and AI-based wordlist generation using ML/DL. Real-time status tracking allows users to monitor processing progress and results efficiently."
    },
    {
      id: 1,
      label: "Processing",
      // image: hpc_processing,
      image: processing,
      title: "High-Performance Computing processing", // Thêm gạch nối
      description: "Leverage our advanced HPC platforms for unparalleled computational power and efficiency. Designed for complex simulations, data analysis, and AI workloads."
    },
    {
      id: 2,
      label: "Information",
      // image: hpc_info,
      image: info,
      title: "Comprehensive information hub",
      description: "Access detailed information about our HPC platforms, including technical specifications, performance metrics, and use cases. Stay informed about the latest advancements in high-performance computing." // 'high-performance' viết thường trong câu.
    },
    {
      id: 3,
      label: "History",
      // image: hpc_history,
      image: history,
      title: "Historical data analysis",
      description: "Explore the evolution of our HPC platforms through detailed historical data and performance metrics. Understand how our solutions have advanced over time and their impact on various industries."
    },
    {
      id: 4,
      label: "Performance",
      // image: hpc_performer,
      image: performace,
      title: "Performance monitoring",
      description: "Monitor the performance of your HPC platforms in real-time with detailed metrics and analytics. Identify bottlenecks and optimize your computational workflows for maximum efficiency."
    },
    {
      id: 5,
      label: "Other versions",
      image: hpc_version,
      title: "Version management",
      description: "Access and manage different versions of our HPC platforms. Stay updated with the latest features and improvements across all available releases.",
      highlights: [
        "(*) Password generation tools are typically limited to a maximum of 12 characters; however, PWR supports longer password lengths, thereby enhancing its capability to recover passwords beyond this limitation.",
        "(**) FPGA cluster architectures allow leveraging the potential of FPGA parallelism. Processing performance can increase by approximately 3–5 times depending on the FPGA hardware architecture (board capability), and can be further enhanced by using larger FPGA cluster configurations. The prototype architectures have versions from 1 to 6, with a significant increase in the number of usable FPGA clusters, from 16 to 512 clusters.",
        "System performance can be dynamically adjusted based on the operating temperature and environmental conditions of the clusters. This adaptive mechanism helps prevent hardware failure and ensures stable operation during the password recovery process."
      ]
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
      {/* <FeaturesTab /> */}

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
                AI-based network security and hardware protection solutions by Acronics Solutions (ACS)
              </p>

              {/* Danh sách công nghệ */}
              <ul className={styles.techList}>
                <li>DDoS Detection: Random Forest (RamFor Core)</li>
                <li>Malware Detection: Convolutional Neural Network (CNN Core)</li>
                <li>Abnormal Behavior Detection: Support Vector Machine (SVM Core)</li>
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
        <div className={styles.container}>
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
                    style={activeTab === tab.id ? { fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.5px' } : {}}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Ảnh thay đổi theo activeTab, click để zoom */}
              <div className={styles.tabContent} key={activeTab}>
                <img
                  src={guiData[activeTab].image}
                  alt={guiData[activeTab].label}
                  className={styles.guiImage}
                  style={{ cursor: 'zoom-in' }}
                  onClick={() => setZoomed(true)}
                />
                {/* Overlay zoom */}
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

              {/* Hiển thị các ý chính dưới dạng danh sách chuyên nghiệp */}
              {guiData[activeTab].highlights && (
                <ul className={styles.highlightList}>
                  {guiData[activeTab].highlights.map((item, index) => (
                    <li key={index} className={styles.highlightItem}>
                      <span className={styles.bullet}>•</span> {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* 5. Video showcase */}
      <section className={styles.videoShowcaseSection}>
        {(() => {
          // Danh sách video/card
          const videos = [
            {
              type: 'image',
              title: 'High-Performance Password Recovery device',
              content: (
                <img
                  src={hpc_device}
                  alt="HPC Device"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              )
            },
            {
              type: 'video',
              title: 'Overview of High-Performance Password Recovery',
              content: (
                <iframe
                  src="https://www.youtube.com/embed/W4mOqW1WS2Y"
                  title="Demo of network traffic malware detection scenarios using ML/DL on SoC-FPGA"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )
            },
            {
              type: 'video',
              title: 'Demonstration of High-Performance Password Recovery',
              content: (
                <iframe
                  src="https://www.youtube.com/embed/nSnrBXvd0xU"
                  title="Overview of ML/DL-based malware detection and prevention on SoC-FPGA"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )
            },
            {
              type: 'video',
              title: 'Demonstration of password recovery using ML/DL',
              content: (
                <iframe
                  src="https://www.youtube.com/embed/JeKwromL3oU"
                  title="Overview of ML/DL-based malware detection and prevention on SoC-FPGA"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )
            },
            
          ];

          // Tính toán chia hàng
          const n = videos.length;
          let firstRowCount = n;
          let secondRowCount = 0;
          if (n <= 3) {
            firstRowCount = n;
            secondRowCount = 0;
          } else if (n % 2 === 0) {
            // Chẵn > 3, chia đều
            firstRowCount = n / 2;
            secondRowCount = n / 2;
          } else {
            // Lẻ > 3, hàng đầu nhiều hơn 1
            firstRowCount = Math.ceil(n / 2);
            secondRowCount = n - firstRowCount;
          }
          const firstRow = videos.slice(0, firstRowCount);
          const secondRow = videos.slice(firstRowCount);

          return (
            <div className={styles.container}>
              <div className={styles.videoShowcaseGrid} style={{ marginBottom: secondRow.length > 0 ? 24 : 0 }}>
                {firstRow.map((video, idx) => (
                  <div className={styles.videoCard} key={video.title + idx}>
                    <div className={styles.videoTitle}>{video.title}</div>
                    <div style={{ width: '100%', aspectRatio: '16/9', background: '#000', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e0e0e0', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                      {video.content}
                    </div>
                  </div>
                ))}
              </div>
              {secondRow.length > 0 && (
                <div className={styles.videoShowcaseGrid}>
                  {secondRow.map((video, idx) => (
                    <div className={styles.videoCard} key={video.title + '2-' + idx}>
                      <div className={styles.videoTitle}>{video.title}</div>
                      <div style={{ width: '100%', aspectRatio: '16/9', background: '#000', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e0e0e0', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                        {video.content}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })()}
      </section>
    </div>
  );
}

export default HPCPlatforms;