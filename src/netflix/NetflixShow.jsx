import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../common/MyButton'

export const NetflixShow = () => {
  const shows = [
    {
      id: 1001,
      name: "Squid Game"
    },
    {
      id: 1002,
      name: "Scam 1992"
    },
    {
      id: 1003,
      name: "fast and furious"
    },
    {
      id: 1004,
      name: "Stranger things"
    },
    {
      id: 1005,
      name: "Dark Winds"
    }
  ]
  const netflixShowTest = () => {
    alert('shows called')
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Shows</h1>
      <MyButton fun={netflixShowTest} name="btn 2"></MyButton>
      <ul>
        {
          shows.map((show) => {
            return <li>
              <Link to={`/watch/${show.name}`}>{show.name}</Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}
