import { Row, Column, Heading, Animation, Text, Edges, Button } from '../../elements'
import { useState, useEffect } from 'react'
import Wrapper from './header.style'
import { defaults } from '../../global'
import { addBingo, removeBingo, randomBingo } from './functions'

const FrontPageHeader = ({HeadingStyle, Redbox, FlexBox, Orangebox, defaultText, Bingobox, BadBingobox, Bingotal, BadBingotal, ButtonStyle, selectedText, nonselected}) => {

    const [data, setData ] = useState({ 
            nyeste: 0, 
            tal: [], 
            bad: [] 
    })

    const [ ani, setAni ] = useState(false)

    const [ ran, setRan ] = useState(2)
    
    useEffect(() => {
        let tal= [];
        for (let i = 1; i < 91; i++) {
            tal.push(i)
        }
        setData({...data, tal})
    }, [])

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
        }, 1500)

    }

    return (
        <Animation.slideIn inAni={'left'} outAni={false}>
            <Wrapper>
                <Row {...Redbox}>
                    <Column.md12 {...FlexBox}>
                        <img src={'../../static/images/favicon.png'} />
                        <Heading {...HeadingStyle}>Dingo Bingo D. {tomorrow.getDate()} {Months[tomorrow.getMonth()]}.</Heading>
                    </Column.md12>
                </Row>
                <Row {...Orangebox}>
                    <Column.md12 flex>
                        <Text {...defaultText}>Nyeste nummer:</Text>
                        <Text {...ani? nonselected : selectedText}>{ani? ran : data.nyeste}</Text>
                        <Button ButtonText={'Nyt nummer'} onClick={() => returnNumber()} {...ButtonStyle}/>
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
        Size:50,
        Weight: 600,
        AlignSelf: 'center',
        ml: 250,
        Color: defaults.font.color.light
    },
    defaultText: {
        Size: 22,
        Color: defaults.font.color.light,
        transition: '.2s',
        ml: 10,
        Align: 'center',
    },
    nonselected: {
        Size: 25,
        Color: defaults.font.color.light,
        transition: '.2s',
        BorderRadius: 200,
        Background: defaults.colors.third,
        Height: '45px',
        Width: '45px',
        ml: 10,
        Align: 'center',
        AlignSelf: 'center'
    },
    selectedText: {
        Size: 25,
        Color: defaults.font.color.light,
        transition: '.4s',
        BorderRadius: 200,
        Background: defaults.colors.primary,
        Height: '45px',
        Width: '45px',
        ml: 10,
        Align: 'center',
        AlignSelf: 'center'
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
        mr: 15,
        Width: 'calc(10% - 15px)',
        BorderRadius: 4,
        pointer: true,
        transition: '.4s',
    },
    BadBingobox: {
        pt: 7,
        pb: 7,
        Background: 'rgba(0, 150, 129,0.7)',
        mt: 13,
        mr: 15,
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