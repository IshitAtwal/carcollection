import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Showpayment = () => {
const[address,setaddress]=useState()
const[hname,sethname]=useState()
const[acc,setacc]=useState()
const[pincode,setpincode]=useState()
const[phone,setphone]=useState()
const[or,setor]=useState()
 

 const[params]=useSearchParams()
 const id=params.get('id')

    useEffect(()=>{
show()
    },[])


 const show=async()=>{
try{
const result= await fetch(`http://localhost:8000/spayment/${id}`,{
            method:"get"
        })
    
        const res= await result.json()
      if(res.statuscode===1){
 setaddress(res.data.address)
sethname(res.data.holder)
setacc(res.data.acc)
setpincode(res.data.pincode)
setphone(res.data.contact)
setor(res.data.orderid)

       }
      else{
                console.log(" not data fetch")
      }
      }
catch(err){
    console.log(err)
}
     }


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        padding: '30px',
        width: '100%',
        maxWidth: '500px'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#2d3748',
          marginBottom: '30px',
          paddingBottom: '15px',
          borderBottom: '2px solid #e2e8f0'
        }}>Payment Details</h2>
        
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li style={listItemStyle}>
            <span style={labelStyle}>Address:</span> 
            <span style={valueStyle}>{address}</span>
          </li>
          <li style={listItemStyle}>
            <span style={labelStyle}>Account Holder:</span> 
            <span style={valueStyle}>{hname}</span>
          </li>
          <li style={listItemStyle}>
            <span style={labelStyle}>Account Number:</span> 
            <span style={valueStyle}>{acc}</span>
          </li>
          <li style={listItemStyle}>
            <span style={labelStyle}>Pincode:</span> 
            <span style={valueStyle}>{pincode}</span>
          </li>
          <li style={listItemStyle}>
            <span style={labelStyle}>Contact:</span> 
            <span style={valueStyle}>{phone}</span>
          </li>
          <li style={listItemStyle}>
            <span style={labelStyle}>Order ID:</span> 
            <span style={{...valueStyle, color: '#3182ce'}}>{or}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

// Inline style objects
const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px 15px',
  borderBottom: '1px solid #edf2f7'
}

const labelStyle = {
  fontWeight: '600',
  color: '#4a5568',
  minWidth: '140px'
}

const valueStyle = {
  color: '#2d3748',
  textAlign: 'right',
  flex: 1
}

export default Showpayment