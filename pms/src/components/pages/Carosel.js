import React from 'react';
import {Carousel} from 'react-bootstrap';
import Limitless from "../layout/images/limitless.jpg";
import Team from "../layout/images/team.png";
import Satisfaction from "../layout/images/satisfaction.jpg"; 
import './services.scss'


export default function Carosel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={Limitless}
                    alt="First slide"
                    style={{
                        width:'100%',
                        height: '500px'
                    }}
                    />
                    <Carousel.Caption style={{
                        color:'black'
                    }}>
                    <h2>Limitless</h2>
                    <h4>Never set a limit to what you can achieve</h4>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={Satisfaction}
                    alt="Second slide"
                    style={{
                        width:'100%',
                        height: '500px'
                    }}
                    />
                    <Carousel.Caption>
                    <h2>Work for Satisfaction</h2>
                    <h4>Lets build the future together</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Team}
                    alt="Third slide"
                    style={{
                        width:'100%',
                        height: '500px'
                    }}
                    />
                    <Carousel.Caption>
                    <h2>Join Us</h2>
                    <h4>We are the Next level</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
