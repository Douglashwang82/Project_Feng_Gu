import { FC } from 'react'
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ConfirmationPage: FC<{ data: any }> = ({ data }) => {
    const classes = useStyles();
    const url = "http://localhost:8000/services";
    const navigate = useNavigate();
    const handleConfirmation = () => {
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
      });
    };

    return (
        <div className={classes.confirmation}>
            {console.log(data)}
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
                {data.AppointmentServices.map((x: string, key: string) => (
                    <Row key={key}><Col><Typography>{x}</Typography></Col></Row>
                )
                )}
            <Button onClick={handleConfirmation}>Get Budget</Button>
            </Container>
        </div>
    );
}

export default ConfirmationPage 