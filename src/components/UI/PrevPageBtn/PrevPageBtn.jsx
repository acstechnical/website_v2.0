import {Link, useNavigate} from "react-router-dom";
import styles from "./PrevPageBtn.module.css";
import { ArrowLeft } from "react-feather";

const PrevPageBtn = ({linkTo}) => {
    const navigate = useNavigate();

    const handleBack = () => {
    if (linkTo) {
      // Nếu có truyền đích đến cụ thể (vd: về danh sách sản phẩm)
      navigate(linkTo);
    } else {
      // Mặc định: Quay lại đúng trang vừa xem trong lịch sử
      navigate(-1);
    }
  };
    return (
        <section className={styles.backSection}>
            <div className={styles.container}>
                {/* <Link to={linkTo} className={styles.backButton}>
                    <ArrowLeft size={20} />
                    <span>See more our networking devices</span>
                </Link> */}
                <button onClick={handleBack} className={styles.backButton}>
                    <ArrowLeft size={20} />
                    <span>See more our networking devices</span>
                </button>
            </div>
        </section>
    );
};

export default PrevPageBtn;
