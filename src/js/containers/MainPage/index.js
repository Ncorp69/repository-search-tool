import React from 'react';
import WorkSpace from '../../components/WorkSpace';
import MenuTop from './MenuTop';
import Data from './Data';

const MainPage = () => {
    return <WorkSpace>
        <MenuTop/>
        <Data/>
    </WorkSpace>;
}

export default MainPage;