import React, { useState } from 'react';
import axios from 'axios';
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import UserForm from './Registration/RegisterForm';
import LoginForm  from './Registration/Login';
import Header from './Header';
import Weather from './Weather';


function App() {
  return(
<>


<BrowserRouter>
 <Header/>
      <Routes>
        
        <Route path="/SignUp" element={<UserForm />}/>
        <Route path="/Login" element={<LoginForm />}/>
        <Route path='/Weather' element={< Weather/> }/>
        
      </Routes>
    </BrowserRouter>

</>


  )
  ;
}

export default App;
