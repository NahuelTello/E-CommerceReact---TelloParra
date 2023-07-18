import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { 
  collection,
  query,
  where,
  getDocs,
  documentId, } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import Spinner from '../../components/Spinner/Spinner'
import CardProductDetail from '../../components/CardProductDetail/CardProductDetail'

const DetailPage = () => {
  const [productData, setProductsData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams()


  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "producto"),
      where(documentId(), '==', id))
      const docs = []
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setProductsData(docs)
    }
    getProducts()
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div className='Spinner'>
          <Spinner />
        </div>
      ) : (
        <div className='container'>
            {productData.map((data) => {
            return (
              <div key={data.id}>
                <CardProductDetail product={data}/>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default DetailPage