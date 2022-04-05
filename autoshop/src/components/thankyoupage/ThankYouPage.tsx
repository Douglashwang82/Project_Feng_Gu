import { FC } from 'react'
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import useStyles from './styles';
const ThankYouPage: FC = () => {
    const classes = useStyles();

    
    return (
        <>
            <Card className={classes.card}>
                    <Card.Title>Thank you!</Card.Title>
                    <Card.Text>
                        We will reach you back soon.
                    </Card.Text>
                    <LinkContainer to="/home">
                        <Button>Back</Button>
                    </LinkContainer>
            </Card>
        </>
    );
}

export default ThankYouPage 