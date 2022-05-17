const randomBingo = (data) => {
    let nyetal = [];
    data.tal.map(e => {
        if(!data.bad.includes(e)) {
            nyetal.push(e)
        }
    })
    let nytTal = nyetal[Math.floor(Math.random() * nyetal.length)];
    data.bad.push(nytTal)
    return {...data, nyeste: nytTal} 
}

const addBingo = (data, nyeste) => {
    data.bad.push(nyeste)
    return {...data, nyeste}
}

const removeBingo = (data, remove) => {
    let tal = [];
    data.bad.map(e => {
        if(e !== remove) {
            tal.push(e)
        }
    })
    return {...data, nyeste: data.bad[data.bad.length - 2], bad: tal}
}

export { randomBingo, addBingo, removeBingo }