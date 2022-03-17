import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Connect from './Components/Connect';
import About from './Components/About';


const App = () => {

  return (
    <BrowserRouter>
    
        <div className="container">
      
          <Header />
          <div className='components'>
          
          <Routes>
            {/* <Route  path='/' children={Home} /> */}
            <Route  path="/about" element={<About/>} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route exact={true} path='/connect' element={< Connect />} />
          </Routes>
          </div>
          <Footer />
        </div>
 
    </BrowserRouter>

  );
}

export default App;
