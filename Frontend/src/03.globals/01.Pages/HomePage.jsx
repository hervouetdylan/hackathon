import React from 'react';
import Navbar from '../03.Components/Navbar';
import Post from '../02.Sections/Post';

const HomePage = () => {
    return (
        <div className="h-full w-full max-w-7xl p-6 flex flex-col gap-40">
            <Navbar />
            <Post />
        </div>
    );
};

export default HomePage;
