// import node module libraries
import { Container, Form } from 'react-bootstrap';

import { Col, Row, Card, Button } from "react-bootstrap";
import Link from "next/link";
import { useState } from 'react';
import { ReferTask } from 'data/models/ReferTask';
import { referTaskService } from 'services/referTask.service';

const AddReferTask = () => {
  const [task, setTask] = useState(new ReferTask());

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setTask((preTask) => ({
      ...preTask,
      [name]: value
    }))
  }

  const onSubmit = async () => {
    const res = await referTaskService.createReferTask(task);
    if (res.statusCode == 200) {

    } else {

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
                <h4 className="mb-1">Edit Refer Task</h4>
              </div>
              <Form>
                <Row className="mb-3">
                  <div className="col-sm-3">Task Number</div>
                  <div className="col-md-9 col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Task name"
                      id="name"
                      name='name'
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-3">Invites</div>
                  <div className="col-md-9 col-12">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Number Invites"
                      id="invites"
                      name='invited'
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <div className="col-sm-3">Point</div>
                  <div className="col-md-9 col-12">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="100"
                      id="point"
                      name='point'
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </Row>
                {/* Point */}
                <Row className="align-items-center">
                  <Col md={{ offset: 3, span: 9 }} xs={12} className="mt-4">
                    <Link
                      href="/pages/refer-tasks/list"
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

export default AddReferTask;