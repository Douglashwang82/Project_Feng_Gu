import { FC } from 'react'
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { LinkContainer } from 'react-router-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import useStyles from './styles';
// import {Link, Typography} from '@mui/material';
// import {Grid} from '@mui/material';

import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, BrandLabel, NavLinkBrand} from './NavbarElements';


const MyNavbar: FC<{ handleService: any }> = ({ handleService }) => {
    // const classes = useStyles();

    return (
        <>
        <Nav>
            <NavLinkBrand to="/home">
                <BrandLabel>CARS REPAIR</BrandLabel>
            </NavLinkBrand>
            <Bars />
            <NavMenu>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/services' >
                    Services
                </NavLink>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
                {/* <NavLink to='/sign-up'>
                    Sign Up
                </NavLink> */}
            </NavMenu>
                {/* <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn> */}
            <span></span>
        </Nav>
        </>
    );
}

export default MyNavbar 