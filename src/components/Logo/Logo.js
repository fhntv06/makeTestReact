import React from 'react'

export default function Logo () {
  return (
    <img className='logo' src={`${process.env.PUBLIC_URL}/images/header/logo.png`}/>
  )
}
