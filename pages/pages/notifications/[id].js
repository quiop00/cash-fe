// import node module libraries
import { Container, Form } from 'react-bootstrap';

import { Col, Row, Card, Button } from "react-bootstrap";
import Link from "next/link";
import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";
import { notificationService } from 'services/notification.service';
import { NotificationType } from 'data/models/Notification';

const EditNotification = ({ data }) => {
  const [notifyDate, setNotifyDate] = useState(new Date());
  const [notification, setNotification] = useState(data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNotification((preUser) => ({
      ...preUser,
      [name]: value
    }))
  }

  const selectTime = (date) => {
    setNotifyDate(date);
    setNotification((preUser) => ({
      ...preUser,
      'noticeAt': date
    }))
  }

  const onSubmit = async () => {
    const res = await notificationService.updateNotification(notification.id, notification);
    if (res.statusCode == 200) {
      // show message success
    } else {
      // show message error
    }
  }

  return (
    <Container fluid className="p-6">
      <Row className="mb-8">
        <Col xl={12} lg={12} md={12} xs={12}>
          <Card>
            {/* card body */}
            <Card.Body>
              <div className=" mb-6">
                <h4 className="mb-1">Edit Notification</h4>
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
                      name='title'
                      required
                      onChange={handleInputChange}
                      defaultValue={notification.title}
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
                      name='content'
                      required
                      onChange={handleInputChange}
                      defaultValue={notification.content}
                    />
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-3">Time</div>
                  <div className="col-md-9 col-12">
                    <ReactDatePicker
                      selected={notifyDate}
                      onChange={(date) => selectTime(date)}
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
                      onChange={handleInputChange}
                    >
                      {NotificationType.map(e => (
                        <option value={e} className="text-muted">
                          {e}
                        </option>
                      ))}
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
                      Cancel
                    </Link>
                    <Button variant="primary" onClick={onSubmit} className="mx-4">
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

export default EditNotification;

export async function getServerSideProps({ params }) {
  const { id } = params;

  // Fetch thông tin chi tiết người dùng từ API hoặc nguồn dữ liệu khác
  const res = await notificationService.getNotificationDetail(id);

  return {
    props: {
      data: res.data,
    },
  };
}