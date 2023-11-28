// import node module libraries
import { Container } from 'react-bootstrap';

import { Col, Row, Card, Button, Badge } from "react-bootstrap";
import Link from "next/link";

const PaymentRequestDetail = () => {
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
              <div>
                <Row className="mb-3">
                  <div className="col-sm-4">Full name</div>
                  <div className="col-md-8 col-12">
                    Full name
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-4">Point</div>
                  <div className="col-md-8 col-12">
                    1000
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-4">Amount</div>
                  <div className="col-md-8 col-12">
                    10$
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-4">Payment Method</div>
                  <div className="col-md-8 col-12">
                    Paypal
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-4">Info</div>
                  <div className="col-md-8 col-12">
                    tin96425@gmail.com
                  </div>
                </Row>
                <Row className="mb-3">
                  <div className="col-sm-4">Date</div>
                  <div className="col-md-8 col-12">
                    20-10-2023
                  </div>
                </Row>
                <Row className="mb-3">
                  <div className="col-sm-4">Status</div>

                  <div className="col-md-8 col-12">
                    <Badge bg="success" className="me-1">
                      Completed
                    </Badge>
                  </div>
                </Row>

                {/* Point */}
                <Row className="align-items-center">
                  <div className="col-sm-4">Full name</div>
                  <div className="col-md-8 col-12">
                    Full name
                  </div>

                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                    <Link
                      href="/pages/payments/list"
                      className="btn btn-outline-primary"
                    >
                      Cancle
                    </Link>
                    <Button variant="danger" type="submit" className="mx-4">
                      Reject
                    </Button>
                    <Button variant="primary" type="submit">
                      Approve
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default PaymentRequestDetail;