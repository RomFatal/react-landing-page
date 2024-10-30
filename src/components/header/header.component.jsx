import React from "react";
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.style.scss'


const Header = () => (
    <div className="header absolute left-[20%] top-[10%]">
         <Link to="/">
            <Logo fill="#ffffff" className="logo" />
        </Link>
    </div>
)


export default Header;