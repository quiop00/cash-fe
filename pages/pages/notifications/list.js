// import node module libraries
import Link from "next/link";
import { Col, Row, Card, Table, Container, Button, Image } from 'react-bootstrap';
import { Edit, Trash } from 'react-feather';

const Notifications = () => {
  return (
    <Container fluid className="p-6">
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
          <div id="examples" className="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
            <div><h2>Notifications</h2></div>
            <div>
              <Link
                href="/pages/notifications/add"
                className="btn btn-outline-primary d-none d-md-block"
              >
                Add Notification
              </Link>
            </div>
          </div>
          <Card>
            <Card.Body className="p-0">
              <Table className="text-nowrap">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Message</th>
                    <th scope="col">Time</th>
                    <th scope="col">Type</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Change payment date</th>
                    <td>Change payment date</td>
                    <td>20:10 30-11-2023 T6</td>
                    <td>Daily</td>
                    <td>
                      <Link href="/pages/notifications/edit">
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

export default Notifications;
