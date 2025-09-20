import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usercontext from './context';

const Paymentmethod = () => {
const[address,setaddress]=useState()
const[hname,sethname]=useState()
const[acc,setacc]=useState()
const[pincode,setpincode]=useState()
const[phone,setphone]=useState()
const navigate=useNavigate()

const{orderid}=useContext(usercontext)



  const submit=async()=>{
 const data={address,hname,acc,pincode,phone,orderid}


try{

    const result= await fetch(`http://localhost:8000/payment`,{

        method:'post',
        body:JSON.stringify(data),
        headers:{
            'Content-type':"application/json; charset=UTF-8"
        }
    }) 
     
    const res= await result.json()
    if(res.statuscode===1){
        alert("data send")
        navigate({
            pathname:'/showpayment',
            search:`?id=${orderid}`
        })
        
    }
    else{
        alert("not send")
    }



}catch(err){
    console.log(err)
}
   }


  return (
    <div>
      <style>{`
        .payment-container {
          max-width: 500px;
          margin: 50px auto;
          padding: 30px;
          background: linear-gradient(135deg, #e0eafc, #cfdef3);
          border-radius: 15px;
          font-family: Arial, sans-serif;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .payment-container h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .payment-container label {
          display: block;
          margin: 10px 0 5px;
          color: #444;
          font-weight: bold;
        }

        .payment-container input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          margin-bottom: 15px;
          font-size: 16px;
        }

        .payment-container button {
          width: 100%;
          padding: 12px;
          background-color: #007BFF;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        .payment-container button:hover {
          background-color: #0056b3;
        }
      `}</style>

      <div className="payment-container">
        <h2>Payment Method</h2>
        <div>
          <label>Address</label>
          <input type="text" placeholder="Enter address" onChange={(e)=>setaddress(e.target.value)} />

          <label>Holder Name</label>
          <input type="text" placeholder="Enter holder name" onChange={(e)=>sethname(e.target.value)}/>

          <label>Account Number</label>
          <input type="text" placeholder="Enter account number" onChange={(e)=>setacc(e.target.value)}/>

          <label>Pincode</label>
          <input type="text" placeholder="Enter pincode" onChange={(e)=>setpincode(e.target.value)}/>

          <label>Phone Number</label>
          <input type="text" placeholder="Enter phone number" onChange={(e)=>setphone(e.target.value)}/>

          <button onClick={submit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Paymentmethod;