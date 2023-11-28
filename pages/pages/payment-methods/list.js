// import node module libraries
import Link from "next/link";
import { Col, Row, Card, Table, Container, Button, Image } from 'react-bootstrap';
import { Edit, Trash } from 'react-feather';

const PaymentMedthods = () => {
  return (
    <Container fluid className="p-6">
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
          <div id="examples" className="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
            <div><h2>Payment Requests</h2></div>
            <div>
              <Link
                href="/pages/payment-methods/add"
                className="btn btn-outline-primary d-none d-md-block"
              >
                Add Method
              </Link>
            </div>
          </div>
          <Card>
            <Card.Body className="p-0">
              <Table className="text-nowrap">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Logo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <th><Image alt="avatar" src='/images/avatar/avatar-1.jpg' className="logo-md" /></th>
                    <td>Mark</td>
                    <td>Coins = $</td>
                    <td>1200</td>
                    <td>
                      <Link href="/pages/payment-methods/edit">
                        <Button variant="primary" size="sm" className="me-1">
                          <Edit size="18px" />
                        </Button>
                      </Link>
                      <Button variant="danger" size="sm" className="me-1">
                        <Trash size="18px" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* end of  */}
    </Container>
  );
};

export default PaymentMedthods;
