// import node module libraries
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { settingService } from 'services/setting.service';
import { OfferwallSetting } from 'data/models/Offerwall';

const Offerwall = () => {
  const [offerwall, setOfferwall] = useState(null);

  useEffect(() => {
    const getOfferwallConfig = async () => {
      const res = await settingService.getOfferwallSetting();
      if (res.statusCode == 200) {
        setOfferwall(res.data);
      } else {
        setOfferwall(new OfferwallSetting());
      }
    }
    getOfferwallConfig();
  }, null)

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setOfferwall((preData) => ({
      ...preData,
      [name]: value
    }))
  }

  const onSubmit = async () => {
    const res = await settingService.updateOfferwallSetting(offerwall);
    if (res.statusCode == 200) {
      // Show message success
    } else {
      // Show message error
    }
  }

  return (
    <Container fluid className="p-6">
      <Form>
        {/* OfferToro Publisher ID */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="publishId">OfferToro Publisher ID</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="publishId"
              name='publishId'
              defaultValue={offerwall.publishId}
              onChange={handleInputChange} required />
          </Col>
        </Row>
        {/* OfferToro App ID */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="appId">OfferToro App ID</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="100"
              id="appId"
              name='appId'
              defaultValue={offerwall.appId}
              onChange={handleInputChange} required />
          </Col>
        </Row>

        {/* OfferToro Key */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="key">OfferToro Key</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="key"
              name='key'
              defaultValue={offerwall.key}
              onChange={handleInputChange} required />
          </Col>
        </Row>

        {/* OfferToro Postback url */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="referralBonus">OfferToro Postback url</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="https://"
              id="referralBonus"
              name='referralBonus'
              defaultValue={offerwall.referralBonus}
              onChange={handleInputChange} required />
          </Col>
        </Row>

        {/* AdGetMedia Wall Code */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="adGetMediaCode">AdGetMedia Wall Code</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="adGetMediaCode"
              name='adGetMediaCode'
              defaultValue={offerwall.adGetMediaCode}
              onChange={handleInputChange} required />
          </Col>
        </Row>

        {/* AdGetMedia Postback url */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="adGetMediaUrl">AdGetMedia Postback url</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="adGetMediaUrl"
              name='adGetMediaUrl'
              defaultValue={offerwall.adGetMediaUrl}
              onChange={handleInputChange} required />
          </Col>
        </Row>

        {/* AyetStudio Postback url */}
        <Row className="align-items-center">
          <Form.Label className="col-sm-4" htmlFor="ayetUrl">AyetStudio Postback url</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="https://"
              id="ayetUrl"
              name='ayetUrl'
              defaultValue={offerwall.ayetUrl}
              onChange={handleInputChange} required />
          </Col>

          {/* save */}
          <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
            <Button variant="primary" onClick={onSubmit}>
              Save Changes
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Offerwall;