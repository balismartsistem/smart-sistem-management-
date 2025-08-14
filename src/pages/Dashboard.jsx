// src/pages/Dashboard.jsx
import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaBars, FaBell, FaUserCircle, FaProjectDiagram, FaTasks, FaUsers, FaChartLine } from 'react-icons/fa';
import './Dashboard.css'; // File CSS baru untuk styling tambahan

function Dashboard({ username, handleLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar - navigasi sebelah kiri */}
      <div className="bg-dark text-white border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Dash UI</div>
        <div className="list-group list-group-flush">
          <Nav.Link href="#dashboard" className="list-group-item list-group-item-action bg-dark text-white active">
            <FaTachometerAlt className="me-2" /> Dashboard
          </Nav.Link>
          <div className="list-group-item list-group-item-action bg-dark text-white">
            <small>LAYOUTS & PAGES</small>
          </div>
          <Nav.Link href="#pages" className="list-group-item list-group-item-action bg-dark text-white">
            Pages
          </Nav.Link>
          <Nav.Link href="#authentication" className="list-group-item list-group-item-action bg-dark text-white">
            Authentication
          </Nav.Link>
          <Nav.Link href="#layouts" className="list-group-item list-group-item-action bg-dark text-white">
            Layouts
          </Nav.Link>
          <div className="list-group-item list-group-item-action bg-dark text-white">
            <small>UI COMPONENTS</small>
          </div>
          <Nav.Link href="#components" className="list-group-item list-group-item-action bg-dark text-white">
            Components
          </Nav.Link>
        </div>
      </div>

      {/* Konten utama */}
      <div id="page-content-wrapper" className="flex-grow-1">
        {/* Navbar utama di atas */}
        <Navbar bg="light" expand="lg" className="border-bottom shadow-sm">
          <Container fluid>
            <Button variant="outline-secondary" id="menu-toggle" className="d-lg-none"><FaBars /></Button>
            <Form className="d-flex mx-auto">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="rounded-pill"
                style={{ width: '400px' }}
              />
            </Form>
            <Nav>
              <Nav.Link href="#notifications"><FaBell className="text-secondary" /></Nav.Link>
              <Nav.Link href="#profile"><FaUserCircle className="text-secondary" /></Nav.Link>
              <Button variant="primary" onClick={handleLogoutClick}>Logout</Button>
            </Nav>
          </Container>
        </Navbar>

        {/* Isi dashboard */}
        <Container fluid className="mt-4 p-4 bg-light">
          <h1 className="mb-4">Projects</h1>
          <Button variant="primary" className="mb-4">Create New Project</Button>
          
          <Row className="mb-4">
            <Col md={3}>
              <Card className="p-3 shadow-sm rounded">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-0">Projects</h5>
                    <p className="h3 mb-0">18</p>
                    <small>2 Completed</small>
                  </div>
                  <FaProjectDiagram size={40} className="text-secondary" />
                </div>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-3 shadow-sm rounded">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-0">Active Task</h5>
                    <p className="h3 mb-0">132</p>
                    <small>28 Completed</small>
                  </div>
                  <FaTasks size={40} className="text-secondary" />
                </div>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-3 shadow-sm rounded">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-0">Teams</h5>
                    <p className="h3 mb-0">12</p>
                    <small>1 Completed</small>
                  </div>
                  <FaUsers size={40} className="text-secondary" />
                </div>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-3 shadow-sm rounded">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-0">Productivity</h5>
                    <p className="h3 mb-0">76%</p>
                    <small>5% Completed</small>
                  </div>
                  <FaChartLine size={40} className="text-secondary" />
                </div>
              </Card>
            </Col>
          </Row>

          <h2 className="mb-4">Active Projects</h2>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Hours</th>
                      <th>Priority</th>
                      <th>Members</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dropbox Design System</td>
                      <td>34</td>
                      <td><span className="badge bg-warning text-dark">Medium</span></td>
                      <td>
                        <div className="d-flex align-items-center">
                          {/* Contoh placeholder avatar */}
                          <img src="https://placehold.co/32x32/gray/white?text=A" className="rounded-circle me-1" />
                          <img src="https://placehold.co/32x32/gray/white?text=B" className="rounded-circle me-1" />
                          <img src="https://placehold.co/32x32/gray/white?text=C" className="rounded-circle me-1" />
                        </div>
                      </td>
                      <td>15%</td>
                    </tr>
                    <tr>
                      <td>Slack Team UI Design</td>
                      <td>47</td>
                      <td><span className="badge bg-danger">High</span></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src="https://placehold.co/32x32/gray/white?text=A" className="rounded-circle me-1" />
                          <img src="https://placehold.co/32x32/gray/white?text=B" className="rounded-circle me-1" />
                        </div>
                      </td>
                      <td>35%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;
