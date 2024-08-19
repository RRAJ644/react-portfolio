import AboutImage from '../../assets/header.jpg'
import CV from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import data, { about_data } from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id='about' data-aos='fade-in'>
      <div className='container about__container'>
        <div className='about__left'>
          <div className='about__portrait'>
            <img src={AboutImage} alt='About Image' />
          </div>
        </div>
        <div className='about__right'>
          <h2>About Me</h2>
          <div className='about__cards'>
            {data.map((item) => (
              <Card key={item.id} className='about__card'>
                <span className='about__card-icon'>{item.icon}</span>
                <p className='title'>{item.title}</p>
                <h6 className='desc'>{item.desc}</h6>
              </Card>
            ))}
          </div>
          {/* <p className='about-bio'>
            Building projects my clients love have always been my passion. Being
            in the web development industry for over 1.5 years and serving more
            than 70 happy clients worldwide, I'm always motivated to do more!
          </p>
          <p className='about-bio'>
            Hi, my name is Ritu Raj Singh from India. I'm a
            full-stack web developer with a Bachelors degree in Computer
            Applications. My top priority is to get your business online the
            right way, giving you industry-standard design and all the
            functionality you need to operate smoothly online. Get in touch
            today with the details of your project let's get started! Check out
            my resume below!
          </p> */}

          <h4>
            Crafting Websites That Drive Success for Over 10+ Clients Worldwide
          </h4>
          <br />
          <p className='about-bio'>
            Hello! I’m Ritu Raj Singh, a full-stack web developer from India
            with a Bachelor's degree in Computer Applications. With over 1.5
            years of experience in the web development industry, I’ve had the
            privilege of helping more than 70 clients globally achieve their
            online goals.
          </p>
          <ul>
            {about_data?.map((data) => (
              <li className='about-bio'>
                <strong>{data.title}</strong> : <span>{data.description}</span>
              </li>
            ))}
          </ul>
          <br />
          <p className='about-bio'>
            My passion lies in building websites that not only look great but
            also perform exceptionally well. My top priority is to ensure your
            business thrives online with industry-standard designs and all the
            functionality needed to operate efficiently. Let’s bring your
            project to life! Get in touch with the details, and let's create a
            digital presence that sets you apart from the competition. Don’t
            forget to check out my resume below!
          </p>
          <a href={CV} download className='btn primary'>
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
