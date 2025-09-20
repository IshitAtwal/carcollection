import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import usercontext from './context';

const Showsubcar = () => {
   
  const[show,setshow]=useState([])
  const[params]=useSearchParams()
const {setusername,setSelectedCar}=useContext(usercontext)


  const id=params.get('id')

const Navigate=useNavigate()
useEffect(()=>{
    submit()
},[])

    const submit=async()=>{
        try{

            const result=await fetch(`http://localhost:8000/showsubcars/${id}`,{
            method:"get",
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        const res=await result.json();
        if(res.statuscode==1){
            setshow(res.data)
            
        }else{
            console.log("data not fetch")
        }

        }
        catch(err){
            console.log(err)
        }
    }


      const handleRentNow = (car) => {
    setSelectedCar(car);
    Navigate('/rentform');
  }
  return (
 <div>
  <section className="popular-car-section pt_120 pb_90 grey-bg">
        <div className="container">
          <div className="section-title centred mb_60">
            <span className="sub-title">Popular Cars</span>
            <h2 className="title">Most Popular Cars</h2>
          </div>
     <div className="row" style={{ display: "flex", flexWrap: "wrap", margin: "-15px" }}>
  {show.map((data) => (
    <div
      key={data._id}
      className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
      style={{
        width: "100%",
        padding: "15px",
        boxSizing: "border-box",
        maxWidth: "33.3333%",
      }}
    >
      <div
        className="single-popular-car-block"
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        {/* Image container with relative position */}
        <div
          className="single-popular-car-image"
          style={{
            position: "relative",
            width: "100%",
            height: "250px",
            overflow: "hidden",
          }}
        >
             <img
              src={`uploads/${data.file}`}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
 
          {/* Price overlay in top-right corner */}
          <div
            className="single-popular-car-rent-per-day"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "#ffffffcc", // semi-transparent white
              padding: "6px 12px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "14px",
              color: "#333",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              zIndex: 1,
            }}
          >
            <span>${data.price || 49}</span> / Day
          </div>
        </div>

        {/* Car content */}
        <div
          className="single-popular-car-content"
          style={{ padding: "15px", flexGrow: 1 }}
        >
          <div
            className="single-popular-car-rating"
            style={{ marginBottom: "10px", fontWeight: "bold", color: "#555" }}
          >
            <i className="icon-9"></i> 4.8
          </div>
          <h5
            className="single-popular-car-title"
            style={{ margin: "0 0 10px", fontSize: "18px", color: "#222" }}
          >
            {data.brand}
            
          </h5>
          <p
            className="single-popular-car-text"
            style={{ margin: "0 0 10px", color: "#666", fontSize: "14px" }}
          >
            {data.description}
          </p>
          <div
            className="border-divider"
            style={{ borderTop: "1px solid #eee", margin: "10px 0" }}
          ></div>
          <ul
            className="single-popular-car-info"
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "14px",
              color: "#444",
            }}
          >
            <li style={{ marginBottom: "5px" }}>
              <i className="icon-6"></i> Doors: {data.doors}
            </li>
            <li>
              <i className="icon-8"></i> Passengers: {data.passenger}
            </li>
          </ul>

          {/* Button */}
               <div className="single-popular-car-book-btn" style={{ marginTop: "15px" }}>
        <button
          onClick={() => handleRentNow(data)}
          className="btn-style-three"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            textAlign: "center",
            border: "none",
            cursor: "pointer"
          }}
        >
          Rent now
        </button>
      </div>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>


 </div>
  )
}

export default Showsubcar