import React, { useContext } from 'react';
import { Layout, Menu, Typography, Avatar } from 'antd';
import { AuthContext } from './Auth';
import { auth } from '../config/firebase';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className='navbar'>
        <div className='navbar__left'>
          <Link to='/palettes'>
            <Title level={3} style={{ marginBottom: '0' }}>
              Paletty
            </Title>
          </Link>
        </div>
        <div className='navbar__right'>
          <Menu theme='dark' mode='horizontal'>
            <SubMenu
              icon={<Avatar src={currentUser.photoURL} className='avatar' />}
              title={currentUser.displayName}
            >
              <Menu.Item key='create'>
                <Link to='/palettes/create'>Create</Link>
              </Menu.Item>
              <Menu.Item key='logout' onClick={() => auth.signOut()}>
                Logout
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
