import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import About from './components/About';
import Footer from './components/Footer';
import Hidden from './components/Hidden';
import "./App.css";

function App() {
  return (
   <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/hidden' element={<Hidden />}/>
      </Routes>
      <Footer />
   </div>
  );
}

export default App;
