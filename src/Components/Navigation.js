import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.jpeg';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn'

const Navigation = params => {
    return (
        <NavigationStyled >
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items" onClick={() => params.setNavToggle(false)}>
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to="/projects" activeClassName="active-class" exact>Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/skills" activeClassName="active-class" exact>Technical Skills</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/academics" activeClassName="active-class" exact>Academics</NavLink>
                </li>
                {/*<li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact Me</NavLink>
    </li>*/}
            </ul>
            <div className="icons">
                <a href="https://github.com/tejasrajanna" target="_blank" rel="noreferrer noopener" className="icon i-github">
                        <GithubIcon /> </a>
                <a href="https://www.linkedin.com/in/tejas-rajanna-66851220b/" target="_blank" rel="noreferrer noopener" className="icon i-linkedin">
                        <LinkedinIcon /> </a>
            </div>
            <footer className="footer">
                <p>@2021 <b>Tejas R</b></p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
       
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    .icons{
            display: flex;
            justify-content: center;
            margin-top: 0.2rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: var(--primary-color-light);
                }
            }

            .i-linkedin{
                &:hover{
                    border: 2px solid #5F4687;
                    color: var(--primary-color-light);
                }
            }
        }
    
    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`;
export default Navigation;
