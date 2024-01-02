import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom';

import { useState } from 'react';
import NavBar from './Components/NavBar';
import HomeState from './Components/States/HomeState';
import States from './Components/States/States';
import States1 from './Components/States/States1';
import ChatApp from './Components/chat/ChatApp';
import CrudOp from './Components/States/CrudOp';
import ChangePosition from './Components/States/ChangePosition';
import HomeReducer from './Components/Reducer/HomeReducer';



function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomeState/>}/>
        <Route path='/HomeState' element={<HomeState/>}/>
        <Route path='/HomeReducer' element={<HomeReducer/>}/>
        <Route path='/States' element={<States/>}/>
        <Route path='/States1' element={<States1/>}/>
        <Route path='/ChatApp' element={<ChatApp/>}/>
        <Route path='/CrudOp' element={<CrudOp/>}/>
        <Route path='/ChangePosition' element={<ChangePosition/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
