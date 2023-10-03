import React from 'react';
import Logo from'../01.assets/img/download.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const styles = {
        navbar:  {
            position: 'fixed',
            top: '0',
            flexDirection: 'row'
        },

        img: {
            width: '100px',
            heigth: '20px'
        },

        titre: {
            color: 'blue'
        },

        button: {
            backgroundColor:'#247BA0',
            borderRadius:"5%",
        }
    };

    return (
        <div style={styles.navbar}>
            <img style={styles.img} src={ Logo } alt="logo de ynov nantes campus"/>
            <h1 style={styles.titre}>Yevent</h1>
            <div style={styles.button}>
                <Link to="/connexion">
                    <button style={styles.conexion}>Connexion</button>
                </Link>
                <Link to="/inscription">
                    <button style={styles.inscription}>Inscription</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;