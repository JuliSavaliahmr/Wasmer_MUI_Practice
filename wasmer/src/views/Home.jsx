import React from 'react'

import { Stack } from '@mui/material'

import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import Banner from './home/Banner'
import RunTheWorld from './home/RunTheWorld'
import Registry from './home/Registry'
import Edge from './home/Edge'
import TrustedSection from './home/TrustedSection'

const Home = () => {
  return (
    <Stack className='bg-gradient1' sx={{overflowX:'hidden!important'}}>
      <Header />
      <Banner/>
      <RunTheWorld/>
      <Registry/>
      <Edge/>
      <TrustedSection/>
      <Footer/>
    </Stack>
  )
}

export default Home
