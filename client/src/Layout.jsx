import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import LiveChatWidget from "../src/components/LiveChatWidget";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <LiveChatWidget />
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
