import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Connect from './Components/Connect';


const App = () => {

  return (
    <BrowserRouter>
      <div className='main'>
        <div className="container">
          <Header />
          <div className='components'>
          <Routes>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/about' component={About} />
            <Route exact={true} path='/portfolio' component={Portfolio} />
            <Route exact={true} path='/connect' component={Connect} />
          </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
