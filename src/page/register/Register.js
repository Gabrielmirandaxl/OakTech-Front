import React,{useState} from "react";
import './Register.css'
import axios from 'axios'
import {Navigate} from 'react-router-dom'
const Register = () =>{


  const[product, setProduct] = useState("")
  const[desc, setDesc] = useState("")
  const[valueProduct, setValueProduct] = useState("")
  const[available, setAvailable] = useState("sim")
  const[page, setPage] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!product || !desc || !valueProduct || !available){
      alert("preencha todos os campos")
    }
    else{
      axios.post("http://localhost:8080/product", {
        product: product,
        desc: desc,
        valueProduct: Number(valueProduct),
        available: available,
      })
      .then((response) =>{
       
        setDesc("")
        setValueProduct("")
        setProduct("")
        setPage(true)
        console.log(response)
    
      })
      .catch((response) =>{
     
      })
    }

  }
console.log({desc, product, available, valueProduct})
  return(
    <>
    {page ?  <Navigate to="/" replace={true}/> : ""}
      <div className="container">

        <form className="form" onSubmit={handleSubmit}>

          <div className="dados">
            <label htmlFor="product">Produto:</label>
            <input 
            type="text" 
            name="product"
            onChange={(e) => setProduct(e.target.value)} 
            value={product}
            />
          </div>

          <div className="dados">
            <label htmlFor="valueProduct">valor:</label>
            <input 
            type="number" 
            name="valueProduct"
            onChange={(e) => setValueProduct(e.target.value)} 
            value={valueProduct}
            />
          </div>

          <div className="dados">
            <label htmlFor="available">Disponivel:</label>
           <select 
           name="available"
           onChange={(e) => setAvailable(e.target.value)}
           value={available}
           >
            <option value="sim">Sim</option>
            <option value="não">Não</option>
           </select>
          </div>

          <div className="dados">
            <label htmlFor="desc">Descrição:</label>
            <textarea 
            name="desc" 
            cols="30" 
            rows="10"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            >

         </textarea>
          </div>

           <button type="submit">Cadastrar</button>

        </form>

      </div>
    </>
  )
}

export default Register