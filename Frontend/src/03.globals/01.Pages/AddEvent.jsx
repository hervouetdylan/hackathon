import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../03.Components/Navbar';
import { useNavigate } from 'react-router-dom'; // Importez Link

const AddEvent = () => {

    
    const styles = {
        container: {
            maxWidth: '90%',
            margin: ' 5% auto auto',
            padding: '3%',
            backgroundColor: 'white',
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.3)', 
            borderRadius: '5%',
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        inputRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '2%',
        },
        label: {
            flex: '1',
            textAlign: 'right',
            marginRight: '2%',
        },
        input: {
            flex: '2',
            padding: '2%',
        },
        submitButton: {
            alignSelf: 'flex-end',
            marginTop: '3%',
        },
        link: {
            textDecoration: 'none',
            color: 'blue',
            marginTop: '10px',
        },
    };
    
    const [name, setName] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        return axios 
            .post('http://localhost:3000/events', { name, date, description, image})
            .then((res) => console.log(res), navigate("/home")) 
            .catch((err) => console.log(err));
    };
    
    return (
      <div className="h-full w-full max-w-7xl p-6 flex flex-col gap-40">
        <Navbar style={{ marginBottom: '20%' }} /> 
        <div style={styles.container}>
            <form onSubmit={handleSubmit}>
                <div style={styles.cardContent}>
                    <div style={styles.inputRow}>
                        <label style={styles.label}>Date:</label>
                        <input
                            type="datetime-local"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputRow}>
                        <label style={styles.label}>Image:</label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            style={styles.input}
                           
                        />
                    </div>
                    <div style={styles.inputRow}>
                        <label style={styles.label}>Titre:</label>
                        <input
                            type="text"
                            placeholder="Titre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputRow}>
                        <label style={styles.label}>Description:</label>
                        <input
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" onSubmit={handleSubmit} style={styles.submitButton}>envoie</button>
                     
                </div>
            </form> 
            
            {responseMessage && <p>{responseMessage}</p>} 
        </div>
      </div>
    );
}

export default AddEvent;
