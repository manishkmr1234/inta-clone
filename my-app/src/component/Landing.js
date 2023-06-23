


import React from "react";
import { Link } from "react-router-dom";
import home from '../all-image/home.png';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import'./Landing.css';


export default function Landing() {
    return (
       
        <div className="home-cont">
            <Card className="home">
                <Card.Img  className="landing-img"  variant="left" src={home} alt="post-img" />
                <Card.Body className="landing-content">
                    <Card.Title>10x team 04</Card.Title>

                    <Link to={"new"}> <Button variant="primary">Enter</Button> </Link>
                   
                </Card.Body>
            </Card>

        </div>
)
}

//post/all