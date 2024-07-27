import React, { Component } from 'react';
import { Button, FormGroup, Label, Col } from 'reactstrap';
import { Formik, Form, Field } from 'formik';


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));


class Contact extends Component {
    handleSubmit = values => {
        console.log(values);
    }

    render() {
        document.title = "Contact";
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <Formik
                            initialValues={{
                                firstname: '',
                                lastname: '',
                                telnum: '',
                                email: '',
                                agree: false,
                                contactType: 'Tel.',
                                message: ''
                            }}
                            onSubmit={this.handleSubmit}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup row>
                                        <Label htmlFor="firstname" md={2}>First Name</Label>
                                        <Col md={10}>
                                            <Field
                                                name="firstname"
                                                placeholder="First Name"
                                                className="form-control"
                                                validators ={{
                                                  required
                                                }}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="lastname" md={2}>Last Name</Label>
                                        <Col md={10}>
                                            <Field
                                                name="lastname"
                                                placeholder="Last Name"
                                                className="form-control"
                                                validators ={{
                                                  required
                                                }}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                        <Col md={10}>
                                            <Field
                                                name="telnum"
                                                placeholder="Tel. Number"
                                                className="form-control"
                                                validators ={{
                                                  required,
                                                  isNumber
                                                }}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="email" md={2}>Email</Label>
                                        <Col md={10}>
                                            <Field
                                                name="email"
                                                placeholder="Email"
                                                className="form-control"
                                                validators ={{
                                                  required
                                                }}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{ size: 6, offset: 2 }}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Field
                                                        type="checkbox"
                                                        name="agree"
                                                        className="form-check-input"
                                                    />
                                                    <strong>May we contact you?</strong>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={{ size: 3, offset: 1 }}>
                                            <Field as="select"
                                                name="contactType"
                                                className="form-control"
                                            >
                                                <option>Tel.</option>
                                                <option>Email</option>
                                            </Field>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="message" md={2}>Your Feedback</Label>
                                        <Col md={10}>
                                            <Field as="textarea"
                                                name="message"
                                                rows="12"
                                                className="form-control"
                                                validators ={{
                                                  required
                                                }}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col md={{ size: 10, offset: 2 }}>
                                            <Button type="submit" color="primary">
                                                Send Feedback
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
