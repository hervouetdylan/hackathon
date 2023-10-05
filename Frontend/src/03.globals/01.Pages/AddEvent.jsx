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
    
    
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '800px', 
            margin: '0 auto', 
            padding: '20px', 
          },
          row: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '10px', 
          },
          date: {
            flex: '1',
            textAlign: 'center',
          },
          image: {
            flex: '1',
            marginLeft: '20px', 
          },
          title: {
            flex: '1',
            marginLeft: '20px', 
          },
          description: {
            flex: '1',
          }
      };
    
    return (
        <div style={styles.container}>
            <h1>Envoyer un post</h1>
            <form onSubmit={handleSubmit}>
                <div style = {styles.row}>
                    <div style={styles.dates}>
                        <input
                            type="datetime-local"
                            placeholder="Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            name="date"
                            />
                        </div>
                        <div style = {styles.image}>
                            <input 
                                type="file" 
                                onChange={(e) => setImage(e.target.files[0])}
                                name="image"
                                />
                        </div>
                        <div style = {styles.title}>
                            <input 
                                type="text"
                                placeholder="Titre"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name="name"
                                />
                        </div>
                        <div style = {styles.description}>
                            <input 
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                name="description"
                                />
                        </div>
                        <button type="submit">Envoyer</button>
                    </div>
            </form>
            
            {responseMessage && <p>{responseMessage}</p>}
            <ul>{name} </ul>
            <br />
            <ul>{description}</ul>
        </div>
    );
}

export default AddEvent;