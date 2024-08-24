import Card from '../../components/Card'
import Tag from '../../components/tag'
import data from '../skills/data'
import './skills.css'
const Skills = () => {
  return (
    <section id='services'>
      <h2>Skills</h2>
      <p>
        Empowering businesses with top-notch web development skills and
        expertise.
      </p>
      <div className='skills-container'>
        {data?.map((item) => (
          <Tag
            key={item.id}
            className='service light'
            label={item.title}
            icon={item.icon}
          ></Tag>
        ))}
      </div>
    </section>
  )
}

export default Skills
