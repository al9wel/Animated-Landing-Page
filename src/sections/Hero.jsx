import React from 'react'
import NavBar from '../components/NavBar'
import heroImage from "../assets/images/heroImage.png"
import { Boxes } from '../components/Boxes'
import CircularText from "../components/CircularText"
import RotatingText from "../components/RotatingText"
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'

const Hero = () => {
    return (
        <>
            <motion.section id='home' className=' p-2 h-screen  '>
                <motion.div className='bg-container/98 backdrop-blur-2xl w-full min-h-[97vh] md:min-h-180 rounded-md font-regular overflow-hidden'>
                    {/* nav */}
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "backOut" }}>
                        <NavBar border={"Home"} />
                    </motion.div>
                    {/* title */}
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1, ease: "backOut" }} className="flex justify-center items-center">
                        <h1 className="text-4xl sm:text-6xl  md:text-7xl lg:text-[90px] xl:text-9xl text-title1  font-title uppercase">
                            Frontend
                        </h1>
                        <div className="relative min-w-[10ch] flex justify-center">
                            <RotatingText
                                texts={['Developer', 'Designer', 'Coder']}
                                mainClassName="text-3xl rounded-md p-1 bg-[#a52a2a] text-left sm:text-5xl md:text-6xl lg:text-[80px] xl:text-8xl text-title1 font-title uppercase absolute"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </div>
                    </motion.div>
                    {/* pargarhs lg screens */}
                    < motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1, ease: "backOut" }} className='hidden lg:flex relative text-title2 justify-center font-light items-center gap-4 lg:mt-8 xl:mt-4' >
                        <p className='max-w-100 xl:max-w-130 xl:text-[22px] text-black/70 px-2 font-Saira font-light  bg-background2 uppercase'>I’m a creative <motion.span initial={{ opacity: 0, }} animate={{ opacity: 1, }} transition={{ delay: 1.2, duration: 0.5, ease: "backOut" }} className='bg-info1 text-background2 mt-1 border shadow shadow-black border-black/40 px-1 inline-block'>FRONTEND</motion.span> Developer with a deep love for  design  and clean<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.5, ease: "backOut" }} className='bg-info2 text-black/70 mb-1 mx-1 border shadow shadow-black border-black/40 px-1 inline-block'>code.</motion.span></p>
                        <p className='max-w-100 xl:max-w-130 xl:text-[18px] text-background2 font-Saira'>With every line of code, I aim to make the web more engaging, accessible, and enjoyable for everyone. Let’s create something amazing together.</p>
                        <a href="#" className='text-title1 absolute top-18 right-15 border-b border-title1 hover:text-title2 hover:border-title2 duration-200'>GET IN TOUCH {"->"}</a>
                    </motion.div >
                    < motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1, ease: "backOut" }} className='lg:hidden relative flex justify-start items-center flex-col p-4 gap-4 mt-4' >
                        <p className='max-w-[600px] text-background2 uppercase font-Saira leading-7 '>Hi there! I’m a passionate <motion.span initial={{ opacity: 0, }} animate={{ opacity: 1, }} transition={{ delay: 1.2, duration: 0.5, ease: "backOut" }} className='bg-info1/70 px-1 text-background2'>FrontEnd</motion.span> Developer  who loves <motion.span initial={{ opacity: 0, }} animate={{ opacity: 1, }} transition={{ delay: 1.4, duration: 0.5, ease: "backOut" }} className='bg-info2/70 px-1  text-background2'> crafting </motion.span> interactive  modern , and visually <motion.span initial={{ opacity: 0, }} animate={{ opacity: 1, }} transition={{ delay: 1.6, duration: 0.5, ease: "backOut" }} className='bg-info4/70 text-background2 px-2'>appealing</motion.span>  websites</p>
                        <a href="#" className='text-title1 self-end border-b border-title1 hover:text-title2 hover:border-title2 duration-200'>GET IN TOUCH {"->"}</a>
                    </motion.div >
                    {/* img */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 2, ease: "backOut" }} className='bg-title1 overflow-hidden w-[97%] h-60 sm:h-70 md:h-80 lg:w-[98%] xl:w-[90%] lg:h-90 xl:h-95 lg:mt-8 xl:mt-6 rounded-tr-full rounded-br-full relative flex justify-center items-end  ' >
                        <div className=' absolute w-full h-full overflow-hidden'>
                            <Boxes />
                        </div>
                        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5, }} src={heroImage} className='animate w-80 sm:w-70 md:w-90 lg:w-100 xl:w-110 rounded-tr-full pointer-events-none rounded-tl-full absolute' alt="" />
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, duration: 0.2, }} style={{ transform: "rotate(10deg)" }} className=' hidden sm:flex w-25 h-25 lg:w-35 lg:h-35 xl:w-40 xl:h-40 rounded-full absolute top-[10px] left-10 lg:top-[-5px] lg:left-40 xl:top-[-20px] xl:left-50 cursor-pointer bg-info2 justify-center items-center flex-col  border border-black/40'>
                            <h1 className='font-extrabold md:text-[16px] xl:text-2xl text-center'>Design Strategy</h1>
                            <p className=' text-center text-[10px] lg:text-xs lg:p-1 xl:p-2'>ALINING YOUR BUISINESS & USER NEEDS</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9, duration: 0.2, }} style={{ transform: "rotate(-10deg)" }} className=' rounded-md absolute top-[160px] xl:top-[180px] left-2 sm:left-10 lg:left-20  bg-info3 flex justify-center items-center flex-col border border-black/40'>
                            <h1 className='font-extrabold w-fit p-1 text-xs md:text-sm lg:text-xl xl:text-2xl'>E-COMM. <span className='bg-black p-1 text-[10px] md:text-xs rounded-2xl text-info3'>WWW</span> <br />EXPRENICE</h1>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1, duration: 0.2, }} style={{ transform: "rotate(10deg)" }} className=' rounded-md absolute md:top-[250px] md:left-20 lg:top-[280px] lg:left-40  xl:top-[300px] xl:left-50  bg-info4 text-white hidden md:flex justify-center items-center flex-col border border-black/40  '>
                            <h1 className='font-extrabold w-fit p-1 lg:text-xl xl:text-2xl'>E-COMM. MUTATION<br />EXPRENICE WWW</h1>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3, duration: 0.2, }}>
                            <CircularText
                                text="REACT*NEXT*"
                                onHover="speedUp"
                                spinDuration={20}
                                className=" md:w-30 md:h-30 xl:w-35 xl:h-35 bg-info5 border border-black/40"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.2, }} style={{ transform: "rotate(10deg)" }} className=' rounded-md absolute top-[20px] right-5 md:top-[40px] md:right-10 xl:top-[20px] xl:right-50 bg-info1 text-white flex justify-center items-center flex-col border border-black/40'>
                            <h1 className='font-extrabold text-sm md:text-xl xl:text-2xl text-center'>Design Strategy</h1>
                            <p className=' text-center text-[10px] md:text-xs lg:p-1 xl:p-2'>ALINING YOUR BUISINESS & USER NEEDS</p>
                        </motion.div>
                    </motion.div >
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 2, ease: "backOut" }} class="relative mt-5 sm:mt-10 h-1 lg:mt-5 xl:mt-2   w-[70%] mx-auto bg-gradient-to-r from-transparent via-info2 to-transparent">
                        <div class="absolute inset-0 opacity-50 blur-lg"></div>
                    </motion.div>
                </motion.div >
            </motion.section>
        </>
    )
}

export default Hero
