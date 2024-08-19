import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <header id='header'>
      <div className='container header__container'>
        {/* <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div> */}
        <h1 data-aos='fade-up'>RITU RAJ SINGH</h1>
        <p data-aos='fade-up'>
          Bringing Your Ideas to Life, Inside and Out. Complete Web Development,
          Tailored to Your Needs. Ready to Launch Your Success?
        </p>
        <div className='header__cta' data-aos='fade-up'>
          <a href='#contact' className='btn primary'>
            Let's Talk
          </a>
          <a href='#portfolio' className='btn light'>
            My Work
          </a>
        </div>
        <div className='header__socials'>
          {data?.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
