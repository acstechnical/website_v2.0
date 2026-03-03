import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Contact.module.css";
import asc_logo_white from '../../assets/image/global/logo_white_without_text.svg';

const Contact = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - Acronics";
  }, [location]);

  // 2. Hàm xử lý khi người dùng nhập liệu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Hàm gửi email
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");

  //   // Các thông số này lấy từ tài khoản EmailJS của bạn
  //   const serviceID = "YOUR_SERVICE_ID";
  //   const templateID = "YOUR_TEMPLATE_ID";
  //   const publicKey = "YOUR_PUBLIC_KEY";

  //   emailjs.send(serviceID, templateID, formData, publicKey)
  //     .then(() => {
  //       setStatus("Message sent successfully!");
  //       setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form
  //     })
  //     .catch((err) => {
  //       console.error("Failed to send:", err);
  //       setStatus("Failed to send message. Please try again.");
  //     });
  // };

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Get in <span className={styles.highlight}>Touch with Us</span></h2>
          <p className={styles.description}>Please fill in the form below and let us know your thoughts!</p>
          <form className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label>Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Phone number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Message *</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              SEND INFORMATION <span className={styles.arrow}>&gt;</span>
            </button>
            
            {status && <p className={styles.statusMessage}>{status}</p>}
          </form>
        </section>
      </div>

    </div>
  );
};

export default Contact;