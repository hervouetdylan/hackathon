import React from 'react';
import Navbar from '../03.Components/Navbar';
import Event from '../02.Sections/Event';

const HomePage = () => {
    return (
        <div className="h-full w-full flex flex-col gap-40">
            <Navbar />
            <Event />
        </div>
    );
};

export default HomePage;
