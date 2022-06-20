import React from 'react'
import { Col, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row } from 'reactstrap'
import logo from '../assets/images/obilet_logo.png'

const CustomNavbar = () => {
    return (
        <Navbar
            style={{ backgroundColor: '#d23b38', height: '10vh' }}
            expand="md"
            light
        >
            <Col lg="4" md="4" sm="5" xs="12" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                <NavbarBrand

                    href="/"
                >
                    <img src={logo} width="150" style={{ float: 'right' }} />
                </NavbarBrand>
            </Col>
            {/* <NavbarToggler
                className="me-2"
                onClick={function noRefCheck() { }}
            /> */}
            <Collapse navbar>
                <Col lg="8" md="8" sm="7" xs="12">
                    <Nav navbar style={{ flexDirection: 'row', justifyContent: 'end' }}>
                        <NavItem>
                            <NavLink href="/components/" style={{ color: 'white', borderRight: '1px solid white' }}>
                                Üye Girişi
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" style={{ color: 'white', borderRight: '1px solid white' }}>
                                Biletlerim
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" style={{ color: 'white', borderRight: '1px solid white' }}>
                                Yardım
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
            </Collapse>
        </Navbar>
    )
}

export default CustomNavbar