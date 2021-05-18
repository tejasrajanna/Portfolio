import React from 'react';
import styled from 'styled-components'
import { MainLayout} from '../styles/Layouts';
import Skills from '../Components/Skills';
import Coursework from '../Components/Coursework';
import Particle from '../Components/Particle';

function SkillsPage() {
      return(
        <Skillspagestyled>
            <div className="particle-con">
                  <Particle />
            </div>
            <MainLayout>
                <Skills />
                <Coursework />
            </MainLayout>
        </Skillspagestyled>
        )
}

const Skillspagestyled=styled.header`
    min-width: 100%;
    min-height: 100%;
    position: relative;

    .particle-con{
        position: fixed;
        width: 100%;
    }`

export default SkillsPage;
