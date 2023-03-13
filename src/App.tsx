import 'bootstrap/dist/css/bootstrap.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import { AppRoutes } from './Routes';
import { Navbar, Container, Nav } from 'react-bootstrap'



function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Hadith Analyzer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Analyze</Nav.Link>
            <Nav.Link href="/hadiths">Hadiths</Nav.Link>
            <Nav.Link href="/rawis">Rawis</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container >
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;
