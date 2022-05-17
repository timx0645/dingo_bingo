import styled from 'styled-components'

const LogoWrapper = styled.div`
    display: flex;
    .st0 {
        fill: ${props => props.color? props.color : '#fff'}
    }
    svg {
        width: ${props => props.size? props.size : '400px'};
        height: ${props =>props.size? props.size : '400px'};
        margin: auto;
    }
`;

export { LogoWrapper }