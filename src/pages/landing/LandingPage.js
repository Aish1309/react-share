import React from 'react'
import {Link} from 'react-router-dom';


export const LandingPage = () => {
  return (
    <div>
        <h1>LandingPage</h1>
        <Link to="/login"> <h2>Login Page</h2></Link>
    </div>
  )
}
