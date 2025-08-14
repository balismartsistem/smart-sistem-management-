// src/pages/Dashboard.jsx
import React from 'react';
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Dashboard({ username, handleLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/'); // Arahkan kembali ke halaman login setelah logout
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/dashboard">SSM Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#data">Data</Nav.Link>
              <Nav.Link href="#administrasi">Administrasi</Nav.Link>
              <Nav.Link href="#management">Management</Nav.Link>
              <Nav.Link href="#laporan">Laporan</Nav.Link>
              <Nav.Link href="#setting">Setting</Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Text className="me-3">
                Signed in as: <b>{username}</b>
              </Navbar.Text>
              <Button variant="outline-light" onClick={handleLogoutClick}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h1 className="mb-4">Selamat Datang di Halaman Dashboard!</h1>
        <Card className="p-4 shadow-sm">
          <Card.Body>
            <Card.Title>Smart Sistem Management</Card.Title>
            <Card.Text>
              Ini adalah halaman utama setelah Anda berhasil masuk. Di sini Anda bisa
              mengelola semua fitur yang tersedia melalui menu navigasi di atas.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Dashboard;
