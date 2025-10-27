import { Home, User, Briefcase, FileText } from 'lucide-react';



const navItems = [
  { name: 'Home', url: '#', icon: <Home /> },
  { name: 'About', url: '#about', icon: <User /> },
  { name: 'Projects', url: '#projects', icon: <Briefcase /> },
]
const NavBar = ({ border, handleNavBorder }) => {
  return (
    <>
      <nav className='flex justify-between items-center px-5 md:px-20 py-6 lg:py-2.5'>
        <div className='flex justify-center items-center gap-2 '>
          <div className='w-13 h-7 bg-teal-700/70 rounded-tr-2xl rounded-br-2xl overflow-clip flex justify-between items-center flex-col'>
            <div className='w-full h-1 bg-white/50'></div>
            <div className='w-full h-1 bg-white/50'></div>
            <div className='w-full h-1 bg-white/50'></div>
          </div>
          <h2 className=' hidden font-extrabold md:block text-xl bg-gradient-to-r from-info1/20 to-white/90 bg-clip-text text-transparent'>al9wel</h2>
        </div>
        <div className='hidden md:flex justify-center items-center gap-6 bg-white/10 backdrop-blur-2xl px-6 py-2 rounded-4xl text-white'>
          {navItems.map((item) => {
            return (
              <a
                onClick={() => handleNavBorder(item.name)}
                href={item.url}
                key={item.name}
                className={`
    relative px-1 py-1 text-white hover:text-title2 transition-colors duration-200
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
    after:bg-info1 after:w-0 after:transition-all after:duration-300
    ${border === item.name ? "after:w-full" : "after:w-0"}
  `}
              >
                {item.name}
              </a>
            )
          })}
        </div>
        <div className='flex md:hidden justify-center items-center gap-2 bg-white/10 backdrop-blur-2xl px-4 py-1 rounded-4xl text-white'>
          {navItems.map((item) => {
            return (
              <a
                onClick={() => handleNavBorder(item.name)}
                href={item.url}
                key={item.name}
                className={`
    relative px-1 py-1 text-white hover:text-title2 transition-colors duration-200
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
    after:bg-info2 after:w-0 after:transition-all after:duration-300
    ${border === item.name ? "after:w-full" : "after:w-0"}
  `}
              >
                {item.icon}
              </a>
            )
          })}
        </div>

      </nav >
    </>
  )
}

export default NavBar
