import { useEffect } from "react";
import PageTitle from "../../../components/Layout/PageTitle/PageTitle";
import styles from './Firewall.module.css';
import VideoShowcase from "../../../components/UI/VideoShowcase/VideoShowcase";
import firewallBG from '../../../assets/image/firewall/firewall_bg.webp';
import firewall_ai_1 from '../../../assets/image/firewall/firewall_ai_1.jpg';
import firewall_ai_2 from '../../../assets/image/firewall/firewall_ai_2.jpg';
import firewall_ai_3 from '../../../assets/image/firewall/firewall_ai_3.jpg';
import firewall_ai_4 from '../../../assets/image/firewall/firewall_ai_4.jpg';
import example from "../../../assets/image/hpc_product/hpc_ai_1.png"; // Thay ảnh 
import { FileText } from 'react-feather';
import hpc_plat_vi from "../../../assets/image/hpc_product/hpc_plat_vi.pdf"; // Thay file PDF
const Firewall = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "AI-based malware identification - Acronics";
    }, []);

    return (
        <div>
            <PageTitle title="AI-based malware identification" imgSrc={firewallBG} />
            {/* Content for the Firewall page */}
            <section className={styles.newTechSection}>
                <div className={styles.container}> {/* Dùng class container chung của bạn */}
                    <div className={styles.techGrid}>

                        {/* CỘT TRÁI: NỘI DUNG CHỮ */}
                        <div className={styles.techContent}>
                            <h2 className={styles.sectionTitle}>Our New HPC Technologies</h2>

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
                            <img src={example} alt="AI-Based HPC Architecture Diagram" />
                            <div className={styles.gridSpec}>
                                <a href={hpc_plat_vi} target="_blank" rel="noopener noreferrer" className={styles.specButton}>
                                    <FileText size={20} />
                                    <span>Xem thông số kỹ thuật Firewall</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.detailsContainer}>

                    {/* Mục 1: 2 ảnh - Căn đều 2 bên */}
                    <div className={styles.detailItem}>
                        <h3 className={styles.detailTitle}>
                            Training models for DDoS and malware detection
                        </h3>
                        <div className={styles.imageRow}>
                            <img src={firewall_ai_1} alt="Training model 1" />
                            <img src={firewall_ai_2} alt="Training model 2" />
                        </div>
                    </div>

                    {/* Mục 2: 1 ảnh - Canh giữa */}
                    <div className={styles.detailItem}>
                        <h3 className={styles.detailTitle}>
                            Steps to handle malware identification, cyber attacks on microchips and systems
                        </h3>
                        <div className={styles.imageWrapper}>
                            <img src={firewall_ai_3} alt="Handling steps" />
                        </div>
                    </div>

                    {/* Mục 3: 1 ảnh - Canh giữa */}
                    <div className={styles.detailItem}>
                        <h3 className={styles.detailTitle}>
                            Methods of evaluating the accuracy and precision of equipment after design
                        </h3>
                        <div className={styles.imageWrapper}>
                            <img src={firewall_ai_4} alt="Evaluation methods" />
                        </div>
                    </div>

                </div>
            </section>

            {/* Video Showcase Section */}
            <section className={styles.videoShowcaseSection}>
                <div className={styles.container}>
                    <VideoShowcase
                        src="https://www.youtube.com/embed/9n2s8Xo7l5E"
                        title="Overview of ML/DL-based malware detection and prevention on SoC-FPGA"
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

export default Firewall;