import { useState } from 'react'
import Hero from './sections/Hero';
import About from './sections/About';
const App = () => {
  const [border, setBorder] = useState("Home")
  const handleNavBorder = (l) => {
    setBorder(l)
  }
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start start", "end end"]
  // })
  // const smoothScroll = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 20,
  //   mass: 0.5,
  // });
  // const scale = useTransform(smoothScroll, [0, 1], [1, 0.8])
  // const rotate = useTransform(smoothScroll, [0, 1], [0, -5])
  // const scale1 = useTransform(smoothScroll, [0, 1], [0.8, 1])
  // const rotate1 = useTransform(smoothScroll, [0, 1], [-5, 0])
  return (
    <>
      <main className=' bg-gradient-to-b from-info2/40 to-background2'>
        <Hero border={border} handleNavBorder={handleNavBorder} />
        <About border={border} handleNavBorder={handleNavBorder} />
      </main>
    </>

  )
}

export default App
