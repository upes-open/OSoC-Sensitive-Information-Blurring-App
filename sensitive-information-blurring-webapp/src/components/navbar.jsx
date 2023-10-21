import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navbarstyles.css';


function NavBar(props) {
    return (
        <>
            <Navbar collapseOnSelect expand="md" className='navbar' fixed='top' sticky='top'>
                <Container>
                    <Navbar.Brand href="" className='navTitle'>{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className='navLink'>Home</Nav.Link>
                            <Nav.Link href="/privacy" className='navLink'>Privacy Policy</Nav.Link>
                            <Nav.Link href="/faq" className='navLink'>FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;