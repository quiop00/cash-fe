// import node module libraries
import { Col, Row, Container, Form, Button } from 'react-bootstrap';

const Offerwall = () => {
  return (
    <Container fluid className="p-6">
      <Form>
        {/* OfferToro Publisher ID */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="publishId">OfferToro Publisher ID</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="publishId" required />
          </Col>
        </Row>
        {/* OfferToro App ID */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="appId">OfferToro App ID</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="100" id="appId" required />
          </Col>
        </Row>

        {/* OfferToro Key */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="key">OfferToro Key</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="key" required />
          </Col>
        </Row>

        {/* OfferToro Postback url */}
        <Row className="mb-3">
        <Form.Label className="col-sm-4" htmlFor="referralBonus">OfferToro Postback url</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="https://" id="referralBonus" required />
          </Col>
        </Row>

        {/* AdGetMedia Wall Code */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="adGetMediaCode">AdGetMedia Wall Code</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="adGetMediaCode" required />
          </Col>
        </Row>

        {/* AdGetMedia Postback url */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="adGetMediaUrl">AdGetMedia Postback url</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="adGetMediaUrl" required />
          </Col>
        </Row>

        {/* AyetStudio Postback url */}
        <Row className="align-items-center">
          <Form.Label className="col-sm-4" htmlFor="ayetUrl">AyetStudio Postback url</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="https://" id="ayetUrl" required />
          </Col>
          
          {/* save */}
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

export default Offerwall;