// import node module libraries
import { Card, Container, Nav, Tab } from 'react-bootstrap';
import {Ads, Offerwall, Reward} from 'sub-components';

const Settings = () => {
  return (
    <Container fluid className="p-6">
      <h2>Settings & Configuration</h2>
      <br></br>
      <Tab.Container defaultActiveKey="reward">
        <Card>
          <Card.Header className="border-bottom-0 p-0 ">
            <Nav className="nav-lb-tab">
              <Nav.Item>
                <Nav.Link eventKey="reward" className="mb-sm-3 mb-md-0">
                  Reward Setting
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="offerwall" className="mb-sm-3 mb-md-0">
                  Offerwalls
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="security" className="mb-sm-3 mb-md-0">
                  App Security
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link eventKey="ads" className="mb-sm-3 mb-md-0">
                  Ads Settings
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body className="p-0">
            <Tab.Content>
              <Tab.Pane eventKey="reward" className="pb-4 p-4">
                <Reward></Reward>
              </Tab.Pane>
              <Tab.Pane eventKey="offerwall" className="pb-4 p-4">
                <Offerwall></Offerwall>
              </Tab.Pane>
              {/* <Tab.Pane eventKey="security" className="pb-4 p-4">
                Appp
              </Tab.Pane> */}
              <Tab.Pane eventKey="ads" className="pb-4 p-4">
               <Ads></Ads>
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>

    </Container>
  )
}

export default Settings;