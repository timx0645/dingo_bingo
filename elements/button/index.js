import { TextWrapper } from './style'

const Button = ( props, {hover} ) => {
    return (
    <TextWrapper 
        className={props.className? props.className : ''} 
        onClick={props.onClick? props.onClick : ''}
        hover={hover}
        {...props}
    >
        {props.Icon}
        {props.ButtonText}
    </TextWrapper>
    )
}

Button.defaultProps = {
    hover: {},
    pointer: true,
    transition: '.3s'
}

export default Button