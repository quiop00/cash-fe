// import node module libraries
import { Col, Row, Container, Form, Button } from 'react-bootstrap';

const Ads = () => {
  return (
    <Container fluid className="p-6">
      <Form>
        <h3>App Id</h3>
        <br></br>
        {/* ironSource App Key */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="ironSourceKey">ironSource App Key</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="ironSourceKey" required />
          </Col>
        </Row>
        {/* Vungle App ID: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="vungleId">Vungle App ID:</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="vungleId" required />
          </Col>
        </Row>

        {/* Unity ID: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="unityId">Unity Game ID:</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="unityId" required />
          </Col>
        </Row>


        {/* Set extra spin count per day: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="extraSpin">Set extra spin count per day:</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="number" placeholder="5" id="extraSpin" required />
          </Col>
        </Row>

        <br />
        <h3>Banner Ads</h3>
        <br></br>
        <Row className="mb-3">
          <div className="col-sm-4">Banner Type</div>
          <div className="col-md-8 col-12">
            <Form.Select
              id="bannerType"
              name="bannerType"
            >
              <option value="applovin" className="text-muted">
                App lovin
              </option>
              <option value="vungle" className="text-muted">
                Vungle
              </option>
              <option value="unity" className="text-muted">
                Unity
              </option>
              <option value="ironsource" className="text-muted">
                IronSource
              </option>

            </Form.Select>
          </div>
        </Row>
        {/* Applovin banner ad unit id */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="applovinBanner">Applovin banner ad unit id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="applovinBanner" required />
          </Col>
        </Row>
        {/* Unity banner ad unit id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="unityBanner">Unity banner ad unit id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxx" id="unityBanner" required />
          </Col>
        </Row>
        {/* Vungle banner id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="vungleBanner">Vungle banner id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="vungleBanner" required />
          </Col>
        </Row>
        <br />
        <h3>Interstital Ads</h3>
        <br></br>
        <Row className="mb-3">
          <div className="col-sm-4">Banner Type</div>
          <div className="col-md-8 col-12">
            <Form.Select
              id="bannerType"
              name="bannerType"
            >
              <option value="applovin" className="text-muted">
                App lovin
              </option>
              <option value="vungle" className="text-muted">
                Vungle
              </option>
              <option value="unity" className="text-muted">
                Unity
              </option>
              <option value="ironsource" className="text-muted">
                IronSource
              </option>

            </Form.Select>
          </div>
        </Row>
        {/* Applovin interstital  ad unit id */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="applovinInterstital ">Applovin interstital  ad unit id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="applovinInterstital " required />
          </Col>
        </Row>
        {/* Unity interstital ad unit id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="unityInterstital">Unity interstital ad unit id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxx" id="unityInterstital" required />
          </Col>
        </Row>
        {/* Vungle Interstital id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="vungleInterstital">Vungle interstital id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="vungleInterstital" required />
          </Col>
        </Row>
        <br />
        <h3>Rewarded Ads</h3>
        <br></br>

        {/* Applovin rewarded  ad unit id */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="applovinRewarded">Applovin rewarded ad unit id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="applovinRewarded" required />
          </Col>
        </Row>
        {/* Unity rewarded ad unit id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="unityRewarded">Unity rewarded ad unit id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxx" id="unityRewarded" required />
          </Col>
        </Row>
        {/* Vungle rewarded id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="vungleRewarded">Vungle rewarded id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="vungleRewarded" required />
          </Col>
        </Row>
        {/* Admob rewarded id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="admobRewarded">Admob rewarded id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx" id="admobRewarded" required />
          </Col>
        </Row>
        {/* AyetStudio Postback url */}
        <Row className="align-items-center">

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

export default Ads;