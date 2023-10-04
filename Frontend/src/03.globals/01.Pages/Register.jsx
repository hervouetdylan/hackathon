import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../01.assets/img/download.png';

const Register = () => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'lightgray',
        },

        form: {
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Centrer les éléments horizontalement
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
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

        buttonContainer: {
            display: 'flex',
            justifyContent: 'center', // Centrer le bouton horizontalement
            marginTop: '15px', // Espacement entre le dernier input et le bouton
        },

        button: {
            backgroundColor: '#247BA0',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            height: '40px',
            cursor: 'pointer',
            width: '185px', // Largeur à 50% pour centrer le bouton dans le formulaire
        },
    };

    return (
        <div style={styles.container}>
            <form style={styles.form}>
                <img src={Logo} alt="Logo de l'école" />
                <h1>Create Account</h1>
                <div>
                    
                    <input type="text" name="name" placeholder='Identifiant' style={styles.input} />
                </div>
                <div>
                    
                    <input type="password" name="password" placeholder='Password' style={styles.input} />
                </div>
                <div>
                    
                    <input type="password" name="password" placeholder='Confirm password' style={styles.input} />
                </div>
                <div style={styles.buttonContainer}>
                    <Link to="/connexion">
                        <button type='submit' style={styles.button}>Inscription</button>
                    </Link>    
                </div>
            </form>
        </div>
    );
};

export default Register;
