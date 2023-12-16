
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
const [amount,setamount]=useState("")
const [rate,setrate]=useState("")
const [year,setyear]=useState("")

const[interest,setinterest]=useState("0")
console.log(amount,rate,year);
function calculate(e){
  const output=(amount*rate*year)/100
  console.log(output);
  setinterest(output)
}
function reset1(e){
  setinterest("0")
setamount(0)
setrate(0)
setyear(0)
}
  return (
    <div className="App">
     <div className="container">
     <div className="header">
     <h1 style={{textShadow: "1px 3px 3px rgba(40, 0, 0, 0.52)"}}>Simple Interest Calculator</h1>
      <p style={{color:"white",textShadow: "1px 3px 3px rgba(40, 0, 0, 0.52)"}}>calculate your simple interest with us ❤️</p>  
      </div> 
      <div className="total">
        <h2>&#8377; {interest}</h2>
        <p>Your Total  Interest</p>
        </div>  
        <div className="form">
          <div className="input">
        {/* <form action=""> */}
<TextField onChange={(eve)=>setamount(eve.target.value)}  value={amount||""}  style={{marginTop:"15px"}} id="filled-basic" label="Amount" variant="filled" />
<TextField onChange={(eve)=>setrate(eve.target.value)}  value={rate||""} style={{marginTop:"15px"}} id="filled-basic" label="Rate" variant="filled" />
<TextField  onChange={(eve)=>setyear(eve.target.value) }  value={year||""} style={{marginTop:"15px"}} id="filled-basic" label="Year" variant="filled" />
        {/* </form> */}

          </div>
          <div className="button">
<Button onClick={e=>calculate(e)}  variant="contained">Calculate</Button>
<Button onClick={e=>reset1(e)} variant="outlined">Reset</Button>
          </div>
        </div>
     </div>

    </div>
  );
}

export default App;
