import { RowWrapper, EdgeWrapper, ColumnWrapper } from './style'

const Row = ( props ) => {
    return (<RowWrapper className={props.className? props.className : ''} children={props.children} {...props} />)
}

const Edges = ( props ) => {
    return props.onClick
    ? <EdgeWrapper className={props.className? props.className : ''} children={props.children} onClick={() => props.onClick} {...props} />
    : <EdgeWrapper className={props.className? props.className : ''} children={props.children} {...props} />
}

const Column = {
    md1: ( props ) => {
        return (
            <ColumnWrapper 
                mdSize={`width:calc((100% / 12) - ${props.nopadding? '0' : '33px'})`} 
                className={props.className? props.className : ''} 
                children={props.children} 
                {...props} 
            />
            )
    },
    md2: ( props ) => {
        return (
        <ColumnWrapper 
            mdSize={`width:calc((100% / 6) - ${props.nopadding? '0' : '33px'})`} 
            className={props.className? props.className : ''} 
            children={props.children} 
            {...props} 
        />
        )
    },
    md3: ( props ) => {
        return (
        <ColumnWrapper 
            mdSize={`width:calc((100% / 4) - ${props.nopadding? '0' : '33px'})`} 
            className={props.className? props.className : ''} 
            children={props.children} 
            {...props} 
        />
        )
    },
    md4: ( props ) => {
        return (
        <ColumnWrapper 
            mdSize={`width:calc((100% / 3) - ${props.nopadding? '0' : '33px'})`} 
            className={props.className? props.className : ''} 
            children={props.children} 
            {...props} 
        />
        )
    },
    md5: ( props ) => {
        return (
        <ColumnWrapper 
            mdSize={`width:calc(((100% / 12) * 5) - ${props.nopadding? '0' : '33px'})`} 
            className={props.className? props.className : ''} 
            children={props.children} 
            {...props} 
        />
        )
    },
    md6: ( props ) => {
        return (
        <ColumnWrapper 
            mdSize={`width:calc((100% / 2) - ${props.nopadding? '0' : '33px'})`} 
            className={props.className? props.className : ''} 
            children={props.children} 
            {...props} 
        />
        )
    },
    md7: ( props ) => {
        return (
        <ColumnWrapper
            mdSize={`width:calc(((100% / 12) * 7) - ${props.nopadding? '0' : '33px'})`} 
            className={props.className? props.className : ''} 
            children={props.children} 
            {...props} 
        />
        )
    },
    md8: ( props ) => {
        return (
        <ColumnWrapper 
            mdSize={`width:calc(((100% / 12) * 8) - ${props.nopadding? '0' : '33px'})`} 
            className={props.className? props.className : ''} 
            children={props.children} 
            {...props} 
        />
        )
    },
    md9: ( props ) => {
        return (
        <ColumnWrapper 
            mdSize={`width:calc(((100% / 12) * 9) - ${props.nopadding? '0' : '33px'})`} 
            className={props.className? props.className : ''} 
            children={props.children} 
            {...props} 
        />
        )
    },
    md10: ( props ) => {
        return (
        <ColumnWrapper 
            mdSize={`width:calc(((100% / 12) * 10) - ${props.nopadding? '0' : '33px'})`} 
            className={props.className? props.className : ''} 
            children={props.children} 
            {...props} 
        />
        )
    },
    md11: ( props ) => {
        return (
        <ColumnWrapper 
            mdSize={`width:calc(((100% / 12) * 11) - ${props.nopadding? '0' : '33px'})`} 
            className={props.className? props.className : ''} 
            children={props.children} 
            {...props} 
        />
        )
    },
    md12: ( props ) => {
        return (
        <ColumnWrapper 
            mdSize={`width:calc(100% - ${props.nopadding? '0px' : '33px'})`} 
            className={props.className? props.className : ''} 
            children={props.children} 
            {...props} 
        />
        )
    }
}

export { Column, Edges, Row }