import React from "react";
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.style.scss'


const Header = () => (
    <div className="header">
         <Link to="/">
            <Logo className="logo" />
        </Link>
    </div>
)


export default Header;