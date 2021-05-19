import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import CourseCard from './CourseCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import web from '../img/internetb.svg';

function Coursework() {
    return (
        <Inner>
            <CourseworkStyled>
                <Title title={'Coursework'} span={'coursework'} />
                <div className="services">
                    <CourseCard 
                        image={design} 
                        title={'Data Structures With Applications'} 
                        paragraph={'insert, delete, search and modify data in given data structures- Stack, Queue, List, Tree, heap, Graphs.'}
                    />
                    <div className="mid-card">
                        <CourseCard 
                            image={intelligence} 
                            title={'Statistics for Data Science'} 
                            paragraph={'random variables, confidence intervals, importance of data visualisation, goodness of fit model'}
                        />
                    </div>
                    <CourseCard 
                        image={web} 
                        title={'Web Technologies'} 
                        paragraph={'Core concepts of HTML5, CSS3, Javascript and MERN (MongoDB, ExpressJS, ReactJS and NodeJS) stack'}
                    />
                </div>
            </CourseworkStyled>
        </Inner>
    )
}

const CourseworkStyled = styled.section`
    .services{
        margin-top: 5rem;
        padding-bottom: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

const Inner= styled.div`
  padding-top: 0.1rem;
  `;

export default Coursework;
