"use client"

import Link from "next/link"
import { Container, Nav, Navbar } from "react-bootstrap"

export default function NavBar() {
    return(
        <Navbar bg='primary' variant="dark" sticky='top' expand='sm' collapseOnSelect >
            <Container>
                <Navbar.Brand as={Link}>
                    <Link href='/'>
                        Next.js 13.4 Image Gallery
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='main-navbar' />
                <Navbar.Collapse id='main-navbar' />
                    <Nav>
                        <Nav.Link href='/hello'>Hello</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}