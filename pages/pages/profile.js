// import node module libraries
import { Col, Row, Container, Form, Button, Card, CardBody } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container fluid className="p-6">
      <Card>
        <CardBody>
          <Row className=" mb-3">
          <h5 className="col-sm-4">Profile</h5>
            <Col md={8} xs={12}>
                <Form.Control placeholder="admin@gmail.com" disabled />
              </Col>
          </Row>
          <Form>
            {/* Receive Mail */}
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="notifyEmail">Receive Email</Form.Label>
              <Col md={8} xs={12}>
                <Form.Control type="gmail" placeholder="sample@gmail.com" id="2ndEmail" required />
              </Col>
            </Row>
            {/* Current password */}
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="currentPassword">Current password</Form.Label>
              <Col md={8} xs={12}>
                <Form.Control type="password" placeholder="Enter Current password" id="currentPassword" required />
              </Col>
            </Row>

            {/* New password */}
            <Row className="mb-3">
              <Form.Label className="col-sm-4" htmlFor="newPassword">New password</Form.Label>
              <Col md={8} xs={12}>
                <Form.Control type="password" placeholder="Enter New password" id="newPassword" required />
              </Col>
            </Row>

            {/* Confirm new password */}
            <Row className="align-items-center">
              <Form.Label className="col-sm-4" htmlFor="confirmNewpassword">Confirm new password</Form.Label>
              <Col md={8} xs={12}>
                <Form.Control type="password" placeholder="Confirm new password" id="confirmNewpassword" required />
              </Col>
              {/* list */}
              <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                <h6 className="mb-1">Password requirements:</h6>
                <p>Ensure that these requirements are met:</p>
                <ul>
                  <li> Minimum 8 characters long the more, the better</li>
                  <li>At least one lowercase character</li>
                  <li>At least one uppercase character</li>
                  <li>At least one number, symbol, or whitespace character
                  </li>
                </ul>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Container>
  )
}

export default Profile