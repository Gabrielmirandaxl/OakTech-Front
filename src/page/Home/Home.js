import React,{useEffect, useState} from 'react'
import axios from 'axios'
//components
import Product from '../../components/product/Products'
const Home = () =>{

  const[products, setProducts] = useState([])

  useEffect(() =>{
   axios.get("http://localhost:8080/products")
   .then((response) => {
    setProducts(response.data)
   })
   .catch(() =>{
    window.location.reload()
   })
  }, [])

  return(
    <>
    <h1>produtos</h1>
   <div className='list'>
   
   {products.map((item) => {
    return(
      <>
     <Product
      product={item.product}
      value={item.valueProduct}
      available={item.available}
      desc={item.desc}
      />
      </>
    )
   })}
   </div>
    </>
  )
}

export default Home