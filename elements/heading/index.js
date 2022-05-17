import { TextWrapper } from './style'
import styled from 'styled-components'

const Heading = ( props ) => {
    const TextType = styled(props.AS? props.AS : 'h2')``;
    return (
    <TextWrapper className={props.className? props.className : ''} {...props}>
        <TextType>{props.children} </TextType>
    </TextWrapper>
    )
}

export default Heading