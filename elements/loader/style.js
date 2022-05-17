import styled, { keyframes } from 'styled-components'

const SpinnerWrapper = styled.div`
    display: flex;
    transform: translateZ(1px);
    postion: relative;
    width: 100%;
    height: 100vh;
`
const Ellipsis1 = keyframes`
    0% {transform: scale(0);}
    100% {transform: scale(1);}
`;
const Ellipsis2 = keyframes`
    0% {transform: translate(0, 0);}
    100% {transform: translate(24px, 0);}
`;
const Ellipsis3 = keyframes`
    0% {transform: scale(1);}
    100% {transform: scale(0);}
`;
const Ellipsis = styled.div`
    align-self: center;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: auto;
    div {
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    &.fadeOut {
        opacity: 0;
        transition: opacity .6s ease-in-out;
    }
`
const SubEllipsis1 = styled.div`
    left: 8px;
    animation: ${Ellipsis1} 1s infinite;
`;
const SubEllipsis2 = styled.div`
    left: 8px;
    animation: ${Ellipsis2} 1s infinite;
`;
const SubEllipsis3 = styled.div`
    left: 26px;
    animation: ${Ellipsis2} 1s infinite;
`;
const SubEllipsis4 = styled.div`
    left: 50px;
    animation: ${Ellipsis3} 1s infinite;
`;

export { SpinnerWrapper, SubEllipsis1, SubEllipsis2, SubEllipsis3, SubEllipsis4, Ellipsis }