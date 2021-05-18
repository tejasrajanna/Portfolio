import React, { useState } from 'react';
import {MainLayout, InnerLayouts} from '../styles/Layouts';
import Title from '../Components/Title';
import projects from '../data/projects';
import Menu from '../Components/Menu';
import Button from '../Components/Button';

const allButtons = ['All', ...new Set(projects.map(item => item.category))]

function ProjectsPage() {
    const [menuItem, setMenuItems] = useState(projects);
    const [button] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(projects);
            return;
        }

        const filteredData = projects.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={'Projects'} span={'Projects'} />
            <InnerLayouts>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayouts>
        </MainLayout>
    )
}

export default ProjectsPage;
