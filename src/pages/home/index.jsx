import Approach from '@/section/home/approachSection/Approach'
import Business from '@/section/home/businessSection/Business'
//import Footer from '@/section/home/Footer section/Footer'
//import Functionality from '@/section/home/functionalitySection/Functionality'
import HeroSection from '@/section/home/heroSection/HeroSection'
import Solutions from '@/section/home/intelligentSolutions/Solutions'
import Technology from '@/section/home/technologySection/Technology'
import TestimonialSection from '@/section/home/Testimonial Section/TestimonialSection'

import React from 'react'
import { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
     {/*<Functionality />*/}
      <Solutions />
      <Business />
      <Technology /> 
      <TestimonialSection />
      <Approach />
     {/* <Footer />*/}
    
    </Fragment>
  )
}

export default Home