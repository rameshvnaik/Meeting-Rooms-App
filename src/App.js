
import './App.css';
import { useState } from 'react'
import Footer from './components/Footer';
import Rooms from './components/Rooms';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyBooking from './components/MyBooking';
import { RoomData } from './components/Api'

const App = () => {
  
  const [data, setData] = useState(RoomData);
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/'  element={<Header />}>
      <Route  index  element={<Rooms data={data} setData={setData}/>} />
     <Route path='mybooking' element={<MyBooking data={data} setData={setData}/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


export default App;
