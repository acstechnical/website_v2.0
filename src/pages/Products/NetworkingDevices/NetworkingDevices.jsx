import { useEffect } from "react";
import styles from "./NetworkingDevices.module.css";
import PageTitle from "../../../components/Layout/PageTitle/PageTitle";
import ProductList from "../../../components/UI/ProductList/ProductList";
import { data } from "./data";

import backgroundVideo from "../../../assets/video/networking-devices_product_background.mp4";
const NetworkingDevices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        document.title = "Networking Devices - Acronics";
    }
    , []);

    return (
        <div>
            {/* 1. Page title */}
            <PageTitle title="NETWORKING DEVICES" videoSrc={backgroundVideo} />

            {/* 2. Content section */}
            <ProductList data={data} />
        </div>

    );
};

export default NetworkingDevices;