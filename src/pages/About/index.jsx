import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import asc_logo_white from '../../assets/image/global/logo_white_without_text.svg';
import team_1_img from '../../assets/image/about/team_1.jpg';
import team_2_img from '../../assets/image/about/team_2.jpg';
import team_3_img from '../../assets/image/about/team_3.jpg';
import ipsec_img from '../../assets/image/about/ipsec_sample_01.png';
import hpc_img from '../../assets/image/hpc_solutions/hpc_sample_01.png';
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "About | Acronics Solutions"; 
    }, []);

    return (
        <div>
          {/* 1. Page title */}
          <div className={styles.pageTitleSection}>
            <div className={styles.pageTitleLeftContent}>
              <h1 className={styles.title}>About Acronics</h1>
              <p className={styles.pageSubtitle}>Acronics Solutions provides enterprise-class compute, network, storage and sensor processing accelerator products featuring Altera, Intel and AMD FPGA technology. These programmable products dramatically increase application performance and energy efficiency while reducing total cost of ownership.</p>
              <p className={styles.pageSubtitle}>Here's to the Acronics Solutions.</p>
            </div>
            <div className={styles.pageTitleImage}>
              <img src={asc_logo_white} alt="About Acronics" />
            </div>
          </div>
          <div className={styles.container}>
            {/* 2. Our product section */}
            <section className={styles.ourProductSection}>
              <h2 className={styles.sectionTitle}>Our Product</h2>
              <p className={styles.description}>Acronics Solutions has one of the newest FPGA product portfolios in the market. We offer a wide range of premium quality, production-ready FPGA cards with Intel, Altera, and AMD FPGAs. Develop and deploy your application quicker and with reduced cost and risk by having us integrate your FPGA cards into our certified, integrated FPGA servers. We also provide a range of solutions to simplify application development on your Acronics Solutions FPGA card. Our solutions include development tools supporting, system monitoring, and FPGA examples. These are optimized for specific applications such as data capture and networking acceleration.</p>
              <div className={styles.ourProductImageWrapper}>
                <img src={team_1_img} alt="Our Product" className={styles.ourProductImage} />
              </div>
            </section>

            {/* 3. Our values */}
            <section className={styles.ourValuesSection}>
              <div className={styles.content}>
                <h2 className={styles.sectionTitle}>Our Values</h2>
                <p className={styles.description}>Acronics Solutions thrives on teamwork, quality and leadership. We work hard to understand our customer's and the market's needs, lead the industry in developing new technologies and build quality into our products and services.</p>
              </div>
              <div className={styles.imageWrapper}>
                <img src={team_2_img} alt="Our Values" className={styles.ourValuesImage} />            
              </div>
            </section>

            {/* 3. Our Team */}
            <section className={styles.ourTeamSection}>
              <div className={styles.imageWrapper}>
                <img src={team_3_img} alt="Our Team" className={styles.ourTeamImage} />            
              </div>
              <div className={styles.content}>
                <h2 className={styles.sectionTitle}>Our Team</h2>
                <p className={styles.description}>A dynamic, growing company that sees its employees as its biggest asset, Acronics Solutions offers challenging work in an environment that is informal, supportive, and team-centered. Our customers constantly present us with new and challenging projects, and we work as a team to deliver what they need.</p>
              </div>
            </section>
          </div>
          {/* 4. Why Acronics Solution */}
          <section className={styles.whyAcronicsSection}>
            <h1>Why Acronics Solutions?</h1>
            <p>We are the only FPGA vendor-agnostic supplier of critical mass able to address enterprise-class qualification, validation, lifecycle and support requirements for customers deploying FPGA accelerators in high performance computing and networking applications.
            </p>
            <Link to="/contact" className={styles.contactUsLink}>Contact Us</Link>
          </section>
        </div>
    );
}

export default About;
