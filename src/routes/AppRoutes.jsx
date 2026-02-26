import { Routes, Route } from 'react-router-dom';

import MainLayout from '../components/Layout/MainLayout/MainLayout';

// Import các trang Home, Contact và các trang con của Solutions, Products
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';

import HPC from '../pages/Solutions/HPC/HPC';
import AntiDDoS from '../pages/Solutions/AntiDDoS/AntiDDoS';
import IPSec from '../pages/Solutions/IPSec/IPSec';
import IdsIps from '../pages/Solutions/IdsIps/IdsIps';

import HPCPlatforms from '../pages/Products/HPC/HPCPlatforms';
import NetworkingDevices from '../pages/Products/NetworkingDevices/NetworkingDevices';


import SdnSwitch from '../pages/ProductDetail/SdnSwitch.jsx/SdnSwitch';
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

          {/* Đường dẫn cho các sản phẩm trong NetworkingDevices */}
          <Route path="products/networking-devices/sdn-switch" element={<SdnSwitch />} />
        </Route>
      </Routes>
    );
};

export default AppRoutes;
