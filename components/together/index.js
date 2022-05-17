import Wrapper from './style'
import { Row, Column } from '../../elements'
import Header from '../header'
import Reklame from '../reklamer'

const Together = ( props ) => {
    return(
        <Row>
            <Column.md7>
                <Header />
            </Column.md7>
            <Column.md5>
                <Reklame />
            </Column.md5>
        </Row>
    )
}

export default Together;