import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../01.assets/img/download.png';

const Signin = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column', // Utilisation de la disposition en colonne
            justifyContent: 'center', // Centre le contenu horizontalement
            alignItems: 'center', // Centre le contenu verticalement
            height: '100vh', // 100% de la hauteur de la vue
            backgroundColor: 'lightgray',
        },

        form: {
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px', // Ajustement de la taille du formulaire
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            textAlign: 'center', // Centrer le texte à l'intérieur du formulaire
            width: '300px', // Largeur du formulaire
        },

        input: {
            color: '#000',
            border: '1px solid #000',
            height: '30px',
            margin: '10px 0',
            width: '100%', // Largeur à 100% pour occuper toute la largeur du formulaire
        },

        label: {
            marginBottom: '5px',
            fontWeight: 'bold',
        },

        button: {
            backgroundColor: '#247BA0',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            height: '40px',
            cursor: 'pointer',
            marginTop: '10px',
        },

        title: {
            fontSize: '24px', // Taille de police pour le titre
            marginBottom: '10px', // Espacement entre le titre et l'image
        },

        image: {
            width: '100px',
            marginBottom: '20px', // Espacement entre l'image et le formulaire
        },
    };

    return (
        <div style={styles.container}>
            <form style={styles.form}>
                <img src={Logo} alt="Logo de l'école" style={styles.image} /> {/* Image */}
                <h2 style={styles.title}>Se connecter</h2> {/* Titre en dessous de l'image */}
                <div>
                    <input type="text" name="name" placeholder='Identifiant' style={styles.input} />
                </div>
                <div>
                    <input type="password" name="password" placeholder='Password' style={styles.input} />
                </div>
                <div>
                    <Link to="/home">
                        <button type='submit' style={styles.button}>Connexion</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Signin;
