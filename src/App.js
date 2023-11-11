import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Login from './Login/Login';
import Movies from './Movies/Movies';
import Register from './Register/Register';
import NotFound from './NotFound/NotFount';
import About from './About/About';
import People from './People/People';
import Tv from './Tv/Tv';
import MovieDetails from './MovieDetails/MovieDetails';
import TvDe from './TvDe/TvDe';
import PeopleDetails from './PeopleDetails/PeopleDetails';
import { BrowserRouter , RouterProvider, createBrowserRouter } from 'react-router-dom';
import Search from './Search/Search';
import { useState , useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import ProutectedRoute from './ProutectedRoute/ProutectedRoute';



function App() {
  const [isLogin, setIsLogin] = useState(false);
  const[userName , setUserName]= useState('')
  const Routes = createBrowserRouter([
    {path:'/' , element:<Layout isLogin={isLogin} setIsLogin={setIsLogin} userName={userName}/> , children: [
      {index: true , element:<Register/>},
      {path: 'login' , element:<Login setIsLogin={setIsLogin}/>},
      {path: '/moviedetails/:MovieId' , element:<MovieDetails/>},
      {path:'/tvdetails/:TvId' , element:<TvDe/> },
      {path:'/peopledetails/:PeopleId' , element:<PeopleDetails/> },
      {path: 'home' , element:<ProutectedRoute> <Home/></ProutectedRoute>},
      {path: 'search' , element: <Search/>},
      {path: 'movies' , element: <ProutectedRoute><Movies/></ProutectedRoute>},
      {path: 'tv' , element: <ProutectedRoute><Tv/></ProutectedRoute>},
      {path: 'people' , element: <ProutectedRoute><People/></ProutectedRoute>},
      {path: 'About' , element: <ProutectedRoute><About/></ProutectedRoute>},
      {path: '*' , element:<NotFound/>},
    
      
    ]} 
  ])

  
  
  useEffect(() => {
   
   if (localStorage.getItem('token')) {
    let token = localStorage.getItem('token');
    let userdata = jwtDecode(token);
    setUserName(userdata.first_name);
   
   }
    
  }, [isLogin])
  
  return <>
<RouterProvider router={Routes}/>

  </>
  ;
}

export default App;
