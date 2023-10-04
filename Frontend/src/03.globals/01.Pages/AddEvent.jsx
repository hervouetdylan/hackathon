import React, { useState } from 'react';
import axios from 'axios';

const AddEvent = () => {
    const [name, setName] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        return axios 
            .post('http://localhost:3000/events', { name, date, description, image })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
    

    return (
        <div>
            <h1>Envoyer un post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                />
                <input
                    type="datetime-local"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    name="date"
                />
                <input 
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                />
                
                <input 
                    type="file" 
                    onChange={(e) => setImage(e.target.files[0])}
                    name="image"
                />
                <button type="submit">Envoyer</button>
            </form>
            
            {responseMessage && <p>{responseMessage}</p>}
            <ul>{name} </ul>
            <ul>{description}</ul>
        </div>
    );
}

export default AddEvent;