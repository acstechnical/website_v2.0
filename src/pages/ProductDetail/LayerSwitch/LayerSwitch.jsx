import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './LayerSwitch.module.css';
import FeatureItem from '../../../components/UI/FeatureItem/FeatureItem';
import PageTitle from '../../../components/Layout/PageTitle/PageTitle';
import PrevPageBtn from '../../../components/UI/PrevPageBtn/PrevPageBtn';

import imgBg from "../../../assets/image/networking_device/networking-device_bg.webp";

const LayerSwitch = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Đổi tiêu đề tab trình duyệt
        document.title = "ACS Layer 2/3/4 Switch  - Switch on FPGA | Acronics Solutions"; 
    }, []);

    return (
        <div>
            {/* 1.Page title */}
            <PageTitle title="ACS Layer 2/3/4 Switch - Switch on FPGA" imgSrc={imgBg} />

            {/* 2. Technical Specifications */}
            <section className={styles.overviewSection}>
                <div className={styles.container}>
                    <div className={styles.overviewContent}>
                        <h1 className={styles.title}>ACS Layer 2/3/4 Switch</h1>
                        <p className={styles.description} style={{fontStyle: 'italic'}}>
                            Advanced Multi-Layer Network Switch
                        </p>
                        <h2 className={styles.sectionTitle}>Technical Specifications - Layer 2/3/4 Switching Capabilities</h2>
                    </div>
                </div>
            </section>

            {/* Layer 2 Switching */}
            <section className={styles.layerSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Layer 2 Switching</h2>
                    <ul>
                        <li className={styles.text}>64-entry L2 multicast table.</li>
                        <li className={styles.text}>Automatic aging and wire-speed learning of L2 addresses — no CPU or software intervention required.</li>
                        <li className={styles.text}>Spanning Tree Protocol (STP) support with ingress and egress checks.</li>
                        <li className={styles.text}>Support for 16 multiple spanning trees, each with ingress and egress verification.</li>
                        <li className={styles.text}>VLAN priority tagging can bypass VLAN processing and be removed on egress.</li>
                    </ul>
                </div>
            </section>

            {/* Layer 3 Routing */}
            <section className={styles.layerSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Layer 3 Routing</h2>
                    <ul>
                        <li className={styles.text}>MPLS forwarding with support for swap, push, pop, and penultimate pop operations.</li>
                        <li className={styles.text}>4-entry VRF table.</li>
                        <li className={styles.text}>1,024 x 4 hash-based L3 routing table.</li>
                        <li className={styles.text}>16-entry L3 routing TCAM for high-speed lookups.</li>
                        <li className={styles.text}>1,024-entry next-hop table, referenced by routing entries.</li>
                        <li className={styles.text}>1,024-entry packet modification table used to build L2 headers for next-hop forwarding.</li>
                        <li className={styles.text}>Configurable ECMP (Equal Cost Multi-Path) support based on:
                            <ul>
                                <li className={styles.text}>L3 protocol field</li>
                                <li className={styles.text}>L3 ToS</li>
                                <li className={styles.text}>L4 source/destination ports</li>
                            </ul>
                        </li>
                        <li className={styles.text}>ECMP supports up to 256 parallel paths.</li>

                    </ul>
                </div>
            </section>

            {/* Back to Cyber Security Page */}
            <PrevPageBtn linkTo="/products/networking-devices" />
        </div>
    );
};

export default LayerSwitch;
