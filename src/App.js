import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import Service from './component/Service';
import Contact from './component/Contact';
import About from './component/About';
import {Routes, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/service' element={<Service/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/about' element={<About/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
