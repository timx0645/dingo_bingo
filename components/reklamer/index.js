import Wrapper from './style'
import Carousel from 'react-bootstrap/Carousel'
import ReactPlayer from 'react-player'

const Reklame = () => {

    return(
        <Wrapper>
            <Carousel interval={30000} controls={false}>
                <Carousel.Item>
                    <ReactPlayer autoplay auto playing loop url={'../../static/images/vid.mp4'} width="100%" height="100vh"/> 
                </Carousel.Item>
                <Carousel.Item>
                    <img src={'../../static/images/abar-menu-3.jpg'} />
                </Carousel.Item>
            </Carousel>
        </Wrapper>
    )
}
export default Reklame;