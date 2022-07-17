import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from  'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {
    return (
        <div className='Header'>
            <Navbar >
                <Container>
                    <Navbar.Brand >BTT's Blog</Navbar.Brand>
                    <Nav className="nav-button-list">
                        <NavLink className = "nav-button" to="/blog" >Home</NavLink>
                        <NavLink className = "nav-button" to="/blog/about">About me</NavLink>
                        <NavLink className = "nav-button" to="/blog/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
                    </div> 
    )
}

export default Header;
