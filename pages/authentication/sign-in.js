// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";

// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";
import { authService } from "services/auth.service";
import { useState } from "react";
import { User } from "data/models/User";
import { useRouter } from "next/router";

const SignIn = () => {
  const [user, setUser] = useState(new User());
  const router = useRouter();

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setUser((preUser) => ({
      ...preUser,
      [name] : value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    authService.login(user).then(res => {
      if (res.statusCode == 200) {
        router.push('/');
      } else {
        // show error
      }
    });
  }

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <h3>Sign up</h3>
              <p className="mb-6">Please enter administrator information.</p>
            </div>
            {/* Form */}
            <Form>
              {/* Username */}
              <Form.Group className="mb-3" controlId="uSsername">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email address here"
                  required
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="**************"
                  required
                  onChange={handleInputChange}
                />
              </Form.Group>

              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit" onClick={onSubmit}>
                    Sign In
                  </Button>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

SignIn.Layout = AuthLayout;

export default SignIn;
