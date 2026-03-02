import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './LayerSwitch.module.css';
import FeatureItem from '../../../../components/UI/FeatureItem/FeatureItem';
import PageTitle from '../../../../components/Layout/PageTitle/PageTitle';
import PrevPageBtn from '../../../../components/UI/PrevPageBtn/PrevPageBtn';

import imgBg from "../../../../assets/image/networking_device/networking-device_bg.webp";
import {GitMerge, Filter, Shield} from 'react-feather'

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

            {/* 3. Layer 2 Switching */}
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

            {/* 4. Layer 2/3/4 Classification and ACL*/}
            <section className={styles.layer234Section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Layer 2/3/4 Classification and ACL</h2>
                    <div className={styles.featuresGrid}>
                        <FeatureItem
                            iconName={Filter}
                            title="L2 classification rules include:"
                            descriptions='Source port, Destination MAC, Source MAC, VLAN VID, VLAN PCP, VLAN CFI, Ethernet type.'
                        />
                        <FeatureItem
                            iconName={Shield}
                            title='32-entry classification / ACL rules supporting:'
                            descriptions='Source port, routed flag, VRF, IPv4 / IPv6 / MPLS packet types, source IP, destination IP, ToS, L4 protocol type, L4 source port, L4 destination port, TCP flags.'
                        />
                        <FeatureItem
                            iconName={GitMerge}
                            title='High-Performance Data Throughput'
                        />
                    </div>
                </div>
            </section>

            {/* 5. QoS and Traffic Management  */}
            <section className={styles.layerSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>QoS and Traffic Management</h2>
                    <ul>
                        <li className={styles.text}>5,242,880-bit shared packet buffer memory (4,096 cells x 160 bytes each) shared among all ports.</li>
                        <li className={styles.text}>8 priority queues per egress port.</li>
                        <li className={styles.text}>Configurable egress queue mapping from IP ToS, MPLS EXP/TC, or VLAN PCP bits.</li>
                        <li className={styles.text}>16 ingress admission control entries.</li>
                        <li className={styles.text}>Strict Priority Scheduler for deterministic traffic handling.</li>
                        <li className={styles.text}>Egress queue resource limiter with four independent configuration sets.</li>
                        <li className={styles.text}>Multicast/Broadcast storm control with dedicated token buckets for flooding, broadcast, and multicast traffic.</li>
                        <li className={styles.text}>Configurable per egress port, either packet-based or byte-based control.</li>
                    </ul>
                </div>
            </section>

            {/* 6.System Control and Management */}
             <section className={styles.layerSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>System Control and Management</h2>
                    <ul>
                        <li className={styles.text}>Configuration interface for accessing configuration and status registers/tables.</li>
                        <li className={styles.text}>LLDP (Link Layer Discovery Protocol) frames can optionally be sent to the CPU for processing.</li>
                    </ul>
                </div>
            </section>
            {/* Back to Cyber Security Page */}
            <PrevPageBtn linkTo="/products/networking-devices" text="See more our networking devices"/>
        </div>
    );
};

export default LayerSwitch;
