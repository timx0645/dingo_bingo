import styled from 'styled-components'
import { defaults } from '../../global'

const TextWrapper = styled.div`
    ${p => p.AS? p.AS : 'h2'} {
        font-family: ${defaults.font.family.heading};
        font-size: ${p => p.Size? p.Size : defaults.font.size}px;
        color: ${p => p.Color? p.Color : defaults.font.color.dark};
        font-weight: ${p => p.Weight? p.Weight : '400'};
        line-height: ${p => p.LineHeight? p.ineHeight + 'em': 'initial'};
        text-align: ${p => p.Align? p.Align : 'left'};
        letter-spacing: ${p => p.letterSpacing? p.letterSpacing + 'em' : 'initial'};
        text-transform: ${p => p.textTransform? p.textTransform : 'initial'};
        ${p => p.border? 'border: ' + p.border + ';' : ''}
        ${p => p.bt? 'border-top: ' + p.bt + ';' : ''}
        ${p => p.bb? 'border-bottom: ' + p.bb + ';' : ''}
        ${p => p.br? 'border-right: ' + p.br + ';' : ''}
        ${p => p.bl? 'border-left: ' + p.bl + ';' : ''}
        ${p => p.btlr? 'border-top-left-radius: ' + p.btlr + 'px;' : ''}
        ${p => p.btrr? 'border-top-right-radius: ' + p.btrr + 'px;' : ''}
        ${p => p.bblr? 'border-bottom-left-radius: ' + p.bblr + 'px;' : ''}
        ${p => p.bbrr? 'border-bottom-right-radius: ' + p.bbrr + 'px;' : ''}
        ${p => p.transition? 'transition: ' + p.transition + ';' : ''}
        ${p => p.transform? 'transform: ' + p.transform + ';' : ''}
        margin-bottom: ${p => p.mb? p.mb === 'auto'? 'auto' : p.mb + 'px' : '0'};
        margin-top: ${p => p.mt? p.mt === 'auto'? 'auto' : p.mt + 'px' : '0'};
        margin-right: ${p => p.mr? p.mr === 'auto'? 'auto' : p.mr + 'px' : '0'};
        margin-left: ${p => p.ml? p.ml === 'auto'? 'auto' : p.ml + 'px' : '0'};
        padding-bottom: ${p => p.pb? p.pb : '0'}px !important;
        padding-top: ${p => p.pt? p.pt : '0'}px !important;
        padding-right: ${p => p.pr? p.pr : '0'}px !important;
        padding-left: ${p => p.pl? p.pl : '0'}px !important;
        border-radius: ${p => p.BorderRadius? p.BorderRadius : '0'}px !important;
        background-color: ${p => p.Background? p.Background : 'transparent'} !important;
        ${p => p.pointer? 'cursor: pointer;' : ''}
    }
    ${p => p.AlignSelf? 'align-self: ' + p.AlignSelf + ';': ''}
`

export { TextWrapper }