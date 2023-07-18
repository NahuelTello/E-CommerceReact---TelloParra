import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
/* import './CategoryPage.css' */

import Spinner from '../../components/Spinner/Spinner'
import CardProduct from '../../components/CardProduct/CardProduct'

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import './CategoryPage.css'


const CategoryPage = () => {
  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const {brand} = useParams()
  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, 'producto'),
        where('brand', '==', brand)
      )
      const docs = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })

      setProductData(docs)
    }
    getProduct()
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
  }, [brand]);
  


  return (
    <div className='CategoryContainer'>
      {isLoading ? (
        <div className='Spinner'>
          <Spinner />
        </div>
      ) : (
        productData.map((data) => {
          return (
            <div key={data.id}>
              <Link to={`/product-detail/${data.id}`}
              style={{ textDecoration: "none" }}
              key={data.id} >
              <CardProduct product={data}  />
            </Link>

          </div>)
        })
    )}
    </div>
  )
}

export default CategoryPage