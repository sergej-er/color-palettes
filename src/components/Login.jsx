import React, { useContext } from 'react';
import { Button, Typography } from 'antd';
import { googleAuth } from '../config/firebase';
import { GoogleOutlined } from '@ant-design/icons';
import { AuthContext } from './Auth';
import { Redirect } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Login = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/palettes' />;
  }

  return (
    <div className='login'>
      <Title level={1}>Paletty</Title>
      <Title level={4}>Create and share color palettes</Title>
      <Button
        type='primary'
        icon={<GoogleOutlined />}
        onClick={googleAuth}
        className='login-btn'
      >
        Login
      </Button>
      <div className='login-footer'>
        <Paragraph>
          Inspired by <a href='https://colorhunt.co'>colorhunt.co</a>
        </Paragraph>
        <Paragraph>(work in progress)</Paragraph>
      </div>
    </div>
  );
};

export default Login;
