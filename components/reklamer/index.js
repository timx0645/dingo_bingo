import { useState } from 'react'
import Wrapper from './style'
import { Row, Column } from '../../elements'
import Carousel from 'react-bootstrap/Carousel'

const Reklame = () => {

    return(
        <Wrapper>
            <Carousel interval={25000} controls={false}>
                <Carousel.Item>
                    <video autoPlay loop>
                        <source src={'../../static/images/vid.mp4'} type="video/mp4" />
                    </video>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={'../../static/images/abar-menu-3.jpg'} />
                </Carousel.Item>
            </Carousel>
        </Wrapper>
    )
}
export default Reklame;