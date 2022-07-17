import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Profile,
  Home,
  Contact,
  Footer
} from './components';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>  
          <Route path="/blog" element={<Home />} />
          <Route path="/blog/about" element={<Profile />} />
          <Route path="/blog/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
