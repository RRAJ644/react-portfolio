// import { links, socials } from './data'
// import './footer.css'

// const Footer = () => {
//   return (
//     <footer>
//       <div className='container footer__container'>
//         <div>

//         </div>

//         <div className='footer__socials'>
//           {socials.map((social) => (
//             <a
//               key={social.id}
//               href={social.link}
//               target='_blank'
//               rel='noopener noreferrer'
//             >
//               {social.icon}
//             </a>
//           ))}
//         </div>
//       </div>
//       <div className='footer__copyright'>
//         <small>2024 RITU RAJ SINGH &copy; All Rights Reserved</small>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import { useState } from 'react'
import { links, socials } from './data'
import './footer.css'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/riturajsingh.17248@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      const result = await response.json()

      if (response.ok) {
        setFormStatus('Thank you! Your message has been sent.')
        setFormData({ email: '', message: '', name: '' })
      } else {
        setFormStatus(`Error: ${result.message}`)
      }
    } catch (error) {
      setFormStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <footer>
      <div className='container footer__container'>
        <div className='footer__form'>
          <form onSubmit={handleSubmit}>
            <h2>Have a project ? </h2>
            <h2>let's discuss</h2>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </div>

        {/* <div className='footer__socials'>
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {social.icon}
            </a>
          ))}
        </div> */}
      </div>
      {formStatus && <p className='form-status'>{formStatus}</p>}

      <div className='footer__copyright'>
        <small>2024 RITU RAJ SINGH &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
