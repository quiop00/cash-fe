// import node module libraries
import { Container, Form } from 'react-bootstrap';

import { Col, Row, Card, Button } from "react-bootstrap";
import Link from "next/link";
import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";

const AddNotification = () => {
  const [notifyDate, setNotifyDate] = useState(new Date());

  return (
    <Container fluid className="p-6">
      <Row className="mb-8">
        <Col xl={12} lg={12} md={12} xs={12}>
          <Card>
            {/* card body */}
            <Card.Body>
              <div className=" mb-6">
                <h4 className="mb-1">Add Notification</h4>
              </div>
              <Form>
                <Row className="mb-3">
                  <div className="col-sm-3">Title</div>
                  <div className="col-md-9 col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      id="title"
                      required
                    />
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-3">Message</div>
                  <div className="col-md-9 col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Message"
                      id="message"
                      required
                    />
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-3">Time</div>
                  <div className="col-md-9 col-12">
                    <ReactDatePicker
                      selected={notifyDate}
                      onChange={(date) => setNotifyDate(date)}
                      showTimeSelect
                      dateFormat="Pp">

                    </ReactDatePicker>
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-3">Type</div>
                  <div className="col-md-9 col-12">
                    <Form.Select
                      id="type"
                      name="type"
                    >
                      <option value="monthly" className="text-muted">
                          One time
                        </option>
                      <option value="daily" className="text-muted">
                          Daily
                        </option>
                        <option value="monthly" className="text-muted">
                          Monthly
                        </option>
                        
                    </Form.Select>
                  </div>
                </Row>
                {/* Point */}
                <Row className="align-items-center">
                  <Col md={{ offset: 3, span: 9 }} xs={12} className="mt-4">
                    <Link
                      href="/pages/notifications/list"
                      className="btn btn-outline-primary"
                    >
                      Cancle
                    </Link>
                    <Button variant="primary" type="submit" className="mx-4">
                      Save
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AddNotification;