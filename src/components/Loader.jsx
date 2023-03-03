import loader from '../assets/loader.svg'
import '../styles/loader.css'

const Loader = () => {
  return (
    <img className='loader-analyzing' src={loader} alt="loading" />
  )
}

export default Loader