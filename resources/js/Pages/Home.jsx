import React from 'react'
import Navbar from '../Components/Navbar'

export default function Home(props) {
  const { name,  age } = props
  console.log(name)

  return (
    <>
        <Navbar/>
    </>
  )
}
