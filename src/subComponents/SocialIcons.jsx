import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiFacebookBoxFill } from 'react-icons/ri'
import { RiGithubFill } from 'react-icons/ri';
import { RiTwitterFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';

const Container = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: fixed;
    bottom: 0;
    z-index: 3;
    left: 2rem;
`

const SocialIcons = () => {
  return (
      <Container>
          <div>
              <RiFacebookBoxFill fontSize={30} />
          </div>
          <div>
              <RiGithubFill fontSize={30}/>
          </div>
          <div>
              <RiTwitterFill fontSize={30}/>
          </div>
          <div>
              <RiLinkedinBoxFill fontSize={30}/>
          </div>

      </Container>
  )
}

export default SocialIcons