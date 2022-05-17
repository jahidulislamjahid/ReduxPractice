import './Styles/home.scss';
import { BrowserRouter as Routing, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Readinglist from './Components/Readinglist';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <Routing>
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/readinglist' element={<Readinglist/>}/>
      </Routes>
      <Footer/>
    </Routing>
  );
}

export default App;
