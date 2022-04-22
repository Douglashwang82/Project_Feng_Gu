import { FC, useState } from 'react'
import useStyles from './styles';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const GooReviews: FC = () => {
    const classes = useStyles()
    const [reviews, setReviews] = useState<string[]>([])
    
    const handleReviews = () => [

    ];
    return (
        <Card className={classes.carddiv}>
        <CardGroup className={classes.cardgroup}>
        <Card>
            <Card.Title>A card</Card.Title>
            <Card.Body>
                <Card.Text>
                    card text
                </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Title>A card</Card.Title>
        </Card>
        <Card>
            <Card.Title>A card</Card.Title>
        </Card>
        </CardGroup>
        </Card>
    );
}

export default GooReviews 