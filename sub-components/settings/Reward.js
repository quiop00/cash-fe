// import node module libraries
import { RewardSetting } from 'data/models/RewardSetting';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { settingService } from 'services/setting.service';

const Reward = () => {
  const [reward, setReward] = useState(null);

  useEffect(() => {
    const getRewardConfig = async () => {
      const res = await settingService.getRewardConfig();
      if (res.statusCode == 200) {
        setReward(res.data);
      } else {
        setReward(new RewardSetting());
      }
    }
    getRewardConfig();
  }, null)

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setReward((preData) => ({
      ...preData,
      [name]: value
    }))
  }

  const onSubmit = async () => {
    const res = await settingService.updateReward(reward);
    if (res.statusCode == 200) {
      // Show message success
    } else {
      // Show message error
    }
  }

  return (
    <Container fluid className="p-6">
      <Form>
        {/* Daily Bonus Coins */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="dailyBonusCoin">Daily Bonus Coins</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="number" placeholder="100"
              id="dailyBonusCoin"
              name='dailyBonusCoin'
              defaultValue={reward.dailyBonusCoin}
              onChange={handleInputChange}
              required />
          </Col>
        </Row>
        {/* Daily Spin Limit */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="dailySpinCoin">Daily Spin Limit</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="number" placeholder="100"
              id="dailySpinCoin"
              name='dailySpinCoin'
              defaultValue={reward.dailySpinCoin}
              onChange={handleInputChange}
              required />
          </Col>
        </Row>

        {/* Daily Video watch Limit */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="video">Daily Video watch Limit</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="number" placeholder="5"
              id="video"
              name='video'
              defaultValue={reward.video}
              onChange={handleInputChange}
              required />
          </Col>
        </Row>

        {/* Daily Video watch Limit */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="referralBonus">Referral Bonus</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="number" placeholder="100"
              id="referralBonus"
              name='referralBonus'
              defaultValue={reward.referralBonus}
              onChange={handleInputChange}
              required />
          </Col>
        </Row>

        {/* Daily Video watch Limit */}
        <Row className="mb-3">
          <Form.Label className="col-sm-4" htmlFor="oneSignalId">OneSignal App Id</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="oneSignalId"
              name='oneSignalId'
              defaultValue={reward.oneSignalId}
              onChange={handleInputChange}
              required />
          </Col>
        </Row>

        {/* Referrals Bonus */}
        <Row className="align-items-center">
          <Form.Label className="col-sm-4" htmlFor="oneSignalApi">OneSignal Rest API</Form.Label>
          <Col md={8} xs={12}>
            <Form.Control type="text" placeholder="xxxxxx"
              id="oneSignalApi"
              name='oneSignalApi'
              defaultValue={reward.oneSignalApi}
              onChange={handleInputChange}
              required />
          </Col>

          {/* list */}
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

export default Reward