// import Logo from '../../assets/logo.jpg'
// import data from './data'
// import { IoIosColorPalette } from 'react-icons/io'
// import { useModalContext } from '../../context/modal-context'
// import { GiHamburgerMenu } from 'react-icons/gi'
// import { FaTimes } from 'react-icons/fa'
// import './navbar.css'
// import { useState } from 'react'

// const Navbar = () => {
//   const { showModalHandler } = useModalContext()
//   const [showMobMenu, setShowMobMenu] = useState(false)

//   return (
//     <nav>
//       <div className='container nav__container'>
//         <a href='index.html' className='nav__logo'>
//           {/* <img src={Logo} alt="Logo" /> */}
//         </a>

//         <ul className={`nav__menu`}>
//           {data?.map((item) => (
//             <li key={item?.id}>
//               <a href={item?.link}>{item?.title}</a>
//             </li>
//           ))}
//         </ul>

//         {/* <button id='theme__icon' onClick={showModalHandler}><IoIosColorPalette/></button> */}

//         <div
//           className='menu-icon'
//           onClick={() => setShowMobMenu((prev) => !prev)}
//         >
//           {showMobMenu ? (
//             <FaTimes
//               size={25}
//               color='white'
//             />
//           ) : (
//             <GiHamburgerMenu size={25} color='white' />
//           )}
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar


import Logo from '../../assets/logo.jpg'
import data from './data'
import { IoIosColorPalette } from 'react-icons/io'
import { useModalContext } from '../../context/modal-context'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import './navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const { showModalHandler } = useModalContext()
  const [showMobMenu, setShowMobMenu] = useState(false)

  return (
    <nav>
      <div className='container nav__container'>
        <a href='index.html' className='nav__logo'>
          {/* <img src={Logo} alt="Logo" /> */}
        </a>

        <ul className={`nav__menu ${showMobMenu ? 'active' : ''}`}>
          {data?.map((item) => (
            <li key={item?.id}>
              <a href={item?.link}>{item?.title}</a>
            </li>
          ))}
        </ul>

        <div
          className='menu-icon'
          onClick={() => setShowMobMenu((prev) => !prev)}
        >
          {showMobMenu ? (
            <FaTimes size={25} color='white' />
          ) : (
            <GiHamburgerMenu size={25} color='white' />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
