import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://demo1.leotheme.com/leo_bike/themes/leo_bike/assets/img/modules/leoslideshow/b.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-dark">First slide label</h3>
                    <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://demo1.leotheme.com/leo_bike/themes/leo_bike/assets/img/modules/leoslideshow/b.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-dark">Second slide label</h3>
                    <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://demo1.leotheme.com/leo_bike/themes/leo_bike/assets/img/modules/leoslideshow/b.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-dark">Third slide label</h3>
                    <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Slider;