import { FC, useState } from 'react'
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import {
    MyContainer
} from "./ConfirmPageElements";


const ConfirmationPage: FC<{ data: any }> = ({ data }) => {
    const classes = useStyles();
    const url = "http://localhost:8000/services";
    const navigate = useNavigate();
    const [isWaiting, setIsWaiting] = useState(0);

    const handleConfirmation = () => {
        setIsWaiting(1);
        axios
        .post(url, data, {
          headers: {
            // Accept: "application/json",
            // "Content-Type": "application/json;charset=UTF-8",
          },
        })
        .then(({data}) => {
        //   alert("xox");
          console.log(data);
          navigate("/thankyou");
      })    
      .catch(function(err){
        console.log(`err ${err}`);
        alert(`err ${err}`);
        navigate("/thankyou");
      });
    };

    return (
            <MyContainer>
            <Container>
                <Row>
                    <Col><Typography>Make:</Typography></Col>
                    <Col>
                        <Typography>{data.AppointmentMake}</Typography>
                    </Col>
                </Row>

                <Row>
                    <Col><Typography>Model:</Typography></Col>
                    <Col>
                        <Typography>{data.AppointmentModel}</Typography>
                    </Col>
                </Row>

                <Row>
                    <Col><Typography>Year:</Typography></Col>
                    <Col>
                        <Typography>{data.AppointmentYear}</Typography>
                    </Col>
                </Row>

                <Row>
                    <Col><Typography>VIN:</Typography></Col>
                    <Col>
                        <Typography>{data.AppointmentVIN}</Typography>
                    </Col>
                </Row>

                <Row>
                    <Col><Typography>Email:</Typography></Col>
                    <Col>
                        <Typography>{data.AppointmentEmail}</Typography>
                    </Col>
                </Row>

                <Row>
                    <Typography>Services:</Typography>
                </Row>
                {Array.isArray(data.AppointmentServices) ? 
                data.AppointmentServices.map((x: string, key: string) => (
                    <Row key={key}><Col><Typography>{x}</Typography></Col></Row>
                )
                ) : console.log("nothing here")}
                {isWaiting==0 ? <Button onClick={handleConfirmation}>Get Budget</Button> : <Spinner animation ="border"></Spinner>}
            {/* <Button onClick={handleConfirmation}>Get Budget</Button>
            <Spinner animation ="border"></Spinner> */}
            </Container>
            </MyContainer>
    );
}

export default ConfirmationPage 