// import node module libraries
import { Container } from 'react-bootstrap';

import { Col, Row, Form, Card, Button, Image } from "react-bootstrap";
import Link from "next/link";

const EditUser = () => {
  return (
    <Container fluid className="p-6">

      <Row className="mb-8">
        <Col xl={12} lg={12} md={12} xs={12}>
          <Card>
            {/* card body */}
            <Card.Body>
              <div className=" mb-6">
                <h4 className="mb-1">Username</h4>
              </div>
              <Row className="align-items-center mb-8">
                <Col md={3} className="mb-3 mb-md-0">
                  <h5 className="mb-0">Avatar</h5>
                </Col>
                <Col md={9}>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <Image
                        src="/images/avatar/avatar-5.jpg"
                        className="rounded-circle avatar avatar-lg"
                        alt=""
                      />
                    </div>
                    <div>
                      <Button
                        variant="outline-white"
                        className="me-2"
                        type="submit"
                      >
                        Change{" "}
                      </Button>
                      <Button variant="outline-white" type="submit">
                        Remove{" "}
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
              <div>
                <Form>
                  {/* row */}
                  <Row className="mb-3">
                    <label
                      htmlFor="fullName"
                      className="col-sm-4 col-form-label
                    form-label"
                    >
                      Full name
                    </label>
                    <div className="col-md-8 col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        id="fullName"
                        required
                      />
                    </div>
                  </Row>
                  {/* row */}
                  <Row className="mb-3">
                    <label
                      htmlFor="email"
                      className="col-sm-4 col-form-label
                    form-label"
                    >
                      Email
                    </label>
                    <div className="col-md-8 col-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        required
                      />
                    </div>
                  </Row>
                  {/* row */}
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="phone">
                      Phone
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="text"
                        placeholder="Enter Phone"
                        id="phone"
                      />
                    </Col>
                  </Row>

                  {/* Point */}
                  <Row className="align-items-center">
                    <Form.Label className="col-sm-4" htmlFor="point">
                      Point
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="text"
                        placeholder="Enter point"
                        id="point"
                        required
                      />
                    </Col>

                    <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                      <Link
                        href="/pages/users/list"
                        className="btn btn-outline-primary"
                      >
                        Cancle
                      </Link>
                      <Button variant="primary" type="submit" className="mx-4">
                        Save Changes
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default EditUser;