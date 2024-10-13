import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import Owners from '../components/Owners'




const ServiceCard = ({index, title, icon,}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max:45,
          scale:1,
          speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col cursor-pointer">
            <img src={icon} alt={title} 
            className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
      </motion.div>
    </Tilt>
    
  )
}


const About = () => {


  return (
    <>
      <motion.div variants={textVariant()}>
        
        <h2 className={styles.sectionHeadText}
        >
          Invest in your business entity today!
        </h2>
        <a href="#contact">
          <button
          className="bg-quaternary py-3 px-8 outline-none w-fit text-white font-bold shadow-md
          shadow-primary rounded-xl"
          
          >
            Get A Quote!

          </button>
        </a>

      </motion.div>


      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
          Your new go-to for all things digital!
          A fresh face in the tech world specializing in <br/>Web App, Mobile App Development, and other services, 
          bursting with innovative ideas and the expertise to make them real.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center mx-auto">
        {services.map((service, index) => (
          <ServiceCard 
          key={service.title} 
          index={index} 
          {...service}
          />
        ))}
      </div>

      <div className="mt-20">
        <Owners />
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")