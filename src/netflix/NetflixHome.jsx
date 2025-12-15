import React from 'react'
import { MyButton } from '../common/MyButton'

export const NetflixHome = () => {
  const netflixHome = () => {
    alert('i am netflix home')
  }
  return (
    <div style={{ textAlign: "center" }}>
      <MyButton fun={netflixHome} name="btn1" class="btn btn-danger"></MyButton>
      <h1>Netflix Home</h1>
    </div>
  )
}
