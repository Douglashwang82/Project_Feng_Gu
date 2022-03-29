import { FC, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useStyles from './styles';
import Accordion from 'react-bootstrap/Accordion';
import { LinkContainer } from 'react-router-bootstrap';
import { constants } from 'buffer';
import {useForm} from "react-hook-form";

type FormData = {
    email: string;
    make: string;
    year: string;
    service:string[];
}
const AppointmentForm: FC<{ register:any, handleSubmit: any, onSubmit:any }> = ({ register, handleSubmit,onSubmit }) => {
    const classes = useStyles();
    return (
        <div className={classes.form}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Services</Form.Label>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Repair</Accordion.Header>
                        <Accordion.Body>
                        <Form.Check value="r1" label="r1" {...register("service")}></Form.Check>
                            <Form.Check value="r2" label="r2" {...register("service")}></Form.Check>
                            <Form.Check value="r3" label="r3" {...register("service")}></Form.Check>  
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion >
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Oil Change</Accordion.Header>
                        <Accordion.Body>
                        <Form.Check value="o1" label="o1" {...register("service")}></Form.Check>
                            <Form.Check value="o2" label="o2" {...register("service")}></Form.Check>
                            <Form.Check value="o3" label="o3" {...register("service")}></Form.Check>  
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion >
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Tire Service</Accordion.Header>
                        <Accordion.Body>
                            <Form.Check value="t1" label="t1" {...register("service")}></Form.Check>
                            <Form.Check value="t2" label="t2" {...register("service")}></Form.Check>
                            <Form.Check value="t3" label="t3" {...register("service")}></Form.Check>                            
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion >
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Year</Form.Label>
                    <Form.Select aria-label="Default select example" {...register("year")}>
                        <option>Open this select menu</option>
                        <option value="2001" >2001</option>
                        <option value="2002" >2002</option>
                        <option value="2003" >2003</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Make</Form.Label>
                    <Form.Select aria-label="Default select example" {...register("make")}>
                        <option>Open this select menu</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Nissan">Nissan</option>
                        <option value="BMW">BMW</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("model")}/>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Vehicle Identification Number</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("VIN")}/>                
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("Email")}/>
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
                    {/* <LinkContainer to="/confirmation"> */}
                    <Button variant="primary" type="submit">
                        Get Budget
                    </Button>
                    {/* </LinkContainer> */}
                </Form.Group>
            </Form>
        </div>
    );
}

export default AppointmentForm 