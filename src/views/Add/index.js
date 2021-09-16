import  Dashboard  from '../Dashboard';
import { useState } from 'react';
import { DataEntry } from '../../config/Firebase';
function Add(){
    const [pageChange,setPageChange] = useState(false)
    const [text,setText] = useState('')
    const [images] = useState([])
    const [price,setPrice] = useState()
    const [fullName,setFullName] = useState('')
    const [contactNumber,setContactNumber] = useState()
    const [quantityOfInput,setQuantityOfInput] = useState([])
    const [button,setButton] = useState(false)
    const click = () =>
    {
      setPageChange(true);
    }
    
    const submitFunction = () =>
    {
      DataEntry(text,images,price,fullName,contactNumber);
      setButton(true);
    }
    return(
    <div>
        {
        pageChange? <Dashboard /> : 
        <div>
          <fieldset>
            <legend>ADD DETAILS</legend>
            <label>TITLE:</label><input type = "text" onChange = {(e)=>setText(e.target.value)} />
            <label>PRICE:</label><input type = "text" onChange = {(e)=>setPrice(e.target.value)} />
      <br />
      <label>Image Address:</label><input type = "text" onChange = {(e)=>images.push(e.target.value)} />
      {
        quantityOfInput.length <4?<button onClick = {()=>setQuantityOfInput([...quantityOfInput,1])}>+</button>:<></>
      }
      {
        quantityOfInput.map(()=>
        {
          return  <div><label>Image Address:</label> <input type = "text" onChange = {(e)=>images.push(e.target.value)} /></div>
        })
      }
          </fieldset>
          <fieldset>
            <legend>USER DETAILS</legend>
            <label>Full Name:</label><input type = "text" onChange = {(e)=>setFullName(e.target.value)} />
            <label>Contact Number:</label><input type = "text" onChange = {(e)=>setContactNumber(e.target.value)} />
          </fieldset>
          <br />
          {
            button?  <button onClick = {click}>DashBoard</button> :  <button onClick = {submitFunction} >Submit</button>
          }
        </div>
        }
    </div>
    );
}
export default Add;
