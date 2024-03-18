
import './App.scss'; // Importing the styles for the app - Created in sass

import {  Routes, Route } from "react-router-dom"; // Importing the Routes and Route components from react-router-dom
// importing the component pages for the routes
import Layout from './components/Layout/Layout';
import About from './components/about/About'
import Home from './components/Home/Home'
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';



function App() {
  // start of the app function 
  return (
<>
  <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
</>
  );
}
// exproting the app function
export default App;
