import React from 'react';
import Logo from'../01.assets/img/download.png';

const Navbar = () => {
    const styles = {
        body: {
            padding: '0',
            margin: '0'
        },

        navbar:  {
            position: 'fixed',
            top: '0',
            display: 'flex',
            justifyContent:'space-between',
            
        },

        img: {
            width: '100px',
            heigth: '20px',
            marginRight: '100px'
        },

        titre: {
            color: 'blue',
            marginLeft: '100px',
            marginRight: '100px'
        },

        button: {
            backgroundColor:'#247BA0',
        }
    };

    return (
        <div style={styles.navbar}>
            <img style={styles.img} src={ Logo } alt="logo de ynov nantes campus"/>
            <h1 style={styles.titre}>Yevent</h1>
            <div style={styles.button}>
                <button style={styles.conexion}>Connexion</button>
                <button style={styles.inscription}>Inscription</button>
            </div>
        </div>
    );
};

export default Navbar;