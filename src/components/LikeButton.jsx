import React, { useContext, useState, useEffect } from 'react';
import useFirestoreNested from '../hooks/useFirestoreNested';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { firestore } from '../config/firebase';
import { AuthContext } from './Auth';

const LikeButton = ({ docId }) => {
  const { docs } = useFirestoreNested('palettes', docId, 'likes');
  const { currentUser } = useContext(AuthContext);
  const [liked, setLiked] = useState();

  useEffect(() => {
    setLiked(docs.find((doc) => doc.user === currentUser.uid));
  }, [docs, currentUser.uid]);

  const handleLike = () => {
    if (!liked) {
      firestore
        .collection('palettes')
        .doc(docId)
        .collection('likes')
        .add({
          user: currentUser.uid,
        })
        .then((docRef) => {
          console.log('Document written, ID: ' + docRef.id);
        })
        .catch(function (error) {
          alert(error);
        });
    } else {
      firestore
        .collection('palettes')
        .doc(docId)
        .collection('likes')
        .doc(liked.id)
        .delete()
        .then(() => {
          console.log('Document deleted!');
        })
        .catch(function (error) {
          alert(error);
        });
    }
  };

  return (
    <Button
      icon={
        liked ? (
          <HeartFilled className='like-btn-icon' />
        ) : (
          <HeartOutlined className='like-btn-icon' />
        )
      }
      className='like-btn'
      onClick={handleLike}
    >
      <span>{docs.length}</span>
    </Button>
  );
};

export default LikeButton;
