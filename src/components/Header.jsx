import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import '../css/custom.css'

export const Header = () => {
    return(
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#">Virtual Dreams</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarcollapse" />
                <Navbar.Collapse id="navbarcollapse">
                    <Nav>
                            <Nav.Link href="#">Inicio</Nav.Link>
                            <Nav.Link href="#">Servicio</Nav.Link>
                            <Nav.Link href="#">Quiénes Somos</Nav.Link>
                            <Nav.Link href="#">Búsqueda</Nav.Link>
                            <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}