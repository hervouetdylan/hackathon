import React, { useState, useEffect } from 'react';
import Navbar from '../03.Components/Navbar';
import Event from '../02.Sections/Event';
import axios from 'axios';

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
            {/* <div>
                <ul>
                    {events.map((events) => (
                        <li>
                            <li key={events.id}>
                                <h2>{events.name}</h2>
                                
                                <p>{events.date}</p>

                                <p>{events.description}</p>

                                <img src={events.image} alt="event" />
                            </li>
                        </li>
                    ))}
                </ul>
            </div> */}
        </div>
    );
};

export default HomePage;
