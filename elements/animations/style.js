import styled from 'styled-components'

const TransitionWrapper = styled.div`
scroll-snap-align: start;
    ${p => p.out?
        'opacity: 0; transition: opacity .7s ease-in-out, height .7s ease-in-out, transform .7s ease-in-out; height: 0; overflow: hidden; transform: translate' + p.out.axis + '(' + p.out.to + ');'
    :
        (
            'opacity: ' + (p.bool? '1;': '0;' ) 
            +
            (p.transition? 
            'transition: opacity ' + p.transition + 
            (
                p.transform? ', transform ' + p.transition + ';' 
                : 
                ';'
            )
            :
            'transition: opacity .7s ease-in-out'
            )
            +
            (p.transform? 
                (p.bool?
                    'transform: translate' + (p.transform.axis? p.transform.axis : 'X') + '(' + (p.transform.to? p.transform.to : '0') + '%);'
                :
                    'transform: translate' + (p.transform.axis? p.transform.axis : 'X') + '(' + (p.transform.from? p.transform.from : '100') + '%);'
                )
            : 
                ''
            )
        )
    }
`;
export { TransitionWrapper }