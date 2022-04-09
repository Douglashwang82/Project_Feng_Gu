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
        <>
        <CardGroup>
        <Card>
            <Card.Title>A card</Card.Title>
        </Card>
        <Card>
            <Card.Title>A card</Card.Title>
        </Card>
        <Card>
            <Card.Title>A card</Card.Title>
        </Card>
        </CardGroup>
        </>
    );
}

export default GooReviews 