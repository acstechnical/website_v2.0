import { useEffect } from 'react';
import PageTitle from '../../../components/Layout/PageTitle/PageTitle';
import styles from './IPSec.module.css';
import ipsecDescImg_1 from '../../../assets/image/ipsec/ipsec_desc_01.png';
import ipsecDescImg_2 from '../../../assets/image/ipsec/ipsec_desc_02.png';
import ipsecDescImg_3 from '../../../assets/image/ipsec/ipsec_desc_03.png';
import ipsecDescImg_4 from '../../../assets/image/ipsec/ipsec_desc_04.png';
import ipsecDescImg_5 from '../../../assets/image/ipsec/ipsec_desc_05.png';
import ipsec_solution_1 from '../../../assets/image/ipsec/ipsec_solution_01.png';
import ipsec_solution_2 from '../../../assets/image/ipsec/ipsec_solution_02.png';
import ipsec_solution_3 from '../../../assets/image/ipsec/ipsec_solution_03.png';
import ipsec_solution_4 from '../../../assets/image/ipsec/ipsec_solution_04.png';
import ipsec_device from '../../../assets/image/ipsec/ipsec_device.jpg';
import imgBg from '../../../assets/image/ipsec/ipsec_bg.webp';

const IPSec = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Đổi tiêu đề tab trình duyệt
        document.title = "IPSec Solutions | Acronics Solutions";
    }, []);

    return (
        <div>
            {/* 1. Page title */}
            <PageTitle title="IPSec (Internet Protocol Security)" imgSrc={imgBg} />

            {/* 2. introSection */}
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <h1 className={styles.sectionTitle}>What is IPSec?</h1>
                    <p className={styles.description}>
                        IPSec operates in two modes to exchange traffic for Virtual Private Networks in the most secure ways. There are two types of IPSec modes: Transport and Tunnel.
                    </p>
                    <div className={styles.introContent}>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <h2 className={styles.featureTitle}>Transport Mode</h2>
                                <p className={styles.featureDesc}>
                                    Protects traffic by sending packets directly between two servers that have established an IPsec tunnel. That is, when the endpoints communicate and cryptography is the same. The IP packet payload is encrypted, but the IP header is not.
                                </p>
                            </div>
                            <div className={styles.featureItem}>
                                <h2 className={styles.featureTitle}>Tunnel Mode</h2>
                                <p className={styles.featureDesc}>
                                    Tunnel mode encapsulates the original IP packet into another packet in the VPN tunnel to protect traffic. This method authenticates peers using a pre-shared key with IKE or digital certificates with IKE.
                                </p>
                            </div>
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src={ipsecDescImg_1} alt="IPSec Modes" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. How Does IPSec Work */}
            <section className={styles.howItWorksSection}>
                <div className={styles.container}>
                    <div className={styles.howItWorkContent}>
                        <h1 className={styles.sectionTitle}>How does IPSec work?</h1>
                        <p className={styles.description}>
                            Now that you understand the components of IPSec, let's explore how these components work to create a secure path for the sender and receiver to communicate.
                        </p>
                        <div className={styles.imageWrapper}>
                            <img src={ipsecDescImg_2} alt="How Does IPSec Work?" />
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. IPSec Overview */}
            <section className={styles.overviewSection}>
                <div className={styles.container}>
                    <h1 className={styles.sectionTitle}>IPSec Overview</h1>
                    <div className={styles.contentOverview}>
                        <p className={styles.description}>
                            The trend of applying new generation networks, centralized and capable of processing large amounts of data such as big data, cloud computing has become a necessity recently.
                        </p>
                        <p className={styles.description}>
                            The speed of data transfer, the speed of the communication & connection standards are increased vigorously (e.g, Fiber optic networks with speeds of 100G, 400G, and even 800G are being deployed). Along with that, security requirements for data transmission over public networks are also increasing.
                        </p>
                        <p className={styles.description}><strong>
                            Requires a fast , reliable security system to meet the real-time data security needs of the network.
                        </strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Goal of this Proof of Concept Development*/}
            <section className={styles.goalSection}>
                <div className={styles.container}>
                    <div className={styles.goalContent}>
                        <h1 className={styles.sectionTitle}>Goal of This Proof of Concept development</h1>
                        <p className={styles.description}>
                            Develop PoC for high-speed IPSec system, security and authentication applications in Data Centers, in Cloud systems,security meets real-time applications.
                        </p>
                        <div className={styles.imageWrapper}>
                            <img src={ipsecDescImg_3} alt="How Does IPSec Work?" />
                        </div>
                    </div>

                </div>
            </section>

            {/* 6. Some solutions for IPSec Systems */}
            <section className={styles.solutionsSection}>
                <div className={styles.container}>
                    <h1 className={styles.sectionTitle}>Solutions for IPSec systems</h1>
                    <div className={styles.solutionsContent}>
                        <div className={styles.imageWrapper}>
                            <img src={ipsec_solution_1} alt="Solutions 1: Full software-based IPSec" />
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src={ipsec_solution_2} alt="Solutions 2 - IPSec cryptography acceleration via AES, SHA on FPGA" />
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src={ipsec_solution_3} alt="Solutions 3 - IPSec accelerates the cryptography by multiple cores" />
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src={ipsec_solution_4} alt="Solutions 4 - IPSec run at highest speed with accelerator in Network layers" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. High Speed IPSec Development on Solution 2nd  */}
            <section className={styles.highSpeedSection}>
                <div className={styles.container}>
                    <div className={styles.highSpeedContent}>
                        <div className={styles.leftContent}>
                            <h1 className={styles.sectionTitle}>High-Speed IPSec development on Solution 2</h1>
                            <p className={styles.description}>
                                Phase 1(IKE SA): Managed by IKE daemon and Linux crypto framework.
                            </p>
                            <p className={styles.description}>
                                Phase 2(IPsec SA) Using GCS Solution: Plugin crypto driver and HW accelerator for AES and SHA.
                            </p>
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src={ipsecDescImg_4} alt="High Speed IPSec Development on Solution 2nd" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. IPSec Device & Demo */}
            <section className={styles.deviceSection}>
                <div className={styles.container}>
                    <h1 className={styles.sectionTitle}>IPSec device and Demonstration</h1>

                    <div className={styles.deviceGrid}>
                        {/* Cột 1: Hình ảnh thiết bị */}
                        <div className={styles.deviceImageSide}>
                            <div className={styles.imageWrapper}>
                                <img src={ipsec_device} alt="IPSec Hardware Device" />
                            </div>
                            <p className={styles.description}>
                                IPSec system development on SoC-FPGA ZCU102/ZCU106 with 10G/20G Ethernet connectivity
                            </p>
                        </div>

                        {/* Cột 2: Video Demo */}
                        <div className={styles.deviceVideoSide}>
                            <div className={styles.videoResponsive}>
                                <iframe
                                    src="https://www.youtube.com/embed/oYX6m0V9mWc"
                                    
                                    title="IPSec System Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className={styles.videoCaption}>High-speed IPSec-VPN based on MPSoC-FPGA technology</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* 8. IPSec System Development Demonstration */}
            <section className={styles.demoSection}>
                <div className={styles.container}>
                    <div className={styles.demoContent}>
                        <div className={styles.leftContent}>
                            <h1 className={styles.sectionTitle}>IPSec system development demonstration</h1>
                            <div className={styles.featureList}>
                                <div className={styles.featureItem}>
                                    <h2 className={styles.featureTitle}>Hardware</h2>
                                    <ul>
                                        <li className={styles.featureDesc}>SoC-FPGA ZCU102 (4 ARMs Cores) or ZCU106 (6 ARMs Cores)</li>
                                        <li className={styles.featureDesc}>Support 10G/20G Ethernet for high speed connectivity</li>
                                    </ul>
                                </div>
                                <div className={styles.featureItem}>
                                    <h2 className={styles.featureTitle}>OS and Crypto Framework</h2>
                                    <ul>
                                        <li className={styles.featureDesc}>Linux OS with IPsec protocol stack</li>
                                        <li className={styles.featureDesc}>StrongSwan</li>
                                    </ul>
                                </div>
                                <div className={styles.featureItem}>
                                    <h2 className={styles.featureTitle}>Built-in IPsec hardware</h2>
                                    <ul>
                                        <li className={styles.featureDesc}>Hardware AES, SHA-256</li>
                                        <li className={styles.featureDesc}>Cryptography driver</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src={ipsecDescImg_5} alt="High Speed IPSec Development on Solution 2nd" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default IPSec;