import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from './logo192.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../pages/Home';
import Rule from '../pages/Rule';
import Forum from '../pages/Forum';
import { element } from 'prop-types';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="danger" variant="dark">
                    <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    height="70"
                                    width="60"
                                    className="d-inline-block align-center"
                                    alt="logo"
                                /> ЧТО? ГДЕ? КОГДА?
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav text-right">
                                <Nav className="mx-auto">
                                    <Nav.Link href="/" active>Играть</Nav.Link>
                                    <Nav.Link href="/rule">Правила игры</Nav.Link>
                                    <Nav.Link href="/forum">Форум</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/rule" element={<Rule/>} />
                        <Route exact path="/forum" element={<Forum/>} />
                    </Routes>
                </Router>
            </>
        )
    }
}