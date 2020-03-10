import Wrapper from './style'
import { Row, Column } from '../../elements'

const Reklame = ( props ) => {
    return(
        <Wrapper>
            <Row>
                <Column.md12>
                    <img src={'../../static/images/abar-menu-3.jpg'} />
                </Column.md12>
            </Row>
        </Wrapper>
    )
}

export default Reklame;