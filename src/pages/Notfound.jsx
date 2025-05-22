import React from 'react'
import {Link} from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
      The page you are looking for does not exist.
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default Notfound
