import { FC } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import useStyles from './styles';
const MyNavbar: FC<{ handleService: any }> = ({ handleService }) => {
    const classes = useStyles();

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to="/home">
                        <Navbar.Brand>
                            Auto Repair
                        </Navbar.Brand>
                    </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <LinkContainer to="/service">
                                <Nav.Link >Service</Nav.Link>
                            </LinkContainer>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNavbar 