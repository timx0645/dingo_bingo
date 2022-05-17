import { Row, Column, Heading, Animation, Text, Edges, Button } from '../../elements'
import { useState, useEffect } from 'react'
import Wrapper from './header.style'
import { defaults } from '../../global'
import { addBingo, removeBingo, randomBingo } from './functions'

const FrontPageHeader = ({ButtonStyleRemove, HeadingStyle, Redbox, FlexBox, Orangebox, defaultText, Bingobox, BadBingobox, Bingotal, BadBingotal, ButtonStyle, selectedText, nonselected}) => {

    const [data, setData ] = useState({ 
            nyeste: 0, 
            tal: [], 
            bad: [] 
    })

    const [ ani, setAni ] = useState(false)

    const [ ran, setRan ] = useState(2)
    
    useEffect(() => {
        const bingotal = localStorage.getItem('bingotal');
        if(!bingotal) {
            let tal= [];
            for (let i = 1; i < 91; i++) {
                tal.push(i)
            }
            setData({...data, tal});
        } else {
            setData({...JSON.parse(bingotal)});
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('bingotal', JSON.stringify(data));
    }, [data])

    const tomorrow = new Date();

    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

    const returnNumber = () => {
        setAni(true)

        const inter = setInterval(() => {
            setRan(data.tal[Math.floor(Math.random() * data.tal.length)])
        }, 50)

        setTimeout(() => {
            setData(randomBingo(data)),
            setAni(false)
            clearInterval(inter)
        }, 500)

    }

    const removeBingoTal = () => {
        const bingotal = localStorage.getItem('bingotal');
        if(bingotal) localStorage.removeItem('bingotal');
        let tal= [];
        for (let i = 1; i < 91; i++) {
            tal.push(i)
        }
        setData({
            nyeste: 0, 
            tal: [...tal], 
            bad: []
        })
    }

    return (
        <Animation.slideIn inAni={'left'} outAni={false}>
            <Wrapper>
                <Row {...Redbox}>
                    <Column.md12 {...FlexBox}>
                        <img src={'../../static/images/favicon.png'} />
                        <Heading {...HeadingStyle}>Turbo Bingo D. {tomorrow.getDate()} {Months[tomorrow.getMonth()]}.</Heading>
                        <Button ButtonText={'Ryd'} onClick={() => removeBingoTal()} {...ButtonStyleRemove}/>
                    </Column.md12>
                </Row>
                <Row {...Orangebox}>
                    <Column.md12 flex>
                        <Text {...defaultText}>Nyeste nummer:</Text>
                        <Text onClick={() => returnNumber()} {...ani? nonselected : selectedText}>{ani? ran : data.nyeste}</Text>
                    </Column.md12>
                </Row>
                <Row>
                    {data.tal.map((e,i) => (
                        <Edges 
                            key={`bingo-box-${i}`} 
                            onClick={data.bad.includes(e)? () => setData(removeBingo(data, e)) : () => setData(addBingo(data, e))} 
                            {...data.bad.includes(e)? BadBingobox : Bingobox}>
                            <Text {...data.bad.includes(e)? BadBingotal : Bingotal}>{e}</Text>
                        </Edges>
                    ))}
                </Row>
            </Wrapper>
        </Animation.slideIn>
    )
}

FrontPageHeader.defaultProps = {
    HeadingStyle: {
        AS: 'h1',
        Size:35,
        Weight: 600,
        AlignSelf: 'center',
        ml: 250,
        Color: defaults.font.color.light
    },
    defaultText: {
        Size: 18,
        Color: defaults.font.color.light,
        transition: '.2s',
        ml: 0,
        Align: 'center',
    },
    nonselected: {
        Size: 45,
        Color: defaults.font.color.light,
        transition: '.2s',
        BorderRadius: 200,
        Background: defaults.colors.third,
        Height: '70px',
        Width: '70px',
        ml: 20,
        mt: -20,
        mb: -20,
        Align: 'center',
        AlignSelf: 'center',
        LineHeight: '70px'
    },
    selectedText: {
        Size: 45,
        Color: defaults.font.color.light,
        transition: '.4s',
        BorderRadius: 200,
        Background: defaults.colors.primary,
        Height: '70px',
        Width: '70px',
        ml: 20,
        mt: -20,
        mb: -20,
        Align: 'center',
        AlignSelf: 'center',
        LineHeight: '70px'
    },
    Redbox: {
        Background: defaults.colors.third,
        BorderRadius: 3,
        mt: 30
    },
    Orangebox: {
        Background: defaults.colors.secondary,
        BorderRadius: 3,
        mt: 55
    },
    Bingobox: {
        pt: 7,
        pb: 7,
        Background: 'rgba(255,255,255,0.8)',
        mt: 13,
        mr: 7.5,
        ml: 7.5,
        Width: 'calc(10% - 15px)',
        BorderRadius: 4,
        pointer: true,
        transition: '.4s',
    },
    BadBingobox: {
        pt: 7,
        pb: 7,
        Background: 'rgba(0, 150, 129,0.7)',
        mt: 7,
        mr: 7.5,
        ml: 7.5,
        Width: 'calc(10% - 15px)',
        BorderRadius: 4,
        pointer: true,
        transition: '.4s',
    },
    Bingotal: {
        AlignSelf: 'center',
        Size: 22,
        Align: 'center'
    },
    BadBingotal: {
        AlignSelf: 'center',
        Size: 22,
        Align: 'center',
        Color: defaults.font.color.light
    },
    FlexBox: {
        flex: true
    },
    ButtonStyleRemove: {
        Background: defaults.colors.third,
        BorderRadius: 5,
        Color: defaults.font.color.light,
        BorderRadius: 5,
        pr: 10,
        pl: 10,
        pt: 5,
        pb: 5,
        ml: 'auto',
        border: 'solid 2px ' + defaults.colors.third,
        hover: {
            border: 'solid 2px ' + defaults.colors.third,
            BorderRadius: 5,
            Color: defaults.colors.secondary,
        }
    },
    ButtonStyle: {
        Background: defaults.colors.primary,
        BorderRadius: 5,
        Color: defaults.font.color.light,
        BorderRadius: 5,
        pr: 10,
        pl: 10,
        pt: 5,
        pb: 5,
        ml: 'auto',
        border: 'solid 2px ' + defaults.colors.primary,
        hover: {
            border: 'solid 2px ' + defaults.colors.primary,
            BorderRadius: 5,
            Color: defaults.colors.primary,
        }
    }
}

export default FrontPageHeader