import { Wrapper, Heading, Row, Column, Edges, Logo } from '../index'
import { Animation } from '../index'
import { SpinnerWrapper, SubEllipsis1, SubEllipsis2, SubEllipsis3, SubEllipsis4, Ellipsis } from './style'

const Spinner = ({ children, boolean, code, Teaser }) => {
    return (
        <Animation.fadeIn>
            {
                boolean?
                    <>{children}</>
                :
                code?
                <Wrapper>
                    <Row>
                        <Column.md12>
                            <Edges mt={100} mb={50}>
                                <Logo size={'300px'} /> 
                            </Edges>
                        </Column.md12>
                        <Column.md12>
                            <Heading children={`404 | Siden du leder efter, findes desværre ikke. :(`} {...Teaser} />
                        </Column.md12>
                    </Row>
                </Wrapper>
                :
                <SpinnerWrapper>
                    <Ellipsis>
                        <SubEllipsis1 />
                        <SubEllipsis2 />
                        <SubEllipsis3 />
                        <SubEllipsis4 />
                    </Ellipsis>
                </SpinnerWrapper>
            }
        </Animation.fadeIn>
    )
}

Spinner.defaultProps = {
    Teaser: {
        Size:30,
        Weight: 600,
        Align: 'center'
    }
}

export default Spinner