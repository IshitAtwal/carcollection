import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Addcar = () => {
  const [brand, setbrand] = useState()
  const [description, setdescription] = useState()
  const [file, setfile] = useState()
  const [doors, setdoors] = useState()
  const [passenger, setpassenger] = useState()


    const[show,setshow]=useState([])
  
  
  useEffect(()=>{
      showcar()
  },[])



  const submit = async () => {
    const formdata = new FormData()
    formdata.append("brand", brand)
    formdata.append("description", description)
    formdata.append("file", file)
    formdata.append("doors", doors)
    formdata.append("passenger", passenger)

    try {
      const result = await fetch("http://localhost:8000/addcar", {
        method: "post",
        body: formdata,
      })

      const res = await result.json()
      if (res.statuscode == 1) {
        alert("datasend")
      }
      else {
        console.log("not send")
      }
    }
    catch (err) {
      console.log(err)
    }
  }






  
      const showcar=async()=>{
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
      <style>
        {`
          .form-container {
            max-width: 600px;
            margin: 40px auto;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .form-container h2 {
            text-align: center;
            margin-bottom: 25px;
            color: #2c3e50;
            font-size: 28px;
            font-weight: 600;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #34495e;
            font-size: 14px;
          }

          .form-group input {
            width: 100%;
            padding: 12px 15px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 15px;
            transition: all 0.3s;
          }

          .form-group input:focus {
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
            outline: none;
          }

          button {
            width: 100%;
            padding: 12px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 10px;
          }

          button:hover {
            background-color: #2980b9;
          }

          .file-input-container {
            position: relative;
            overflow: hidden;
          }

          .file-input-container input[type="file"] {
            position: absolute;
            font-size: 100px;
            opacity: 0;
            right: 0;
            top: 0;
          }

          .file-input-label {
            display: inline-block;
            padding: 12px 15px;
            background-color: #f8f9fa;
            border: 1px dashed #ddd;
            border-radius: 6px;
            width: 100%;
            text-align: center;
            cursor: pointer;
            color: #7f8c8d;
          }

          .file-input-label:hover {
            background-color: #e9ecef;
          }
        `}
      </style>

      <div className="form-container">
        <h2>Add New Car</h2>
        <div className="form-group">
          <label>Car Brand</label>
          <input type="text" onChange={(e) => setbrand(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" onChange={(e) => setdescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Car Image</label>
          <div className="file-input-container">
            <label className="file-input-label">
              {file ? file.name : "Choose an image..."}
              <input type="file" onChange={(e) => setfile(e.target.files[0])} />
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Number of Doors</label>
          <input type="text" onChange={(e) => setdoors(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Passenger Capacity</label>
          <input type="text" onChange={(e) => setpassenger(e.target.value)} />
        </div>
        <button onClick={submit}>Add Car</button>
      </div>


        <section className="popular-car-section pt_120 pb_90 grey-bg">
        <div className="container">
          <div className="section-title centred mb_60">
            <span className="sub-title">Popular Cars</span>
            <h2 className="title">Most Popular Cars</h2>
          </div>
          <div className="row">

{show.map((data)=>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="single-popular-car-block">
                <div className="single-popular-car-image">
                <Link to={`/showsub?id=${data._id}`}>  <img src={`uploads/${data.file}`} alt="" /></Link>
                  <div className="single-popular-car-rent-per-day"><span>$49</span>/ Day</div>
                </div>
                <div className="single-popular-car-content">
                  <div className="single-popular-car-rating"><i className="icon-9"></i>4.8</div>
                  <h5 className="single-popular-car-title">{data.brand}</h5>
                  <p className="single-popular-car-text">{data.description}</p>
                  <div className="border-divider"></div>
                  <ul className="single-popular-car-info">
                    <li><i className="icon-6"></i>Doors: {data.doors} Doors</li>
                     <li><i className="icon-8"></i>Passengers: {data.passenger}</li>
                  </ul>
                  <div className="single-popular-car-book-btn"><a href="#" className="btn-style-three">Rent now</a></div>
                </div>
              </div>
            </div>

           

        )}
 
 
 
          </div>
        </div>
      </section>
    </div>
  )
}

export default Addcar