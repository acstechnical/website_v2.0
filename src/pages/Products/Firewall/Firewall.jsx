import { useEffect } from "react";
import styles from "./Firewall.module.css";
import PageTitle from "../../../components/Layout/PageTitle/PageTitle";
import TechProcess from "./components/TechProcess/TechProcess";
import VideoShowcase from "./components/VideoShowcase/VideoShowcase";

import firewallImg from '../../../assets/image/cryptography/crypto_bg.webp';
import hpc_ai_1 from "../../../assets/image/hpc_product/hpc_ai_1.png";

const Firewall = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Firewall | Acronics";
    }, []);

    return (
        <div>
            {/* 1. Page Title */}
            <PageTitle title="Firewall" imgSrc={firewallImg} />
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
        
            {/* 5. Video showcase */}
            <section className={styles.videoShowcaseSection}>
                <div className={styles.container}>
                    <VideoShowcase
                        src="https://www.youtube.com/embed/68IyMgsF3v0"
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
};

export default Firewall;