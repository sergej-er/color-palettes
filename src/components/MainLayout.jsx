import React from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <Content style={{ marginTop: 64 }}>{children}</Content>
    </Layout>
  );
};

export default MainLayout;
