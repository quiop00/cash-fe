// import node module libraries
import { Container } from 'react-bootstrap';

import { Col, Row, Card, Button, Badge } from "react-bootstrap";
import Link from "next/link";
import { paymentService } from 'services/payment.service';
import { useState } from 'react';

const PaymentRequestDetail = ({data}) => {
  const [paymentRequest, setPaymentRequest] = useState(data);

  const approve = async() => {
    const res = await paymentService.approveRequest(paymentRequest.id);
    if (res.statusCode == 200) {
      setPaymentRequest((prevPaymentRequest) => ({
        ...prevPaymentRequest,
        status: 'COMPLETED', 
      }));
    }

  }
  const reject = async() => {
    const res = await paymentService.rejectRequest(paymentRequest.id);
    if (res.statusCode == 200) {
      setPaymentRequest((prevPaymentRequest) => ({
        ...prevPaymentRequest,
        status: 'REJECT', 
      }));
    }
  }
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
                    {paymentRequest.paymentInfo.fullname}
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-4">Point</div>
                  <div className="col-md-8 col-12">
                  {paymentRequest.point}
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
                  {paymentRequest.paymentInfo.method}
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-4">Info</div>
                  <div className="col-md-8 col-12">
                  {paymentRequest.paymentInfo.value}
                  </div>
                </Row>
                <Row className="mb-3">
                  <div className="col-sm-4">Date</div>
                  <div className="col-md-8 col-12">
                    20-10-2023
                  </div>
                </Row>
                {/* status */}
                <Row className="align-items-center">
                  <div className="col-sm-4">Status</div>
                  <div className="col-md-8 col-12">
                  <Badge bg="success" className="me-1">
                      Completed
                    </Badge>
                  </div>

                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                    <Link
                      href="/pages/payments/list"
                      className="btn btn-outline-primary"
                    >
                      Cancel
                    </Link>
                    <Button variant="danger" onClick={approve} className="mx-4">
                      Reject
                    </Button>
                    <Button variant="primary" onClick={reject}>
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

export async function getServerSideProps({ params}) {
  const { id } = params;

  // Fetch thông tin chi tiết người dùng từ API hoặc nguồn dữ liệu khác
  const res = await paymentService.getPaymentRequestById(id);

  return {
    props: {
      data: res.data,
    },
  };
}