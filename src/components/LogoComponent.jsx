import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
    display: inline-block;
    color: $(props => props.theme.text);
    position: fixed;
    top: 2rem;
    left: 2rem;
`

const LogoComponent = () => {
  return (
    <Heading>CB</Heading>
  )
}

export default LogoComponent