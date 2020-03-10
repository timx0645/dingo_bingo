import styled from 'styled-components'
import { defaults } from '../../global'

const SectionWrapper = styled.section`
    max-width: ${defaults.containerWidth};
    padding: 10px ${p => (parseInt(p.size.width) - parseInt(defaults.containerWidth)) / 2}px;
    overflow: hidden;
    scroll-snap-type: x mandatory;
`;

export { SectionWrapper }