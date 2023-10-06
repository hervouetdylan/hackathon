import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import AddEvent from "../01.Pages/AddEvent";
import axios from 'axios';
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
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '40px',
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
            marginRight: '20px',
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
            marginRight: '20px',
        },

        hautpost: {
            backgroundColor: 'white',
            marginTop: '100px',
            height: '300px',
            width: '700px',
            display: 'flex',
            flexDirection: 'column', // Afficher le contenu en colonne
            justifyContent: 'space-between', // Espacement vertical entre les éléments
            alignItems: 'flex-start', // Aligner à gauche
            padding: '20px', // Ajouter un espace intérieur
            position: 'relative', // Permet de positionner le bouton Like
        },

        title: {
            fontSize: '24px',
            marginBottom: '20px', // Espacement entre le titre et le bouton Like
        },

        likeButton: {
            position: 'absolute',
            top: '20px', // Position en haut
            right: '20px', // Position à droite
        },

        counter: {
            display: 'flex',
            alignItems: 'center',
        },
    };
    const [events, setEvents] = useState([]);

    
    const [likeCount, setLikeCount] = useState(0);
    const [data, setData] = useState([])
    const [dataCategory, setDataCategory] = useState([])
    const [dataPlace, setDataPlace] = useState([])
    const [eventCategory, setEventCategory] = useState('all')
    const [eventPlace, setEventPlace] = useState('all')
    const [filtre, setFiltre] = useState('')
    const { userContext }= useContext(UserContext)
   
    const handleLikeClick = () => {
        setLikeCount(likeCount + 1);
    };
    useEffect(() => {
        // We retrieve the list of cards from the api
        axios.get('http://localhost:3000/events')
            .then((response) => {
                setEvents(response.data) // update data in the state
            })
            .catch((err) => console.log(err))

    }, []);

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
                    <input type="text"  onChange={(event) => setFiltre(event.target.value)}  />
                </div>
                <Link to="/ajout-evenement">
                    <button type='submit' style={styles.button}>Add Event</button>
                </Link>
            </div>
            {data.filter((e) => eventCategory === "all" || e.id_category.toString() === eventCategory)
            .filter((e)=> eventPlace === "all" || e.id_place.toString() === eventPlace)
            .filter(e => filtre ? e.name_event.toLowerCase().includes(filtre.toLowerCase()) : true)
            .map((e)=>{
                return(
            <div key={e.idevent} className=' flex items-center gap-3 flex-col bg-white w-1/2  border-solid  rounded-lg  mb-5 shadow-sm shadow-slate-700 ' style={styles.hautpost}>
                <h1 className=' text-center text-xl' style={styles.title}>{e.name_event}</h1>
                <div className='w-3/4 border-b border-black'></div>
                <div className='w-4/5'>{e.description}</div>
                <div className='' style={styles.counter}>
                    <button onClick={handleLikeClick} className=' top-[20px]' style={styles.likeButton}><FontAwesomeIcon icon={faThumbsUp} /></button>
                    <span> {likeCount}</span>
                </div>
            </div>
                )}
                )  
            }
        </div>
    );
}

export default Event;
