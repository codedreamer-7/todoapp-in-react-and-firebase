import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";

const OpenNav = () => {

    console.log('navbar rendered')

    let ref 

    useEffect(()=>{}, [])

    return (
        <Navbar className="sticky-top" collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                About
                            </Nav.Link>
                            
                        </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export const OpenNavbar = React.memo(OpenNav);
