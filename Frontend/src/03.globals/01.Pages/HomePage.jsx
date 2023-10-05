import React, { useState, useEffect } from 'react';
import Navbar from '../03.Components/Navbar';
import Event from '../02.Sections/Event';

const HomePage = () => {
    // const [events, setEvents] = useState([]);

    // useEffect(() => {
    //     // We retrieve the list of cards from the api
    //     axios.get('http://localhost:3000/events')
    //         .then((response) => {
    //             setEvents(response.data) // update data in the state
    //         })
    //         .catch((err) => console.log(err))

    // }, []);
    return (
        <div className="h-full w-full max-w-7xl p-6 flex flex-col gap-40">
            <Navbar />
            <Event />
        </div>
    );
};

export default HomePage;
