import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Home from './Home/Home';
import Layout from './Layout/Layout';
import Login from './Login/Login';
import MovieDetails from './MovieDetails/MovieDetails';
import Movies from './Movies/Movies';
import NotFound from './NotFound/NotFount';
import People from './People/People';
import PeopleDetails from './PeopleDetails/PeopleDetails';
import ProutectedRoute from './ProutectedRoute/ProutectedRoute';
import Register from './Register/Register';
import Search from './Search/Search';
import Tv from './Tv/Tv';
import TvDe from './TvDe/TvDe';



function App() {
  const [isLogin, setIsLogin] = useState(false);
  const[userName , setUserName]= useState('')
  const Routes = createHashRouter([
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
