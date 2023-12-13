// import node module libraries
import { AdsSetting } from 'data/models/Ads';
import { useEffect, useState } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { adsService } from 'services/ads.service';

const Ads = () => {
  const [ads, setAds] = useState(null);

  useEffect(() => {
    const getAdsConfig = async () => {
      const res = await adsService.getAdsSetting();
      if (res.statusCode == 200) {
        setAds(res.data);
      } else {
        setAds(new AdsSetting());
      }
    }
    getAdsConfig();
  }, null)

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAds((preAds) => ({
      ...preAds,
      [name]: value
    }))
  }

  const onSubmit = async () => {
    const res = await adsService.updateAdsSetting(ads);
    if (res.statusCode == 200) {
      // Show message success
    } else {
      // Show message error
    }
  }

  return (
    <Container fluid className="p-6">
      <Form>
        <h3>App Id</h3>
        <br></br>
        {/* ironSource App Key */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="ironSourceKey">ironSource App Key</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="ironSourceKey"
              name='ironSourceKey'
              onChange={handleInputChange}
              defaultValue={ads.ironSourceKey}
              required />
          </Col>
        </Row>
        {/* Vungle App ID: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="vungleId">Vungle App ID:</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="vungleId"
              required
              name='vungleId'
              onChange={handleInputChange}
              defaultValue={ads.vungleId}
            />
          </Col>
        </Row>

        {/* Unity ID: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="unityId">Unity Game ID:</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="unityId"
              required
              name='unityId'
              onChange={handleInputChange}
              defaultValue={ads.unityId}
            />
          </Col>
        </Row>


        {/* Set extra spin count per day: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="extraSpin">Set extra spin count per day:</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="number" placeholder="5"
              id="extraSpin" required
              name='extraSpin'
              onChange={handleInputChange}
              defaultValue={ads.extraSpin}
            />
          </Col>
        </Row>

        <br />
        <h3>Banner Ads</h3>
        <br></br>
        <Row className="mb-3">
          <div className="col-sm-4">Banner Type</div>
          <div className="col-md-8 col-12">
            <Form.Select
              id="bannerAdsType"
              name="bannerAdsType"
              onChange={handleInputChange}
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
            <Form.Control type="text" placeholder="xxxxxx"
              id="applovinBanner" required
              name='applovinBanner'
              onChange={handleInputChange}
              defaultValue={ads.applovinBanner}
            />
          </Col>
        </Row>
        {/* Unity banner ad unit id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="unityBanner">Unity banner ad unit id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxx"
              id="unityBanner" required
              name='unityBanner'
              onChange={handleInputChange}
              defaultValue={ads.unityBanner}
            />
          </Col>
        </Row>
        {/* Vungle banner id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="vungleBanner">Vungle banner id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="vungleBanner" required
              name='vungleBanner'
              onChange={handleInputChange}
              defaultValue={ads.vungleBanner}
            />
          </Col>
        </Row>
        <br />
        <h3>Interstital Ads</h3>
        <br></br>
        <Row className="mb-3">
          <div className="col-sm-4">Banner Type</div>
          <div className="col-md-8 col-12">
            <Form.Select
              id="inverstitalType"
              name="inverstitalType"
              onChange={handleInputChange}
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
            <Form.Control type="text" placeholder="xxxxxx"
              id="applovinInterstital" required
              name='applovinInterstital'
              onChange={handleInputChange}
              defaultValue={ads.applovinInterstital}
            />
          </Col>
        </Row>
        {/* Unity interstital ad unit id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="unityInterstital">Unity interstital ad unit id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxx"
              id="unityInterstital" required
              name='unityInterstital'
              onChange={handleInputChange}
              defaultValue={ads.unityInterstital}
            />
          </Col>
        </Row>
        {/* Vungle Interstital id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="vungleInterstital">Vungle interstital id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="vungleInterstital" required
              name='vungleInterstital'
              onChange={handleInputChange}
              defaultValue={ads.vungleInterstital}
            />
          </Col>
        </Row>
        <br />
        <h3>Rewarded Ads</h3>
        <br></br>

        {/* Applovin rewarded  ad unit id */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="applovinRewarded">Applovin rewarded ad unit id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="applovinRewarded"
              required
              name='applovinRewarded'
              onChange={handleInputChange}
              defaultValue={ads.applovinRewarded}
            />
          </Col>
        </Row>
        {/* Unity rewarded ad unit id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="unityRewarded">Unity rewarded ad unit id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxx"
              id="unityRewarded" required
              name='unityRewarded'
              onChange={handleInputChange}
              defaultValue={ads.unityRewarded}
            />
          </Col>
        </Row>
        {/* Vungle rewarded id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="vungleRewarded">Vungle rewarded id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="vungleRewarded" required
              name='vungleRewarded'
              onChange={handleInputChange}
              defaultValue={ads.vungleRewarded}
            />
          </Col>
        </Row>
        {/* Admob rewarded id: */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="admobRewarded">Admob rewarded id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="admobRewarded" required
              name='admobRewarded'
              onChange={handleInputChange}
              defaultValue={ads.admobRewarded}
            />
          </Col>
        </Row>
        {/* AyetStudio Postback url */}
        <Row className="align-items-center">

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

export default Ads;