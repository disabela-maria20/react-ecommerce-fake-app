import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { instance } from "../../server/instance";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loading from "../Loading";

interface CategoryProps {
  id: number;
  name: string;
}

const GETcategory = async () => {
  const response = await instance.get("/categories");
  return response.data;
};

function Menu() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: GETcategory,
  });

  if (isLoading) {
    return <Loading color="'primary'" />;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary mb-3"
      >
        <Container fluid>
          <>
            <Link to={`/`} className="fs-3 link-light text-decoration-none">
              E-commerce
            </Link>
          </>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                {data?.map((category: CategoryProps) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.name}`}
                    className="nav-link"
                  >
                    {category.name}
                  </Link>
                ))}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
