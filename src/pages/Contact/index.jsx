import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Contact.module.css";
import emailjs from '@emailjs/browser';
import asc_logo_white from '../../assets/image/global/logo_white_without_text.svg';

const Contact = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    from_name: "",
    from_phone: "",
    from_email: "",
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // 1. Lấy thời gian hiện tại
    const now = new Date();
    const formattedDate = now.toLocaleDateString("vi-VN"); // Ví dụ: 17/04/2026
    const formattedTime = now.toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' }); // Ví dụ: 17:05

    // 2. Tạo đối tượng gửi đi bao gồm formData + ngày giờ
    const templateParams = {
      ...formData,
      date: formattedDate, // Khớp với {{date}} trong template của bạn
      time: formattedTime, // Khớp với {{time}} trong template của bạn
    };

    const serviceID = "service_3o3hqd7";
    const templateID = "template_4ueiksc";
    const publicKey = "0Qn40eICZlgxW-zEM";

    // 3. Gửi templateParams thay vì gửi formData trực tiếp
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ from_name: "", from_phone: "", from_email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send:", err);
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Get in <span className={styles.highlight}>Touch with Us</span></h2>
          <p className={styles.description}>Please fill in the form below and let us know your thoughts!</p>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Name *</label>
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                required
                value={formData.from_name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Phone number *</label>
              <input
                type="tel"
                name="from_phone"
                placeholder="Enter your phone number"
                required
                value={formData.from_phone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Email *</label>
              <input
                type="email"
                name="from_email"
                placeholder="Enter your email"
                required
                value={formData.from_email}
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