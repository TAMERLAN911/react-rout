import {Routes, Route, Link} from 'react-router-dom'

import {Homepage} from './pages/HomePage/Homepage'
import {Features} from './pages/Features/Features'
import {Blogpage} from './pages/Blogpage'
import {Contact} from './pages/Contact'
import './App.css'
function App() {
  return (
   <>
   <header>
     <div className='cover'>
       <h1>Cover</h1>
     </div>
     <div className='headerLink'>
     <Link to="/">Home</Link>
     <Link to="/posts">Features</Link>
     <Link to="/about">Contact</Link>
     </div>
   </header>
   <body className='body'>
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/about' element={<Contact />} />
    <Route path='/posts' element={<Features />} />
    
  </Routes>
  </body>

  <footer className='footer'>
    <p>Cover template for <a href=''>Bootstrap</a>, by <a href=''>@mdo</a>.</p>
  </footer>

   </>
  );
}

export default App;
