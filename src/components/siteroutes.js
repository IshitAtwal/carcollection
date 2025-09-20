import React from 'react'
import { Route, Routes } from 'react-router-dom'
 
import Addcar from './addcar'
import Landingpage from './landingpage'
import Addsubcars from './addsubcars'
import Sublandingpage from './sublandingpages'
import Showcar from './showcar'
import Showsubcar from './showsubcar'
import RentForm from './rentform'
import Paymentmethod from './paymentmethod'
import Showpayment from './showpayment'
import Login from './login'
import Signup from './signup'
import Aboutus from './aboutus'
import News from './news'
import Contact from './contact'


const Siteroutes = () => {
  return (
    <div>
      
<Routes>
<Route path='/addcar' element={<Addcar />}/>
<Route path='/' element={<Landingpage/>}/>
<Route path='/addsubcars' element={<Addsubcars/>}/>
{/* <Route path='/showsubcategory' element={<Showsubcategory/>}/> */}
{/* <Route path='/showsub' element={<Sublandingpage/>}/> */}
<Route path='/showcar' element={<Showcar/>}/>
<Route path='/showsubcar' element={<Showsubcar/>}/>
<Route path='/rentform' element={<RentForm/>}/>
<Route path='/paymentmethod' element={<Paymentmethod/>}/>
<Route path='/showpayment' element={<Showpayment/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/aboutus' element={<Aboutus/>}/>
<Route path='/news' element={<News/>}/>
<Route path='/contact' element={<Contact/>}/>


</Routes>


    </div>
  )
}

export default Siteroutes
