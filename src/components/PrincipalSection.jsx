import rocket from '../assets/rocket.png'
import light from '../assets/light.png'

const PrincipalSection = () => {
  return (
    <>
    <div className='principal-section'>
        <h1>High-End<span>.</span></h1>
        <div className='rocket'><img src={rocket} alt="Rocket" /></div>
        <div className='digital'>
          <div className='light'><img src={light} alt="Light" /></div>
          <h2>Digital Studio</h2>
        </div>
      </div>
    </>
  )
}

export default PrincipalSection