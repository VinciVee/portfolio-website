// import { Container } from 'react-bootstrap';
import { Link } from 'react-router';
import { FiHome } from 'react-icons/fi'

import frogNotFound from '../assets/frogNotFound.svg'

const NotFound = () => {
  return (
    <div className="notFoundWrapper">
        <h2>Hmm...</h2>
        <p>Looks like you coded your way onto a hidden page!</p>
        <div className="notFoundCover">
          <img src={frogNotFound} alt="notfound" />
        </div>
        {/* CUSTOM BUTTON */}
        <Link to="/" className="homeBtn">
          <FiHome id="btn-icon" />
        </Link>
    </div>
  )
}

export default NotFound
