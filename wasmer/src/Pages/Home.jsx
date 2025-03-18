import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import { Stack } from '@mui/material'
import RunTheWorld from '../Components/Run The World/RunTheWorld'
import Registry from '../Components/Registry/Registry'
import Edge from '../Components/Edge/Edge'
import TrustedSection from '../Components/TrustedSection/TrustedSection'
import Footer from '../Components/Footer/Footer'
const Home = () => {
  return (
    <Stack className='bg-gradient1'>
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
