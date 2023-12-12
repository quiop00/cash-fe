// import node module libraries
import { User } from "data/models/User";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Row, Card, Table, Container, Badge, Button, Pagination, Form } from 'react-bootstrap';
import { Edit, Trash } from 'react-feather';
import { userService } from "services/user.service";

const Users = () => {
  const [users, setUsers] = useState([]);

  const changeStatus = async (id) => {
    const res = await userService.blockUser(id);
    if (res.statusCode === 200) {
      const status = res.data;
      const newUsers = users.map(e => {
        if (e.id == id) {
          return {
            ...e,
            status: status
          }
        }
        return e;
      });
      setUsers(newUsers);
    } else {
      // show error
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await userService.getUsers();
      if (res.statusCode === 200) {
        setUsers(res.data || []);
      }
    };

    fetchData();
  }, [])

  return (
    <Container fluid className="p-6">
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} className="mb-4">
          <div id="examples" className="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
            <div><h2>Users</h2></div>
            <div>
              <Link
                href="/pages/users/edit"
                className="btn btn-outline-primary d-none d-md-block"
              >
                Add User
              </Link>
            </div>
          </div>
          <Card>
            <Card.Body className="p-0">
              <Table className="text-nowrap">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Point</th>
                    <th scope="col">Referrals</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((e, index) => (
                    <tr>
                      <th scope="row">{index}</th>
                      <td>{e.username}</td>
                      <td>{e.gmail}</td>
                      <td>{e.currentPoint}</td>
                      <td>{e.totalRefer}</td>
                      <td><Badge bg={e.status == 'BLOCKED' ? "danger" : "success"} className="me-1">
                        {e.status}
                      </Badge></td>
                      <td>
                        <Button variant="primary" size="sm" className="me-1">
                          <Edit size="18px" />
                        </Button>
                        <Button variant="danger" size="sm" className="me-1">
                          <Trash size="18px" />
                        </Button>
                        <Form.Check
                          type="switch"
                          id="block"
                          label=""
                          onChange={() => changeStatus(e.id)}
                        >
                        </Form.Check>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Pagination>
                <Pagination.Prev disabled>Previous</Pagination.Prev>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
              </Pagination>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* end of  */}
    </Container>
  );
};

export default Users;
