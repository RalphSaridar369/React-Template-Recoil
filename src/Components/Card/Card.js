import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Card.scss';

export default function MediaCard({ img, desc, name }) {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    width="300"
                    image={img}
                    alt="Card Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
