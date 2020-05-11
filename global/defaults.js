import breakpoint from './breakpoints'

export default { 
    colors: {
        primary: '#009681',
        secondary: '#f8a22f',
        third: '#cb3426',
        background: '#171718'
    },
    shadows: {
        primary: '-webkit-box-shadow: 0px 0px 31px -14px rgba(0,0,0,0.83); -moz-box-shadow: 0px 0px 31px -14px rgba(0,0,0,0.83); box-shadow: 0px 0px 31px -14px rgba(0,0,0,0.83);',
        secondary: ''
    },
    font: {
        family: {
            button: 'alegreya',
            text: 'glegoo',
            heading: 'alegreya',
            links: 'glegoo'
        },
        color: {
            dark: '#171718',
            light: '#fff'
        },
        size: 15
    },
    breakpoints: {
        mobileS: `(min-width: ${breakpoint.mobileS})`,
        mobileM: `(min-width: ${breakpoint.mobileM})`,
        mobileL: `(min-width: ${breakpoint.mobileL})`,
        tablet: `(min-width: ${breakpoint.tablet})`,
        laptop: `(min-width: ${breakpoint.laptop})`,
        laptopL: `(min-width: ${breakpoint.laptopL})`,
        desktop: `(min-width: ${breakpoint.desktop})`,
        desktopL: `(min-width: ${breakpoint.desktopL})`
    },
    containerWidth: '2000px'
}