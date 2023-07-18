import React, { useState, useEffect } from 'react'

import CardProduct from '../CardProduct/CardProduct'

import './ListProduct.css'

//firebase - firestore
import {collection , query, getDocs} from "firebase/firestore"
import {db} from "../../firebase/firebaseConfig"
import Spinner from '../Spinner/Spinner'
import { Link } from 'react-router-dom'
/* import { Link } from '@mui/material' */
const ListProduct = () => {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db,"producto"))
      const docs = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id})
      })
      setProduct(docs)
    }
    getProducts()
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className='spinner'>
          <Spinner/>
        </div>
      ) : (
          <div className='ProductsListContainer'>
            {product.map((data) => {
              return (
                <div key={data.id}>
                  <Link to={`product-detail/${data.id}`}
                    style={{ textDecoration: "none" }}
                    key={data.id} >
                    <CardProduct product={data} />
                  </Link>
                  
                </div>
              )
            })}
          </div>
      )}
    </div>
  )
}

export default ListProduct