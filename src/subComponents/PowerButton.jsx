import React from 'react'
import styled from 'styled-components'
import icon from '../assets/svg/power.svg'
import { Link } from 'react-router-dom'

const Power = styled.div`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: '#FCF6F4';
    padding: 0.3rem;
    border-radius: 50%;
    border: 1px solid #000;
    width:  2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    cursor: pointer;
    
    &:hover{
      background-color: rgba(0,255,0,0.4)
    }
`

const PowerButton = () => {
  return (
    <Power>
      <Link to="/">
        <img src={icon} attr="" />
      </Link>
    </Power>
  )
}

export default PowerButton