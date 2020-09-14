import { useState, useEffect } from 'react';
import { firestore } from '../config/firebase';

const useFirestoreNested = (collection, docId, subcollection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = firestore
      .collection(collection)
      .doc(docId)
      .collection(subcollection)
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsub();
  }, [collection, docId, subcollection]);

  return { docs };
};

export default useFirestoreNested;
