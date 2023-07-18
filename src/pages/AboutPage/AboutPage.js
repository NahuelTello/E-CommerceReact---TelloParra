import React, { useEffect, useState } from 'react'
import './AboutPage.css'
import Spinner from '../../components/Spinner/Spinner'
import { collection, query, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material'
const AboutPage = () => {
  const [description, setAbout] = useState([])
  const [isLoading, setIsLoading] = useState(true);

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
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className='Spinner'>
          <Spinner />
        </div>
      ) : (
        
        <div className='Container'>
          {description.map((data) => {
            return (
              <div key={data.id}>
                <CardMedia component='img'
                  image={data.image}
                  title={data.id}
                  sx={{ width: '700px', height: '150px', display: 'flex', margin: 'auto', marginBottom: '15px' }}/>
                <Typography 
                  variant='h4'
                  sx={{
                    display: 'flex',
                    margin: 'auto',
                    marginTop:'25px',
                    width: '1000px',
                    height: '1000px',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    marginBottom:'20px'
                  }}
                >
                  {data.description}
                </Typography>
                
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default AboutPage