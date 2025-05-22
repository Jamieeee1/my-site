import { RouterProvider, 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/Homepage';
import Mainlayout from './Layouts/Mainlayout';
import Aboutme from './pages/Aboutme'
import Contactme from './pages/Contactme'
import Projects from './pages/Projects'
import Notfound from './pages/Notfound';



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout />}>
    <Route index element={<Homepage />} />
    <Route path='/aboutme' element={<Aboutme />} />
    <Route path='/contactme' element={<Contactme />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='*' element={<Notfound />} />
  </Route>
  )
);



const App = () => {
  return <RouterProvider router={router} />
}


export default App
