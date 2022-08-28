import React from 'react'

import Hero from './Hero'
import Servers from './Servers'
import Features from './Features'

const Home = () => {
  return (
    <div data-theme="kurdspex">
        <Hero />
        <Features />
        <Servers />
        <div style={{height: '1200px'}}></div>
    </div>
  )
}

export default Home