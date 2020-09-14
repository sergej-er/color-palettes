import React, { useState, useContext } from 'react';
import ColorPicker from './ColorPicker';
import { Row, Col, Typography, Button } from 'antd';
import MainLayout from './MainLayout';
import { firestore, timestamp } from '../config/firebase';
import { AuthContext } from './Auth';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;

const Create = () => {
  const [firstColor, setFirstColor] = useState('#ffffff');
  const [secondColor, setSecondColor] = useState('#ebebeb');
  const [thirdColor, setThirdColor] = useState('#d6d6d6');
  const [fourthColor, setFourthColor] = useState('#c2c2c2');
  let history = useHistory();
  const { currentUser } = useContext(AuthContext);

  const handleCreate = () => {
    firestore
      .collection('palettes')
      .add({
        colors: [firstColor, secondColor, thirdColor, fourthColor],
        createdAt: timestamp(),
        createdBy: currentUser.uid,
      })
      .then((docRef) => {
        console.log('Document written, ID: ' + docRef.id);
        history.push('/palettes');
      })
      .catch(function (error) {
        alert(error);
      });
  };

  console.log({ firstColor, secondColor, thirdColor, fourthColor });
  return (
    <MainLayout>
      <div className='create-palette'>
        <Title level={3} className='title'>
          Create a Color Palette
        </Title>
        <Row justify='center'>
          <Col span={6}>
            <ColorPicker key={1} color={firstColor} setColor={setFirstColor} />
          </Col>
        </Row>
        <Row justify='center'>
          <Col span={6}>
            <ColorPicker
              key={2}
              color={secondColor}
              setColor={setSecondColor}
            />
          </Col>
        </Row>
        <Row justify='center'>
          <Col span={6}>
            <ColorPicker key={3} color={thirdColor} setColor={setThirdColor} />
          </Col>
        </Row>
        <Row justify='center'>
          <Col span={6}>
            <ColorPicker
              key={4}
              color={fourthColor}
              setColor={setFourthColor}
            />
          </Col>
        </Row>
        <Row justify='center'>
          <Button shape='round' className='done-btn' onClick={handleCreate}>
            Done
          </Button>
        </Row>
      </div>
    </MainLayout>
  );
};

export default Create;
