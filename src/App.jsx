
import './App.css';
import { Footer } from './Components/Footer';
import Header from './Components/Header';
import Partners from './Components/Partners';
import Testimonials from './Components/Testimonials/Testimonials';
import { Work } from './Components/Work/Work';
function App() {
  return (

   <>
    <div>
      <Header />
     <Work/>
      <Partners />
      <Testimonials />
      <Footer/>
    </div>

   </>

  )
}
export default App;