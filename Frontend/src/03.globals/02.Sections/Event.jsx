import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContext from "../04.Context/UserContext";

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const displayEvent = () => {
    const styles = {
        container: {
            marginTop: '70px',
            height: '100%',
            width: '100%',
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

        // hautpost: {
        //     backgroundColor: 'white',
        //     marginTop: '100px',
        //     height: '300px',
        //     width: '700px',
        //     display: 'flex',
        //     flexDirection: 'column', // Afficher le contenu en colonne
        //     justifyContent: 'space-between', // Espacement vertical entre les éléments
        //     alignItems: 'flex-start', // Aligner à gauche
        //     padding: '20px', // Ajouter un espace intérieur
        //     position: 'relative', // Permet de positionner le bouton Like
        // },

        // title: {
        //     fontSize: '24px',
        //     marginBottom: '20px', // Espacement entre le titre et le bouton Like
        // },

        // likeButton: {
        //     position: 'absolute',
        //     top: '20px', // Position en haut
        //     right: '20px', // Position à droite
        // },

     
    };

    const [likeCount, setLikeCount] = useState(0);
    const [data, setData] = useState([])
    const [dataCategory, setDataCategory] = useState([])
    const [dataPlace, setDataPlace] = useState([])
    const [eventCategory, setEventCategory] = useState('all')
    const [eventPlace, setEventPlace] = useState('all')
    const { userContext }= useContext(UserContext)
    console.log(userContext);
    const handleLikeClick = () => {
        setLikeCount(likeCount + 1);
    };
   
    useEffect (()=>{
        axios
        .get(`http://localhost:3000/events`)
        .then((res) => {setData(res.data) })
        axios
        .get(`http://localhost:3000/category`)
        .then((res) => {setDataCategory(res.data) })
        axios
        .get(`http://localhost:3000/place`)
        .then((res) => {setDataPlace(res.data) })
    },[])
    
    const handleCategoryChange = (value) => {
        setEventCategory(value);
    }
    const handlePlaceChange = (value) => {
        setEventPlace(value);
    }

   
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.filters}>
                    <select style={styles.select} onChange={(e) => handleCategoryChange(e.target.value)}>
                        <option className='text-center' value="all">All</option>
                        {dataCategory.map((e)=>{
                            return(<option className='text-center' key={e.idcategory} value={e.idcategory}>{e.name_category}</option>)
                        })}
                    </select>
                    <select style={styles.select} onChange={(e) => handlePlaceChange(e.target.value)}>
                        <option className='text-center' value="all">All</option>
                        {dataPlace.map((e)=>{
                            return(<option className='text-center' key={e.idplace} value={e.idplace}>{e.cardinal}</option>)
                        })}
                    </select>
                </div>
                <Link to="/ajout-evenement">
                    <button type='submit' style={styles.button}>Add Event</button>
                </Link>
            </div>
            {data.filter((e) => eventCategory === "all" || e.id_category.toString() === eventCategory)
            .filter((e)=> eventPlace === "all" || e.id_place.toString() === eventPlace)
            .map((e)=>{
                return(
            <div key={e.idevent} className=' flex items-center gap-3 flex-col bg-white w-1/2  border-solid  rounded-lg  mb-5 shadow-sm shadow-slate-700 ' style={styles.hautpost}>
                <h1 className=' text-center text-xl' style={styles.title}>{e.name_event}</h1>
                <div className='w-3/4 border-b border-black'></div>
                <div className='w-4/5'>{e.description}</div>
                <div className='' style={styles.counter}>
                    <button onClick={handleLikeClick} className=' top-[20px]' style={styles.likeButton}><FontAwesomeIcon icon={faThumbsUp} /></button>
                    <span> {likeCount}</span>
                    <p>{e.date}</p>
                </div>
            </div>
        )})}
        </div>
    );
}

export default displayEvent;
