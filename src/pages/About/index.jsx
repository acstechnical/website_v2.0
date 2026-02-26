import React, { useEffect} from 'react';
import styles from './About.module.css';
import asc_logo_white from '../../assets/image/global/logo_white_without_text.svg';
import img_1 from '../../assets/image/about/image_1.jpg';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Đổi tiêu đề tab trình duyệt
        document.title = "About | Acronics Solutions"; 
    }, []);

    return (
        <div>
          {/* 1. Page title */}
          <div className={styles.pageTitleSection}>
            <div className={styles.pageTitleLeftContent}>
              <h1 className={styles.pageTitle}>About Acronics</h1>
              <p className={styles.pageSubtitle}>Acronics Solutions provides enterprise-class compute, network, storage and sensor processing accelerator products featuring Altera, Intel and AMD FPGA technology. These programmable products dramatically increase application performance and energy efficiency while reducing total cost of ownership.</p>
              <p className={styles.pageSubtitle}>Here’s to the Acronics Solutions.</p>
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
              <div className={styles.imageWrapper}>
                <img src={img_1} alt="Our Product" className={styles.ourProductImage} />
              </div>
            </section>
          </div>

            

         
        </div>
    );
}

export default About;
