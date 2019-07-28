import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/sound-wave.png';
import { Navbar, Nav } from 'react-bootstrap';

import './header.component.scss';

const Header = () => {
    return (
        // <div className='header'>
        //     <Link className='logo-container' to='/'>
        //         <img src={logo} alt='logo' className='logo' />
        //     </Link>
        //     <div className='options'>
        //         <Link className='option' to='/poster'>
        //             POSTER
        //         </Link>
        //         <Link className='option' to='/references'>
        //             REFERENCES
        //         </Link>
        //         <Link className='option' to='/sample_audio'>
        //             SAMPLES
        //         </Link>
        //     </div>
        // </div>
        <Navbar bg="light" variant="light" className='navbar'>
            <Navbar.Brand href="/">Speech Emotion Analysis</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/references">References</Nav.Link>
                <Nav.Link href="/poster">Poster</Nav.Link>
                <Nav.Link href="/sample_audio">Sample Audio</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;