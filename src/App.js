import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {NotFound} from './pages/NotFound'
import {Contact} from './pages/Contact'
import {About} from './pages/About'
import {Home} from './pages/Home'
import {Category} from './pages/Category'
import {Recipe} from './pages/Recipe'

import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom'

function App() {
  return ( 
      <> 
      <Router>
          <Header/>
            <main className='container content'>          
                <Routes>
                    <Route exact path ="/" element ={<Home/>} />
                    <Route path ="/about" element ={<About/>} />
                    <Route path ="/contact" element ={<Contact/>} />
                    <Route path ="/category/:name" element ={<Category/>} />
                    <Route path ="/meal/:id" element ={<Recipe/>} />
                    <Route element ={<NotFound/>} />
                </Routes>
            </main>
          <Footer/>
        </Router>
      </>
  );
}

export default App;
