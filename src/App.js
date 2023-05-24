
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import NavBar from "./NavBar";
import Contact from "./Contact";
import About from "./About";

function App() {
return(
<div>

  <Router>
 <NavBar/>
<Routes>
<Route path="/"/>
<Route path="/about" element= {<About/>}/>
<Route path="/contact" element = {<Contact/>}/>

</Routes >

  </Router>

  </div>
  
  )
}

export default App;
