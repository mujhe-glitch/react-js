import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../common/MyButton'

export const NetflixMovie = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Movie</h1>
      <MyButton name="btn 3"></MyButton>
      <ul>
        <li>
          <Link to="/watch/raid">Raid</Link>
        </li>
        <li>
          <Link to="/watch/animal">Animal</Link>
        </li>
        <li>
          <Link to="/watch/kantara">kantara</Link>
        </li>
      </ul>
    </div>
  )
}
