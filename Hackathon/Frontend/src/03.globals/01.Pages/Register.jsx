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
            flexDirection: 'column', // Utilisation de la disposition en colonne
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        },

        input: {
            color: '#000',
            border: '1px solid #000',
            height: '30px',
            margin: '10px 0',
        },

        label: {
            marginBottom: '5px', // Espacement entre le label et l'input
            fontWeight: 'bold', // Optionnel : mise en gras du label
        },

        button: {
            backgroundColor: '#247BA0',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            height: '60px',
            cursor: 'pointer',
            marginTop: '10px', // Espacement entre le dernier input et le bouton
        },
    };

    return (
        <div style={styles.container}>
            <form style={styles.form}>
                <img src={Logo} alt="Logo de l'école" />
                <h1>Create Account</h1>
                <div>
                    <label style={styles.label} htmlFor='login'>Identifiant</label>
                    <input type="text" name="name" placeholder='Identifiant' style={styles.input} />
                </div>
                <div>
                    <label style={styles.label} htmlFor='password'>Password</label>
                    <input type="password" name="password" placeholder='Password' style={styles.input} />
                </div>
                <div>
                    <label style={styles.label} htmlFor='password'>Confirm password</label>
                    <input type="password" name="password" placeholder='Confirm password' style={styles.input} />
                </div>
                <Link to="/connexion">
                    <button type='submit' style={styles.button}>Inscription</button>
                </Link>
            </form>
        </div>
    );
};

export default Register;
