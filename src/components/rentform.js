import React, { useContext, useState } from 'react';
import usercontext from './context';
import { useNavigate } from 'react-router-dom';

const RentForm = () => {
const{selectedCar}=useContext(usercontext)
const[passengerName,setpassengerNAme]=useState()
const[carModel,setcarModel]=useState()
const[days,setdays]=useState()
const[pickupdate,setpickupdate]=useState()
const[address,setaddress]=useState()
const[idproof,setidproof]=useState()
const[contact,setcontact]=useState()
const[notes,setnotes]=useState()

 
 const{setorderid}=useContext(usercontext)
const navigate=useNavigate()
 

  const submit = async () => {
 const data={passengerName,carModel,days,pickupdate,address,idproof,contact,notes,carModel: selectedCar.brand,}

    try {
      const result = await fetch("http://localhost:8000/booking", {
        method: "post",
        body: JSON.stringify(data),
        headers:{
'Content-Type': 'application/json; charset=UTF-8'        }
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
const a=()=>{
            const b=Math.random(1000,10000)
            setorderid(b)
            navigate("/paymentmethod")
        }


  return (
    <div style={styles.container}>
      {/* Background Overlay */}
      <div style={styles.backgroundOverlay}></div>
      
      {/* Form Container */}
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Car Rental Booking</h2>
        <p style={styles.subHeading}>Reserve your dream car in just a few clicks</p>
        
        <div style={styles.form}>
          {/* Two Column Layout for First Row */}
          <div style={styles.row}>
            {/* Passenger Name */}
            <div style={styles.formGroup}>
              <label htmlFor="passengerName" style={styles.label}>
                <i className="fas fa-user" style={styles.icon}></i> Passenger Name*
              </label>
              <input
                type="text"
                id="passengerName"
                placeholder="Enter full name"
                style={styles.input}
                required
                onChange={(e)=>setpassengerNAme(e.target.value)}
              />
            </div>

            {/* Car Selection */}
            <div style={styles.formGroup}>
        <label htmlFor="carModel" style={styles.label}>
          <i className="fas fa-car" style={styles.icon}></i> Selected Car*
        </label>
        <input
          type="text"
          id="carModel"
          value={selectedCar ? selectedCar.brand : ''}
          style={styles.input}
          readOnly
          onc
         />
      </div>
          </div>

          {/* Two Column Layout for Second Row */}
          <div style={styles.row}>
            {/* Rental Duration */}
            <div style={styles.formGroup}>
              <label htmlFor="rentalDays" style={styles.label}>
                <i className="fas fa-calendar-alt" style={styles.icon}></i> Rental Days*
              </label>
              <input
                type="number"
                id="rentalDays"
                min="1"
                max="30"
                placeholder="Number of days"
                style={styles.input}
                required
                onChange={(e)=>setdays(e.target.value)}
              />
            </div>

            {/* Pickup Date */}
            <div style={styles.formGroup}>
              <label htmlFor="pickupDate" style={styles.label}>
                <i className="fas fa-calendar-day" style={styles.icon}></i> Pickup Date*
              </label>
              <input
                type="date"
                id="pickupDate"
                style={styles.input}
                required
                onChange={(e)=>setpickupdate(e.target.value)}
              />
            </div>
          </div>

          {/* Customer Address */}
          <div style={styles.formGroup}>
            <label htmlFor="customerAddress" style={styles.label}>
              <i className="fas fa-map-marker-alt" style={styles.icon}></i> Address*
            </label>
            <textarea
              id="customerAddress"
              placeholder="Enter full address"
              rows="3"
              style={styles.textarea}
              required
              onChange={(e)=>setaddress(e.target.value)}
            ></textarea>
          </div>

          {/* Two Column Layout for Third Row */}
          <div style={styles.row}>
            {/* Customer ID */}
            <div style={styles.formGroup}>
              <label htmlFor="customerId" style={styles.label}>
                <i className="fas fa-id-card" style={styles.icon}></i> ID/Passport*
              </label>
              <input
                type="text"
                id="customerId"
                placeholder="Enter ID or passport"
                style={styles.input}
                required
                onChange={(e)=>setidproof(e.target.value)}
              />
            </div>

            {/* Contact Information */}
            <div style={styles.formGroup}>
              <label htmlFor="contactNumber" style={styles.label}>
                <i className="fas fa-phone" style={styles.icon}></i> Contact Number*
              </label>
              <input
                type="tel"
                id="contactNumber"
                placeholder="Enter phone number"
                style={styles.input}
                required
                onChange={(e)=>setcontact(e.target.value)}
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div style={styles.formGroup}>
            <label htmlFor="additionalNotes" style={styles.label}>
              <i className="fas fa-edit" style={styles.icon}></i> Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              placeholder="Any special requirements"
              rows="2"
              style={styles.textarea}
              onChange={(e)=>setnotes(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitButton}>
              <span style={styles.buttonText} onClick={a}>Book Now</span>
              <i className="fas fa-paper-plane" style={styles.buttonIcon}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal CSS styles with animations and gradients
const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundImage: 'url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    fontFamily: "'Poppins', sans-serif",
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.6)',
      zIndex: 1
    }
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(41,128,185,0.8) 0%, rgba(109,213,250,0.8) 100%)',
    animation: 'gradientShift 10s ease infinite',
    backgroundSize: '200% 200%',
    zIndex: 1
  },
  formContainer: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '900px',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: '15px',
    padding: '40px',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
    transform: 'translateY(0)',
    transition: 'transform 0.5s ease',
    '&:hover': {
      transform: 'translateY(-5px)'
    }
  },
  heading: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '10px',
    fontSize: '32px',
    fontWeight: '700',
    background: 'linear-gradient(to right, #3498db, #2c3e50)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'gradientShift 5s ease infinite',
    backgroundSize: '200% 200%'
  },
  subHeading: {
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: '30px',
    fontSize: '16px',
    fontWeight: '400'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  row: {
    display: 'flex',
    gap: '20px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '25px'
    }
  },
  formGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2c3e50',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  icon: {
    color: '#3498db',
    fontSize: '16px'
  },
  input: {
    padding: '14px 15px',
    borderRadius: '8px',
    border: '2px solid #ecf0f1',
    fontSize: '15px',
    transition: 'all 0.3s ease',
    outline: 'none',
    backgroundColor: '#f8f9fa',
    '&:focus': {
      borderColor: '#3498db',
      boxShadow: '0 0 0 3px rgba(52,152,219,0.2)'
    }
  },
  select: {
    padding: '14px 15px',
    borderRadius: '8px',
    border: '2px solid #ecf0f1',
    fontSize: '15px',
    backgroundColor: '#f8f9fa',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:focus': {
      borderColor: '#3498db',
      boxShadow: '0 0 0 3px rgba(52,152,219,0.2)'
    }
  },
  textarea: {
    padding: '14px 15px',
    borderRadius: '8px',
    border: '2px solid #ecf0f1',
    fontSize: '15px',
    resize: 'vertical',
    minHeight: '100px',
    backgroundColor: '#f8f9fa',
    transition: 'all 0.3s ease',
    '&:focus': {
      borderColor: '#3498db',
      boxShadow: '0 0 0 3px rgba(52,152,219,0.2)'
    }
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  },
  submitButton: {
    padding: '16px 40px',
    background: 'linear-gradient(to right, #3498db, #2c3e50)',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 4px 15px rgba(52,152,219,0.3)',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 20px rgba(52,152,219,0.4)',
      '&:before': {
        left: '100%'
      }
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      transition: 'all 0.5s ease'
    }
  },
  buttonText: {
    position: 'relative',
    zIndex: 1
  },
  buttonIcon: {
    fontSize: '16px',
    position: 'relative',
    zIndex: 1
  },
  // Keyframes for animation (would need to be implemented with CSS-in-JS library or global CSS)
  '@keyframes gradientShift': {
    '0%': {
      backgroundPosition: '0% 50%'
    },
    '50%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  }
};

export default RentForm;