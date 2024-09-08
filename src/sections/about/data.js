import { FaAward } from 'react-icons/fa'
import { TbBooks } from 'react-icons/tb'
import { BiHappyHeartEyes } from 'react-icons/bi'

const data = [
  { id: 1, icon: <FaAward />, title: 'Experience', desc: '1.5+ Years Working' },
  // {id: 2, icon: <TbBooks/>, title: 'Projects', desc: '5+ Completed'},
  {
    id: 3,
    icon: <BiHappyHeartEyes />,
    title: 'Clients',
    desc: '10+ happy clients',
  },
]

export const about_data = [
  {
    title: 'Custom Web Development',
    description: ' Tailored solutions that meet your business needs.',
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring your site looks flawless on any device.',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your visibility and search engine ranking',
  },
  {
    title: 'Seamless User Experience',
    description: 'Providing intuitive navigation and fast load times.',
  },
]

export default data
