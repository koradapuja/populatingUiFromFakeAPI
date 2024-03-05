
import { useEffect, useState } from 'react';
import './App.css';

function App() {
let[products,setProducts]=useState([]);

useEffect(()=>{
  getDataFromServer()
  
},[])

  let getDataFromServer= async()=>{
    let reqOptions={
      Method:"GET",
    };
   let JsonData= await fetch("https://fakestoreapi.com/products",reqOptions)
  let JsoData= await JsonData.json()
  setProducts(JsoData)
  console.log(JsoData);
  } 
  return (
    <div className='App'>
      <div className='container'>
{products.map((ele)=>{
  return <div className='container'>
  <div className='productDiv'>
    <img  className='productImg' src={ele.image} title={ele.description}></img>
    <p>{ele.title}</p>
    <p>₹.{ele.price}</p>
  </div>
</div>
})}</div> 
 <button onClick={()=>{
  getDataFromServer();
 }}>submit</button>
    </div>
  );
}

export default App;
