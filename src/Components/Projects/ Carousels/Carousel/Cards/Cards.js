import React from 'react';
import { Card, CardTitle, CardActions, Button, CardText } from 'react-mdl';
import './Cards.css';

const card = (props) => {
    return(
        <Card shadow={5} className='Cards'>
            <CardTitle style={{color: '#fff', height: '190px', background: props.url}}>{props.langues}</CardTitle>
            <CardText> {props.text} </CardText>
            <CardActions border>
                <Button Colored>GitHub</Button>
                <Button Colored>Codepen</Button>
                <Button Colored>Live Demo</Button>
            </CardActions>
            {/* <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu> */}
        </Card>
    )
}

export default card;