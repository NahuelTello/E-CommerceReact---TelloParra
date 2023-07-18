import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
const Header = () => {
  const [description, setAbout] = useState([])

  useEffect(() => {
    const getDescription = async () => {
      const q = query(collection(db, "about"))
      const docs = []
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setAbout(docs)
    }
    getDescription()
  }, []);
  return (
    <div className='header-container'>
      {description.map((data) => {
        return (
          <div key={data.id}>
            <Link to='/'>
              <CardMedia component='img'
                image={data.image}
                title={data.id}
                sx={{ width: '700px', height: '150px', display: 'flex', margin: 'auto', marginBottom: '15px' }} />
            </Link>
          </div>
        )
      })}
      
    </div>
  )
}

export default Header