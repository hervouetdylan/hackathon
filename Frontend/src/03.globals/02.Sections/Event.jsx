import React from 'react';
import { Link } from 'react-router-dom';
import AddEvent from "../01.Pages/AddEvent";

const Event = () => {
    const styles = {
        container: {
            marginTop: '70px',
            height: '100vh',
            backgroundColor: 'lightgray',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // Espacement entre les éléments
            width: '100%', // Occupe toute la largeur de la page
            marginBottom: '40px', // Espacement en bas du header
        },

        filters: {
            display: 'flex',
            alignItems: 'center',
        },

        cata: {
            fontSize: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            marginRight: '20px', // Espacement entre les filtres
        },

        button: {
            backgroundColor: 'white',
            color: '#81b71a',
            border: '#81b71a solid 4px',
            borderRadius: '20px',
            height: '40px',
            cursor: 'pointer',
            width: '185px',
        },

        select: {
            borderRadius: '20px',
            marginRight: '20px'
        },

        post: {
            backgroundColor: 'white',
            marginTop: '100px',
            height: '300px',
            width: '700px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.filters}>
                    <select style={styles.select} onChange={(e) => handleCategoryChange(e.target.value)}>
                        <option value="All">Toutes</option>
                        <option value="Category A">Catégorie A</option>
                        <option value="Category B">Catégorie B</option>
                    </select>
                    <select style={styles.select} onChange={(e) => handleCategoryChange(e.target.value)}>
                        <option value="All">Toutes</option>
                        <option value="Category A">Catégorie A</option>
                        <option value="Category B">Catégorie B</option>
                    </select>
                    <select style={styles.select} onChange={(e) => handleCategoryChange(e.target.value)}>
                        <option value="All">Toutes</option>
                        <option value="Category A">Catégorie A</option>
                        <option value="Category B">Catégorie B</option>
                    </select>
                </div>
                <Link to="/AddEvent">
                    <button type='submit' style={styles.button}>Add Event</button>
                </Link>
            </div>
            <div style={styles.post}>
                {/* Contenu de votre div post */}
            </div>
        </div>
    );
}

export default Event;
