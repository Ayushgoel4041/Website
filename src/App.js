// my app .jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './Home/Home';
// import axios from 'axios';
import Navbar from './components/Navbar';
import { About, Blog, Contact, Men, Women, Kids, Cart } from './Home/import';
import Footer from './Home/Footer';
import DetailPage from './Home/detailPage';

// axios.defaults.baseURL = 'http://localhost:7070';
// axios.defaults.withCredentials = true;

function App() {

  return (
    <div className="App">
   
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/About' element={<About />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Men' element={<Men />} />
          <Route path='/Women' element={<Women />} />
          <Route path='/Kids' element={<Kids />} />
          <Route path='/Footer' element={<Footer />} />
          <Route path='/DetailPage/:id' element={<DetailPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;