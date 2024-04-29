import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';

// function - компонент

// npx create-react-app review

// jsx - html + js

// реализуйте переход по след страницам: home page, about page, contact page

const App = () => {
  return (
    <div className="App">

      <Header />
      
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/about' element={ <AboutPage /> } />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
