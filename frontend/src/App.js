import './App.css';
// import "./js/vendor/jquery"
import { HashRouter, HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import BlogDetail from './Pages/BlogDetail';
import Portfolio from './Pages/Portfolio';
import PortfolioDetail from './Pages/PortfolioDetail';


function App() {
  return (
    <>
       <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route  path='/blog' element={<Blog/>}/>
          <Route  path='/portfolio' element={<Portfolio/>}/>
          <Route  path='/blog/:slug' element={<BlogDetail/>}/>
          <Route  path='/portfolio/:slug' element={<PortfolioDetail/>}/>
        </Routes>
       </HashRouter>
    </>
  );
}

export default App;
