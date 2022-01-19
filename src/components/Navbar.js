import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';
import {Button} from "./Button";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState( true)
    const [visible, setVisible] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 992) {
           setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    const signUp = () => {
        if(window.innerWidth <= 992) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        signUp()
    }, []);

    window.addEventListener('resize', signUp);

        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-color">
                    <div className="container-fluid">
                        <Link to='/' className="navbar-brand" onClick={closeMobileMenu}>Victoria's Secret Diet</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" onClick={handleClick}/>
                        </button>

                        <div className={click ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarColor01">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home
                                        <span className="visually-hidden">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/diets' className="nav-link" onClick={closeMobileMenu}>Diets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/pricing' className="nav-link" onClick={closeMobileMenu}>Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about' className="nav-link" onClick={closeMobileMenu}>About</Link>
                                </li>
                                {visible && <li className="nav-item">
                                    <Link to='/sign-up' className="nav-link sign-up" onClick={closeMobileMenu}>Sign-up</Link>
                                </li>}
                            </ul>
                            {button && <Button buttonStyle='btn-outline'>SIGN UP</Button>}
                        </div>
                    </div>
                </nav>
            </>
        );
}

export default Navbar;