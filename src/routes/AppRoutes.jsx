import { Routes, Route } from 'react-router-dom';

import MainLayout from '../components/Layout/MainLayout/MainLayout';

// Import các trang Home, Contact và các trang con của Solutions, Products
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';

// Import các trang chi tiết sản phẩm của Solutions
import HPC from '../pages/Solutions/HPC/HPC';
import AntiDDoS from '../pages/Solutions/AntiDDoS/AntiDDoS';
import IPSec from '../pages/Solutions/IPSec/IPSec';
import IdsIps from '../pages/Solutions/IdsIps/IdsIps';

// Import các trang sản phẩm chính của Products
import HPCPlatforms from '../pages/Products/HPC/HPCPlatforms';
import NetworkingDevices from '../pages/Products/NetworkingDevices/NetworkingDevices';
import CyberSecurity from '../pages/Products/CyberSecurity/CyberSecurity';
import Cryptography from '../pages/Products/Cryptography/Cryptography';

// Import các trang chi tiết sản phẩm của NetworkingDevices
import SdnSwitch from '../pages/ProductDetail/SdnSwitch.jsx/SdnSwitch';
import LayerSwitch from '../pages/ProductDetail/LayerSwitch/LayerSwitch';

// Import các trang chi tiết sản phẩm của CyberSecurity
import AntiDDoS_Device from '../pages/ProductDetail/AntiDDoS/AntiDDoS_Device';
const AppRoutes = () => {
  return (
    <Routes>
        {/* Route cha sử dụng MainLayout */}
        <Route path="/" element={<MainLayout />}>
          {/* Các Route con sẽ được render vào vị trí <Outlet /> trong MainLayout */}
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          
          {/* Đường dẫn cho Solutions */}
          <Route path="solutions/hpc" element={<HPC />} />
          <Route path="solutions/anti-ddos" element={<AntiDDoS />} />
          <Route path="solutions/ipsec" element={<IPSec />} />
          <Route path="solutions/ids-ips" element={<IdsIps />} />
          
          {/* Đường dẫn cho Products */}
          <Route path="products/hpc-platforms" element={<HPCPlatforms />} />
          <Route path="products/networking-devices" element={<NetworkingDevices/>} />
          <Route path="products/cyber-security" element={<CyberSecurity />} />
          <Route path="products/cryptography" element={<Cryptography />} />
          
          {/* Đường dẫn cho các sản phẩm trong NetworkingDevices */}
          <Route path="products/networking-devices/sdn-switch" element={<SdnSwitch />} />
          <Route path="products/networking-devices/layer-2-3-4-switch" element={<LayerSwitch />} />

          {/* Đường dẫn cho các sản phẩm trong CyberSecurity */}
          <Route path="products/cyber-security/anti-ddos-device" element={<AntiDDoS_Device />} />
        </Route>
      </Routes>
    );
};

export default AppRoutes;
