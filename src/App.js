import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import AboutPage from './Components/AboutPage/AboutPage';
import AwqafPage from './Components/AwqafPage/AwqafPage';
import ContactUs from './Components/ContactUs/ContactUs';
import AdvancedSearch  from './Components/AdvancedSearch/AdvancedSearch';
import NotFound  from './Components/NotFound/NotFound';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WaqfDetails from './Components/WaqfDetails/WaqfDetails';

function App() {

  let routers =createBrowserRouter([
    {path:'', element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:'about' , element:<AboutPage/>},
      {path:'awqaf' , element:<AwqafPage/>},
      {path:'advancedsearch' , element:<AdvancedSearch/>},
      {path:'advancedsearch/:searchQuerys' , element:<AdvancedSearch/>},
      {path:'contact' , element:<ContactUs/>},
      {path:'waqfdetails/:id' , element:<WaqfDetails/>},
      {path:'*' , element:<NotFound/>},
      
    ]}
  ])
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
