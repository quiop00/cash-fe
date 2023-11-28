// import node module libraries
import { Container, Form } from 'react-bootstrap';

import { Col, Row, Card, Button } from "react-bootstrap";
import Link from "next/link";

const EditPaymentMethod = () => {
  return (
    <Container fluid className="p-6">
      <Row className="mb-8">
        <Col xl={12} lg={12} md={12} xs={12}>
          <Card>
            {/* card body */}
            <Card.Body>
              <div className=" mb-6">
                <h4 className="mb-1">Add Payment Method</h4>
              </div>
              <Form>
                <Row className="mb-3">
                  <div className="col-sm-3">Name</div>
                  <div className="col-md-9 col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Method name"
                      id="methodName"
                      required
                    />
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-3">Symbol</div>
                  <div className="col-md-9 col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$"
                      id="symbol"
                      required
                    />
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-3">Exchange (coin - 1 $)</div>
                  <div className="col-md-9 col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="1000"
                      id="exchange"
                      required
                    />
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-3">Hint</div>
                  <div className="col-md-9 col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter paypal account"
                      id="hint"
                      required
                    />
                  </div>
                </Row>
                {/* Point */}
                <Row className="align-items-center">
                  <Col md={{ offset: 3, span: 9 }} xs={12} className="mt-4">
                    <Link
                      href="/pages/payment-methods/list"
                      className="btn btn-outline-primary"
                    >
                      Cancle
                    </Link>
                    <Button variant="primary" type="submit" className="mx-4">
                      Save
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default EditPaymentMethod;