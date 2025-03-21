import Footer from '@/components/MainPage/Footer';
import Header from '@/components/MainPage/Header';
import React from 'react'


interface layoutProps {
    children: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div style={{backgroundColor: "#f6f6f6"}}>
        <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default layout
