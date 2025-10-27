import NavBar from '../components/NavBar'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
const About = ({ border, handleNavBorder }) => {
    return (
        <>
            <motion.section id='about' className='p-2 z-50 absolute w-full bg-background2 h-screen'>
                <NavBar border={border} handleNavBorder={handleNavBorder} />
            </motion.section>
        </>
    )
}

export default About
