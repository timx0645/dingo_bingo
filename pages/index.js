import {useEffect, useState } from 'react'
import { Wrapper, Loader } from '../elements'
import Bingo from '../components/header'
import Head from '../elements/head'
import { Globalstyles } from '../global'
import { Normalize } from 'styled-normalize'

const Index = ( props ) => {
  const [ data, setData ] = useState(false)

  useEffect(() => {
    setData(true)
  }, [])

  return (
    <>
    <Head SEO={props.old_file} />
    <Normalize />
    <Globalstyles />
    <Loader boolean={data}>
      <Wrapper>
        <Bingo />
      </Wrapper>
    </Loader>
    </>
  )
}

Index.getInitialProps = async function() {

  const old_file = require('../static/SEO/default.json');

  return { old_file };

};

export default Index;