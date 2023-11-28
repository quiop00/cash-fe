// import node module libraries
import Link from "next/link";
import { Col, Row, Card, Table, Container, Badge, Button, Pagination } from 'react-bootstrap';
import { Edit, Trash } from 'react-feather';

const Users = () => {
    return (
        <Container fluid className="p-6">
            <Row>
                <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
                    <div id="examples" className="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
                        <div><h2>Users</h2></div>
                        <div>
                            <Link
                                href="/pages/users/edit"
                                className="btn btn-outline-primary d-none d-md-block"
                            >
                                Add User
                            </Link>
                        </div>
                    </div>
                    <Card>
                        <Card.Body className="p-0">
                            <Table className="text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Point</th>
                                        <th scope="col">Referrals</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>mark@gmail.com</td>
                                        <td>1200</td>
                                        <td>5</td>
                                        <td><Badge bg="success" className="me-1">
                                            Active
                                        </Badge></td>
                                        <td>
                                            <Button variant="primary" size="sm" className="me-1">
                                                <Edit size="18px" />
                                            </Button>
                                            <Button variant="danger" size="sm" className="me-1">
                                                <Trash size="18px" />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>mark@gmail.com</td>
                                        <td>1200</td>
                                        <td>5</td>
                                        <td><Badge bg="danger" className="me-1">
                                            Blocked
                                        </Badge></td>
                                        <td>
                                            <td>
                                                <Button variant="primary" size="sm" className="me-1">
                                                    <Edit size="18px" />
                                                </Button>
                                                <Button variant="danger" size="sm" className="me-1">
                                                    <Trash size="18px" />
                                                </Button>
                                            </td>
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

export default Users;
