import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { CiSquareQuestion } from 'react-icons/ci'

const data = [
  {
    id: 1,
    link: 'https://www.linkedin.com/services/page/854b87330370b24252/',
    icon: <CiSquareQuestion />,
    msg: 'Request service',
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/ritu-raj-singh-831710186/',
    icon: <FaLinkedin />,
    msg: 'Message on LinkedIn',
  },
  {
    id: 3,
    link: 'https://github.com/RRAJ644',
    icon: <AiFillGithub />,
    msg: 'Check github',
  },
  {
    id: 4,
    link: 'https://x.com/Rrajcoder',
    icon: <AiOutlineTwitter />,
    msg: 'Message on twitter',
  },
  {
    id: 5,
    link: 'https://www.instagram.com/rituraj7454/',
    icon: <FaInstagram />,
    msg: 'Message on instagram',
  },
]

export default data
