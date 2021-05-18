import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from './Title';
import SmallTitle from './SmallTitle';
import SchoolIcon from '@material-ui/icons/School';
import AcademicItem from './AcademicItem';

function Academic() {
    const school = <SchoolIcon />
    return (
        <AcademicStyled>
            <Title title={'Academics'} span={'academics'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="Academic-content ">
                    <AcademicItem 
                        year={'Present'} 
                        title={'B.Tech - Computer Science Engineering'}
                        subTitle={'PES University, Bangalore'}
                        text={'CGPA :- 8.17/10 (3rd semester)'} 
                    />
                    <AcademicItem 
                        year={'2019'} 
                        title={'Class XII - CBSE'}
                        subTitle={'CMR National Public School, Bangalore'}
                        text={'88.8 %'} 
                    />
                    <AcademicItem 
                        year={'2017'} 
                        title={'Class X - ICSE'}
                        subTitle={'Sishu Griha Montessori and High School'}
                        text={'96 % (Centum in Mathematics)'} 
                    />
                </div>
            </InnerLayout>
        </AcademicStyled>    
    )
}

const AcademicStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
        padding-left: 1rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .Academic-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Academic
