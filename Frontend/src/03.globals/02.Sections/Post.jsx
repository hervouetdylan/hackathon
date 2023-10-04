import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        return axios 
        .post('http://localhost:3000/event', {content, title, description})
        .then((res) =>console.log(res))
        .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Envoyer un post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titre"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                />

                <input
                    type="text"
                    placeholder="Contenu"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    name="content"
                />
                <button type="submit">Envoyer</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default Post;
