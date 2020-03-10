import styled from 'styled-components'
import { defaults } from '../../global'

const { tablet, laptop } = defaults.breakpoints;

const RowWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-radius: ${p => p.BorderRadius? p.BorderRadius : '0'}px;
    background-color: ${p => p.Background? p.Background : 'transparent'};
    width: 100%;
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
    padding-bottom: ${p => p.pb? p.pb : '0'}px;
    padding-top: ${p => p.pt? p.pt : '0'}px;
    padding-right: ${p => p.pr? p.pr : '0'}px;
    padding-left: ${p => p.pl? p.pl : '0'}px;
    ${p => p.pointer? 'cursor: pointer;' : ''}
    @media ${tablet} {
        flex-direction: row;
    }
`;

const EdgeWrapper = styled.div`
    border-radius: ${p => p.BorderRadius? p.BorderRadius : '0'}px;
    background-color: ${p => p.Background? p.Background : 'transparent'};
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
    padding-bottom: ${p => p.pb? p.pb : '0'}px;
    padding-top: ${p => p.pt? p.pt : '0'}px;
    padding-right: ${p => p.pr? p.pr : '0'}px;
    padding-left: ${p => p.pl? p.pl : '0'}px;
    width: ${p => p.Width? p.Width : 'auto'};
    height: ${p => p.Height? p.Height : 'auto'};
    ${p => p.flex? 'display: flex; flex-wrap: wrap;' : ''}
    ${p => p.pointer? 'cursor: pointer;' : ''}
`;

const ColumnWrapper = styled.div`
    width: calc(100% - 33px);
    border-radius: ${p => p.BorderRadius? p.BorderRadius : '0'}px;
    background-color: ${p => p.Background? p.Background : 'transparent'};
    padding: ${p => p.nopadding? '0' : '16px'};
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
    ${p => p.pb? 'padding-bottom:' + p.pb + 'px;': ''}
    ${p => p.pt? 'padding-top:' + p.pt + 'px;': ''}
    ${p => p.pr? 'padding-right:' + p.pr + 'px;': ''}
    ${p => p.pl? 'padding-left:' + p.pl + 'px;': ''}
    ${p => p.flex? 'display: flex; flex-wrap: wrap;' : ''}
    ${p => p.pointer? 'cursor: pointer;' : ''}
    @media ${tablet} {
        width: calc(50% - 33px);
    }
    @media ${laptop} {
        ${p => p.mdSize};
    }
`;

export { RowWrapper, EdgeWrapper, ColumnWrapper }