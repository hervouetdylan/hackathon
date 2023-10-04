import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!title || !content) {
                setResponseMessage('Veuillez remplir tous les champs.');
                return;
            }

            const response = await axios.post('http://localhost:3306/events', { title, content });
            console.log(response.data);
            setResponseMessage('Post envoyé avec succès.');
        } catch (error) {
            console.error(error);
            setResponseMessage('Erreur lors de l\'envoi du post.');
        }
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
