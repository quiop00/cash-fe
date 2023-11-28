// import node module libraries
import Link from "next/link";
import { Col, Row, Card, Table, Container, Badge, Button, Pagination } from 'react-bootstrap';
import { Eye } from 'react-feather';

const Payments = () => {
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
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>100$</td>
                                        <td>1200</td>
                                        <td>Paypal</td>
                                        <td>Paypal@gmail.com</td>
                                        <td>22-10-2023</td>
                                        <td><Badge bg="success" className="me-1">
                                            Completed
                                        </Badge></td>
                                        <td>
                                            <Link
                                                href="/pages/payments/detail"
                                                className="btn btn-outline-primary"
                                            >
                                                <Eye size="18px" />
                                            </Link>
                                        </td>
                                    </tr>
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
