import React from 'react'
import logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}
