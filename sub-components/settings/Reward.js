// import node module libraries
import { Col, Row, Container, Form, Button, Card, CardBody } from 'react-bootstrap';

const Reward = () => {
  return (
    <Container fluid className="p-6">
      <Form>
        {/* Daily Bonus Coins */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="dailyBonusCoin">Daily Bonus Coins</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="number" placeholder="100" id="dailyBonusCoin" required />
          </Col>
        </Row>
        {/* Daily Spin Limit */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="dailySpinCoin">Daily Spin Limit</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="number" placeholder="100" id="dailySpinCoin" required />
          </Col>
        </Row>

        {/* Daily Video watch Limit */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="video">Daily Video watch Limit</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="number" placeholder="5" id="video" required />
          </Col>
        </Row>

        {/* Daily Video watch Limit */}
        <Row className="mb-3">
        <Form.Label className="col-sm-4" htmlFor="referralBonus">Referral Bonus</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="number" placeholder="100" id="referralBonus" required />
          </Col>
        </Row>

        {/* Daily Video watch Limit */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="oneSignalId">OneSignal App Id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="oneSignalId" required />
          </Col>
        </Row>

        {/* Referrals Bonus */}
        <Row className="align-items-center">
          <Form.Label className="col-sm-4" htmlFor="oneSignalApi">OneSignal Rest API</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="oneSignalApi" required />
          </Col>
          
          {/* list */}
          <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Reward