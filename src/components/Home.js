import React, { useState } from 'react'
import data from './Data'
function Home() {
  const [input, setInput] = useState();
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount=parseInt(input)
    if(input<=0){
      alert('enter the number greater than 1')
      amount=0
    }
    if(input>0){
      amount+=amount
    }
    setText(data.slice(0,amount))

  }
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-10'>
          <form onSubmit={handleSubmit}>
            <input type='number' className='form-control' placeholder='enter the amount which  you wanna to generate random paragraph' name='amount' value={input} onChange={(e) => setInput(e.target.value)} />
            <button className='btn btn-success mt-3'  >Generate paragrapgh</button>
          </form>

          {text.map((item,index)=>{
            return <p className='text-white'>{item}</p>
          })}
        </div>
      </div>


    </div>
  )
}

export default Home