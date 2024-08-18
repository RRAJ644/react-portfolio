import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineDribbble } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

export const links = [
  { id: 1, link: '#', title: 'Home' },
  { id: 2, link: '#about', title: 'About' },
  { id: 3, link: '#services', title: 'Services' },
  { id: 4, link: '#portfolio', title: 'Portfolio' },
  { id: 5, link: '#contact', title: 'Contact' },
]

// export const socials = [
//     {id: 1, link: 'https://instagram.com', icon: <AiOutlineInstagram/>},
//     {id: 2, link: 'https://twitter.com', icon: <AiOutlineTwitter/>},
//     {id: 3, link: 'https://dribbble.com', icon: <AiOutlineDribbble/>},
//     {id: 4, link: 'https://github.com', icon: <AiFillGithub/>}
// ]

export const socials = [
  {
    id: 1,
    link: 'https://www.linkedin.com/in/ritu-raj-singh-831710186/',
    icon: <FaLinkedin />,
  },
  { id: 2, link: 'https://x.com/Rrajcoder', icon: <AiOutlineTwitter /> },
  { id: 3, link: 'https://github.com/RRAJ644', icon: <AiFillGithub /> },
]
