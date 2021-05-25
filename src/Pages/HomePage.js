import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particle';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';

function HomePage() {
    return (
        <Homepagestyled>
            <div className="particle-con">
                <Particle />
            </div>
            <MainLayout>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
            </MainLayout>
        </Homepagestyled>
    )
}

const Homepagestyled=styled.header`
    width: 100%;
    height: 100%;
    position: relative;

    .particle-con{
        position: fixed;
        width: 100%;
    }`

export default HomePage;
