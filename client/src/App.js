import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Profile,
  Home,
  Contact,
  Footer,
  BlogPost,
} from './components';


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>  
          <Route path="/blog" element={<Home />} />
          <Route path="/blog/about" element={<Profile />} />
          <Route path="/blog/contact" element={<Contact />} />
          <Route path="/blog/post:id" element={<BlogPost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
