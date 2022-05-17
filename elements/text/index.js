import { TextWrapper } from './style'

const Text = ( props ) => {
    return (
    <TextWrapper className={props.className? props.className : ''} {...props}>
        {props.children} 
    </TextWrapper>
    )
}

export default Text