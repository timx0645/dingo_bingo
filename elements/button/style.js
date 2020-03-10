import styled from 'styled-components'
import { defaults } from '../../global'

const TextWrapper = styled.button`
    font-family: ${defaults.font.family.button};
    font-size: ${p => p.Size? p.Size : defaults.font.size}px;
    color: ${p => p.Color? p.Color : defaults.font.color.dark};
    font-weight: ${p => p.Weight? p.Weight : '400'};
    line-height: ${p => p.LineHeight? p.ineHeight + 'em': 'initial'};
    text-align: ${p => p.Align? p.Align : 'left'};
    letter-spacing: ${p => p.letterSpacing? p.letterSpacing + 'em' : 'initial'};
    text-transform: ${p => p.textTransform? p.textTransform : 'initial'};
    padding-bottom: ${p => p.pb? p.pb : '0'}px;
    padding-top: ${p => p.pt? p.pt : '0'}px;
    padding-right: ${p => p.pr? p.pr : '0'}px;
    padding-left: ${p => p.pl? p.pl : '0'}px;
    border-radius: ${p => p.BorderRadius? p.BorderRadius : '0'}px;
    background-color: ${p => p.Background? p.Background : 'transparent'};
    ${p => p.AlignSelf? 'align-self: ' + p.AlignSelf + ';': ''}
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
    ${p => p.pointer? 'cursor: pointer;' : ''}
    &:hover {
        border-radius: ${p => p.hover.BorderRadius? p.hover.BorderRadius : '0'}px;
        background-color: ${p => p.hover.Background? p.hover.Background : 'transparent'};
        color: ${p => p.hover.Color? p.hover.Color : defaults.font.color.dark};
        ${p => p.hover.AlignSelf? 'align-self: ' + p.hover.AlignSelf + ';': ''}
        ${p => p.hover.border? 'border: ' + p.hover.border + ';' : ''}
        ${p => p.hover.bt? 'border-top: ' + p.hover.bt + ';' : ''}
        ${p => p.hover.bb? 'border-bottom: ' + p.hover.bb + ';' : ''}
        ${p => p.hover.br? 'border-right: ' + p.hover.br + ';' : ''}
        ${p => p.hover.bl? 'border-left: ' + p.hover.bl + ';' : ''}
        ${p => p.hover.btlr? 'border-top-left-radius: ' + p.hover.btlr + 'px;' : ''}
        ${p => p.hover.btrr? 'border-top-right-radius: ' + p.hover.btrr + 'px;' : ''}
        ${p => p.hover.bblr? 'border-bottom-left-radius: ' + p.hover.bblr + 'px;' : ''}
        ${p => p.hover.bbrr? 'border-bottom-right-radius: ' + p.hover.bbrr + 'px;' : ''}
        ${p => p.hover.transform? 'transform: ' + p.hover.transform + ';' : ''}
    }
`

export { TextWrapper }