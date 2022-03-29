import { FC, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useStyles from './styles';
import Accordion from 'react-bootstrap/Accordion';
import { LinkContainer } from 'react-router-bootstrap';
const AppointmentForm: FC<{ service: string, handleService: any }> = ({ service, handleService }) => {
    const classes = useStyles();

    return (
        <div className={classes.form}>
            <Form>
                <Form.Group>
                    <Form.Label>Services</Form.Label>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Repair</Accordion.Header>
                        <Accordion.Body>
                            <Form.Check></Form.Check>
                            <Form.Check></Form.Check>
                            <Form.Check></Form.Check>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion >
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Oil Change</Accordion.Header>
                        <Accordion.Body>
                            <Form.Check></Form.Check>
                            <Form.Check></Form.Check>
                            <Form.Check></Form.Check>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion >
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Tire Service</Accordion.Header>
                        <Accordion.Body>
                            <Form.Check></Form.Check>
                            <Form.Check></Form.Check>
                            <Form.Check></Form.Check>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion >
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Year</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Make</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Nissan">Nissan</option>
                        <option value="BMW">BMW</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="email" placeholder="Enter Model" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Vehicle Identification Number</Form.Label>
                    <Form.Control type="email" placeholder="Enter VIN" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                {/* 
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Form.Group>
                    <LinkContainer to="/confirmation">
                    <Button variant="primary" type="submit">
                        Get Budget
                    </Button>
                    </LinkContainer>
                </Form.Group>
            </Form>
        </div>
    );
}

export default AppointmentForm 