import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Addcar from './components/addcar';
import Landingpage from './components/landingpage';
import Addsubcars from './components/addsubcars';
import Siteroutes from './components/siteroutes';
import RentForm from './components/rentform';
import usercontext from './components/context';
import { useEffect, useState } from 'react';
import Userheader from './components/userheader';
import Footer from './components/footer';

function App() {

 const [username, setusername] = useState();
  const [selectedCar, setSelectedCar] = useState(null); 
  const[orderid,setorderid]=useState()

   const[flag,setflag]=useState(()=>sessionStorage.getItem("flag"))

  const [usertype,setusertype]=useState(null)

  useEffect(()=>{
    if(flag==="user"){
      setusertype("user")
    }else if(flag==="admin"){
      setusertype("admin")
    }
  },[flag])

  useEffect(()=>{
  if(flag){
    sessionStorage.setItem("flag",flag)
  }

  },[flag])




   return (
    <>

    
    <usercontext.Provider value={{ username, setusername, selectedCar, setSelectedCar,orderid,setorderid,setflag }}>
    {usertype==="admin"?<Header/>:<Userheader/>}
 <Siteroutes />
 <Footer/>
 </usercontext.Provider>
 {/* <RentForm /> */}
    </>
  );
}

export default App;
