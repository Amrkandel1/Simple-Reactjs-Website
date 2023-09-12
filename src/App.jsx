import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const routers=createHashRouter([
    {path:'' ,element:<Layout/> , children:[
      {index:true ,element:<Home/>},
      {path:'ABOUT' ,element:<About/>},
      {path:'PORTFOLIO' ,element:<Portfolio/>},
      {path:'CONTACT' ,element:<Contact/>},
      {path:'' ,element:<Navbar/>},
      {path:'*' ,element:<Notfound/>}
    ]}
  ])
  return (
    <>
    
    <RouterProvider  router={routers}  />
    
    </>
    
  );
}

export default App;
