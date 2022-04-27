import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import Card from 'react-bootstrap/Card';


export const Nav = styled.nav`
    // background:#FFB511;
    // background-color:transparent; (for opacity bg)
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    position:relative;
    z-index:4;
`

export const NavLink = styled(Link)`
    color: #000;
    opcity:0.5;
    display: flex;
    font-weight:700;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color:#4554DA;
        // color: #457EDA;
    }
    &: hover {
        // color:#457EDA;
        color: LiteBlue;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color:#fff;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: trnaslate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display:NONE;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color:#BABABA;
        color: LiteBlue;
    }
`

export const MyCard = styled(Card)`
    background: black;
`

export const BrandLabel = styled.h4`
    border: solid;
    padding: 5px;
`