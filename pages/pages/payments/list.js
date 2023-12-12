// import node module libraries
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Row, Card, Table, Container, Badge, Button, Pagination } from 'react-bootstrap';
import { Eye } from 'react-feather';

import { paymentService } from "services/payment.service";

const Payments = () => {

  const [paymentRequests, setPaymentRequests] = useState([]);

  useEffect(async () => {
    const getRequests = async () => {
      const res = await await paymentService.getPaymentRequests();
      if (res.statusCode === 200) {
        setPaymentRequests(res.data);
      } else {
        // show error
      }
    };
    getRequests();
  }, [])

  return (
    <Container fluid className="p-6">
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
          <div id="examples" className="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
            <div><h2>Payment Requests</h2></div>
          </div>
          <Card>
            <Card.Body className="p-0">
              <Table className="text-nowrap">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Point</th>
                    <th scope="col">Method</th>
                    <th scope="col">Info</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentRequests.map((e, index) => (<tr>
                    <th scope="row">{index}</th>
                    <td>{e.paymentInfo.fullname}</td>
                    <td>100$</td>
                    <td>{e.point}</td>
                    <td>{e.paymentInfo.method}</td>
                    <td>{e.paymentInfo.value}</td>
                    <td>22-10-2023</td>
                    <td><Badge bg={e.status == "COMPLETED" ? "success" : "danger"} className="me-1">
                      {e.status}
                    </Badge></td>
                    <td>
                      <Link
                        href={`/pages/payments/${e.id}`}
                        className="btn btn-outline-primary"
                      >
                        <Eye size="18px" />
                      </Link>
                    </td>
                  </tr>))}
                </tbody>
              </Table>
              <Pagination>
                <Pagination.Prev disabled>Previous</Pagination.Prev>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
              </Pagination>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* end of  */}
    </Container>
  );
};

export default Payments;
