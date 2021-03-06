import { FC, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useStyles from './styles';
import Accordion from 'react-bootstrap/Accordion';
import { LinkContainer } from 'react-router-bootstrap';
import { constants } from 'buffer';
import { useForm } from "react-hook-form";
import { Container, Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import {
    SERVICES,
    YEARS
} from '../../constants/global';

import {
    MyContainer,
    PickerGroup,
    PickerOption,
    PickerLabel,
    MyCheckBox,
    MyForm,
} from './AppointmentElement';
import { FaBuromobelexperte } from 'react-icons/fa';
import { Typography } from '@mui/material';


const AppointmentForm: FC<{ register: any, handleSubmit: any, onSubmit: any }> = ({ register, handleSubmit, onSubmit }) => {

    return (
        <MyContainer>
            <Row>
                <Col style={{"textAlign":"center"}}>
                    <h1>Get Customize Budget.</h1>
                </Col>
            </Row>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Form.Group >
                        <Form.Label>Services</Form.Label>

                        {/* Picker */}
                        <PickerGroup>
                            {SERVICES.map((service, key) => (
                                <PickerOption key={key}>
                                    <MyCheckBox size="xxl" value={service} {...register("AppointmentServices")}/>
                                    {/* <Form.Check size="lg" value={service} {...register("AppointmentServices")}></Form.Check> */}
                                    <PickerLabel>{service}</PickerLabel>
                                </PickerOption>
                            ))}
                        </PickerGroup>


                        {/* <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Repair</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Check size={{ height: "100px" }} value="r1" label="r1" {...register("service")}></Form.Check>
                                    <Form.Check size="lg" alue="r2" label="r2" {...register("service")}></Form.Check>
                                    <Form.Check value="r3" label="r3" {...register("AppointmentServices")}></Form.Check>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion >
                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Oil Change</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Check value="o1" label="o1" {...register("AppointmentServices")}></Form.Check>
                                    <Form.Check value="o2" label="o2" {...register("AppointmentServices")}></Form.Check>
                                    <Form.Check value="o3" label="o3" {...register("AppointmentServices")}></Form.Check>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion >
                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Tire Service</Accordion.Header>
                                <Accordion.Body >
                                    <Form.Check value="t1" label="t1" {...register("AppointmentServices")}></Form.Check>
                                    <Form.Check value="t2" label="t2" {...register("AppointmentServices")}></Form.Check>
                                    <Form.Check value="t3" label="t3" {...register("AppointmentServices")}></Form.Check>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion > */}

                    </Form.Group>
                    <Row>
                        <Col>
                        <Form.Label>Extra Information</Form.Label>
                        <Form.Control  as="textarea" rows={3} placeholder="Shortly describe the car situation..."/>
                        </Col>
                    </Row>
                    <Row >
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Year</Form.Label>
                                <Form.Select size="sm" aria-label="Default select example" {...register("AppointmentYear")}>
                                    <option>Open this select menu</option>
                                    {YEARS.map((value, key) => (
                                                                            <option value="2001" key={key}>{value} </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Make</Form.Label>
                                <Form.Select size="sm" aria-label="Default select example" {...register("AppointmentMake")}>
                                    <option>Open this select menu</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="BMW">BMW</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Model</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter Model" {...register("AppointmentModel")} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Vehicle Identification Number</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter VIN" {...register("AppointmentVIN")} />
                            </Form.Group>
                        </Col>
                    </Row>
                                        
                    <Row>
                        <Col>
                        <Form.Label >Email address</Form.Label>
                        <Form.Control size="sm" type="email" placeholder="Enter email" {...register("AppointmentEmail")} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        </Col>                                        
                    </Row>
                    
                </Container>
                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                {/* 
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Row>
                    <Col style={{"textAlign":"right", "marginRight":"10px"}}>
                    <Button variant="primary" type="submit">
                        Get Budget
                    </Button>
                    </Col>
                </Row>
                    {/* <LinkContainer to="/confirmation"> */}
                    {/* </LinkContainer> */}

            </MyForm>
        </MyContainer>
    );
}

export default AppointmentForm 