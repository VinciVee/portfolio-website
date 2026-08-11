// import { Container } from 'react-bootstrap';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="h-full max-w-7xl mx-auto py-16 lg:py-24 flex flex-col font-display items-center justify-center">

      {/* Left Text */}
      <div className="z-10 text-left mb-0 lg:mb-2">
        <h1>404</h1>
        <p>It seems you went off the map...</p>
      </div>

      {/* Background Image */}
      <div className="mix-blend-lighten pointer-events-none">
        <img
          src="/images/backrooms_reference.webp"
          alt="notfound"
          height="960"
          width="1440"
          className="h-[50vh] object-none mask-radial-at-center mask-radial-from-10% mask-radial-to-80% bg-primary-bg"
        />
      </div>

      {/* Right Text */}
      <p className="z-10 text-right mt-0 lg:mt-2">
        Let's get you back{' '}
        <Link to="/" className="italic underline hover:text-accent-light transition-colors">home</Link>
        .
      </p>
    </div>
  )
}

export default NotFound
