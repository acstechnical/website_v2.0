import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import style from './MainLayout.module.css';
const MainLayout = () => {
  return (
    <div className={style.layoutWrapper}>
      {/* Header sẽ luôn hiển thị ở trên cùng */}
      <Header />
      
      {/* Outlet là nơi nội dung các trang (Home, HPC, Contact...) sẽ được render (thay đổi) */}
      <main className={style.mainContent}>
        <Outlet />
      </main>

      {/* Footer sẽ nằm ở đây */}
      <Footer />
    </div>
  );
}

export default MainLayout;