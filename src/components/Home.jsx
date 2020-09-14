import React from 'react';
import MainLayout from './MainLayout';
import useFirestore from '../hooks/useFirestore';
import { Card, message } from 'antd';
import { chooseBestColor, hexToRGB } from '../helpers';
import LikeButton from './LikeButton';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Home = () => {
  const { docs } = useFirestore('palettes');

  const copyColorCode = () => {
    message.success('Color copied to clipboard!');
  };

  return (
    <MainLayout>
      <div className='palette-list'>
        {docs.map((doc) => (
          <Card key={doc.id} className='palette-card'>
            <div>
              {doc.colors.map((color, i) => (
                <CopyToClipboard text={color} onCopy={copyColorCode}>
                  <div
                    key={`${doc.id}${i}`}
                    style={{
                      backgroundColor: color,
                      color: chooseBestColor(hexToRGB(color)),
                      height: 96 - i * 16,
                    }}
                    className='palette-swatch'
                  >
                    <span>{color}</span>
                  </div>
                </CopyToClipboard>
              ))}
            </div>
            <LikeButton docId={doc.id} />
          </Card>
        ))}
      </div>
    </MainLayout>
  );
};

export default Home;
