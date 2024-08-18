import Card from '../../components/Card'
import data from './data'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h2>My Services</h2>
      <p className='services-desc'>
        I give you the best in all the services below
      </p>
      <div className='container services__container' data-aos='fade-up'>
        {data?.map((item) => (
          <Card key={item.id} className='service light'>
            <div className='service__icon'>{item.icon}</div>
            <div className='service__details'>
              <h2 className='service-title'>{item.title}</h2>
              <p className='service-desc'>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Services
