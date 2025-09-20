import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Showcar = () => {
   
  const[show,setshow]=useState([])


useEffect(()=>{
    submit()
},[])

    const submit=async()=>{
        try{

            const result=await fetch("http://localhost:8000/showcar",{
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
  return (
 <div>
  <section className="popular-car-section pt_120 pb_90 grey-bg">
        <div className="container">
          <div className="section-title centred mb_60">
            <span className="sub-title">Popular Cars</span>
            <h2 className="title">Most Popular Cars</h2>
          </div>
         <div style={{ display: "flex", flexWrap: "wrap", margin: "-15px" }}>
  {show.map((data) => (
    <div
      key={data._id}
      style={{
        width: "100%",
        padding: "15px",
        boxSizing: "border-box",
        maxWidth: "33.3333%", // 3 columns on xl/lg, auto stacks on small
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div style={{ position: "relative" }}>
          <Link to={`/showsubcar?id=${data._id}`}>
            <img
              src={`uploads/${data.file}`}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </Link>
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              backgroundColor: "#fff",
              padding: "5px 10px",
              borderRadius: "4px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            <span style={{ color: "#333" }}>${data.price || 49}</span>/ Day
          </div>
        </div>

        <div style={{ padding: "15px", flexGrow: 1 }}>
          <div style={{ marginBottom: "10px", fontWeight: "bold", color: "#555" }}>
            ⭐ 4.8
          </div>
          <h5 style={{ margin: "0 0 10px", fontSize: "18px", color: "#222" }}>
            {data.brand}
          </h5>
          <p style={{ margin: "0 0 10px", color: "#666", fontSize: "14px" }}>
            {data.description}
          </p>
          <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "10px 0" }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "14px", color: "#444" }}>
            <li style={{ marginBottom: "5px" }}>🚪 Doors: {data.doors}</li>
            <li>🧍 Passengers: {data.passenger}</li>
          </ul>
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

export default Showcar