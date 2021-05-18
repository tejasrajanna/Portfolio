import React from 'react';
import styled from 'styled-components';


function ContactItem({title, icon}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                {icon}
            </div>
            <div className="right-content">
                <h6>{title}</h6>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding:0.5rem 0.8rem;
    position:fixed;
    bottom: 0;
    right: 0;
    border:var(--border-color);
    background-color: var(--background-dark-grey);
    display: flex   ;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 0.5rem;
    }
    .left-content{
        padding: 0.5rem;
        border: 2px solid red;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2rem;
        svg{
            font-size: 2rem;
        }
    }

    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
    }
`;

export default ContactItem;
