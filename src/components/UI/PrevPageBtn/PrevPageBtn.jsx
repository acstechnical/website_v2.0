import {Link} from "react-router-dom";
import styles from "./PrevPageBtn.module.css";
import { ArrowLeft } from "react-feather";

const PrevPageBtn = ({linkTo}) => {
    return (
        <section className={styles.backSection}>
            <div className={styles.container}>
                <Link to={linkTo} className={styles.backButton}>
                    <ArrowLeft size={20} />
                    <span>See more our networking devices</span>
                </Link>
            </div>
        </section>
    );
};

export default PrevPageBtn;