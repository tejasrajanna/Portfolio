import React from 'react'
import styled from 'styled-components';
import resume from '../data/resume.pdf';
import avatar from '../img/about.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={avatar} alt=""/>
                <a href={resume} download="TejasR_Resume" rel='noopener noreferrer' target='_blank'>
                <PrimaryButton title={'Download Resume'} />
                </a>
            </div>
            <div className="right-content">
                <h4>I am <span>Tejas R</span></h4>
                <p className="paragraph">
                    A pragmatic undergraduate student currently studying Computer Science Engineering in PES University.
                    I am constantly experimenting and am not afraid to learn from failure. 
                    Inquisitive nature paired with hunger to improve is my biggest asset. 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>E-mail</p>
                    </div>
                    <div className="info">
                        <p>: Tejas Rajanna</p>
                        <p>: 20</p>
                        <p>: Kannada,English, Hindi </p>
                        <p>: Bangalore, India</p>
                        <p>: tejasrajanna@gmail.com</p>
                    </div>
                </div>
                
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 4rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 0.4rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 0.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
