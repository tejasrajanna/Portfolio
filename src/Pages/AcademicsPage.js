import React from 'react';
import styled from 'styled-components';
import { MainLayout} from '../styles/Layouts';
import Academic from '../Components/Academic';
import Particle from '../Components/Particle';

function AcademicsPage() {
    return (
        <Academicspagestyled>
                <div className="particle-con">
                    <Particle />
                </div>
                <MainLayout>
                    <Academic />
                </MainLayout>
        </Academicspagestyled>
    )
}

const Academicspagestyled=styled.header`
    min-width: 100%;
    min-height: 100%;
    position: relative;

    .particle-con{
        position: fixed;
        width: 100%;
    }`

export default AcademicsPage;




