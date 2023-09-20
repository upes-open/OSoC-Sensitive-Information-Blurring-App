import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navbarstyles.css';


function NavBar() {
    return (
        <>
            <Navbar expand="md" className='navbar'>
                <Container>
                    <Navbar.Brand href="#home" className='navTitle'>Sensitive Info Blurring</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#" className='navLink'>Home</Nav.Link>
                            <Nav.Link href="#" className='navLink'>Privacy Policy</Nav.Link>
                            <Nav.Link href="#" className='navLink'>FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;