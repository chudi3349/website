import React from 'react';
import {Carousel} from 'react-bootstrap';
import Hotel from "../layout/images/hotel.jpg";
import Services from "../layout/images/touch.jpg";
import Product from "../layout/images/product.jpg"; 
;


export default function Carosel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={Hotel}
                    alt="First slide"
                    style={{
                        width:'100%',
                        height: '500px'
                    }}
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={Services}
                    alt="Second slide"
                    style={{
                        width:'100%',
                        height: '500px'
                    }}
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Product}
                    alt="Third slide"
                    style={{
                        width:'100%',
                        height: '500px'
                    }}
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
