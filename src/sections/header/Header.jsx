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
        <h1 className='head-name' data-aos='fade-up'>
          RITU RAJ SINGH
        </h1>
        <p data-aos='fade-up'>
          A full-stack web developer from India with a Bachelor's degree in
          Computer Applications. With over 1.5 years of experience in the web
          development industry, I’ve had the privilege of helping more than 10+
          clients globally achieve their online goals.
        </p>
        <div className='header__cta' data-aos='fade-up'>
          <a href='#contact' className='btn primary'>
            Let's Talk
          </a>
          <a href='#portfolio' className='btn light'>
            My Work
          </a>
        </div>
        {/* <div className='header__socials'>
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
        </div> */}

        <div className='header__socials'>
          {data?.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='social-link'
            >
              {item.icon}
              <span className='tooltip'>{item.msg}</span>{' '}
              {/* Add the tooltip here */}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
