import React from 'react'
import './Product.css'

const Product = ({product, value, available, desc}) =>{
 
  return(
      <>

      <div className='product'>
       
        <div className='infor-product'>
          <h3>{product}</h3>
          <span className='value'>Valor: R${value}</span>
          <span>Disponivel: {available}</span>
        </div>
       
       <div className='desc'>
        <h3>Descrição</h3>
         <p>{desc}</p>
       </div>

      </div>
      
      </>
  )
}

export default Product