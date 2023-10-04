import React from 'react';
import Logo from '../01.assets/img/download.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const styles = {
        navbar: {
            position: 'fixed',
            top: '0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', // Ajout pour centrer verticalement
            width: '100%', // Ajout pour occuper toute la largeur
            backgroundColor: 'white', // Ajout pour couleur de fond
            padding: '10px', // Ajout pour espacement intérieur
        },

        img: {
            width: '100px',
            height: '20px', // Correction ici
        },

        titre: {
            color: 'blue',
        },

        button: {
            display: 'flex', // Ajout pour aligner les boutons horizontalement
        },

        connexion: {
            backgroundColor: '#247BA0',
            borderRadius: '5%',
            margin: '0 10px', // Ajout pour espacement horizontal entre les boutons
            color: 'white', // Ajout pour couleur du texte
        },

        inscription: {
            backgroundColor: '#247BA0',
            borderRadius: '5%',
            margin: '0 10px', // Ajout pour espacement horizontal entre les boutons
            color: 'white', // Ajout pour couleur du texte
        },
    };

    return (
        <div style={styles.navbar}>
            <img style={styles.img} src={Logo} alt="logo de ynov nantes campus" />
            <h1 style={styles.titre}>Yevent</h1>
            <div style={styles.button}>
                <Link to="/connexion">
                    <button style={styles.connexion}>Connexion</button>
                </Link>
                <Link to="/inscription">
                    <button style={styles.inscription}>Inscription</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
