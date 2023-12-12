// import node module libraries
import { Container } from 'react-bootstrap';

import { Col, Row, Form, Card, Button, Image } from "react-bootstrap";
import Link from "next/link";
import { useState } from 'react';
import { userService } from 'services/user.service';

const EditUser = ({user}) => {
  return (
    <Container fluid className="p-6">

      <Row className="mb-8">
        <Col xl={12} lg={12} md={12} xs={12}>
          <Card>
            {/* card body */}
            <Card.Body>
              <div className=" mb-6">
                <h4 className="mb-1">Username: {user.username}</h4>
              </div>
              <div>
                <Form>
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
                        defaultValue={user.gmail || ''}
                        disabled
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
                        defaultValue={user.currentPoint || ''}
                      />
                    </Col>

                    <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                      <Link
                        href="/pages/users/list"
                        className="btn btn-outline-primary"
                      >
                        Cancel
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

export async function getServerSideProps({ params}) {
  const { id } = params;

  // Fetch thông tin chi tiết người dùng từ API hoặc nguồn dữ liệu khác
  const res = await userService.getUserById(id);

  return {
    props: {
      user: res.data,
    },
  };
}