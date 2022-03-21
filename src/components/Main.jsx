import React from 'react'
import styled from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from './LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';

const MainContainer = styled.div`
    background:  $(props => props.theme.body);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
`

const Container = styled.div`
    padding: 2rem;
`

const Main = () => {
    return (
        <MainContainer>
            <Container>
                <PowerButton />
                <LogoComponent />
                <SocialIcons />
            </Container>
        </MainContainer>
    )
}

export default Main