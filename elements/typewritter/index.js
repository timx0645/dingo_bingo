import { WriterWrapper } from './style'

const TypeWritter = ( props ) => {
    return (
        <WriterWrapper className={props.className? props.className : ''} {...props}>
            <Typewriter
            options={{
                strings: props.elements,
                autoStart: true,
                loop: true,
            }}
            />
        </WriterWrapper>
    )
}

export default TypeWritter