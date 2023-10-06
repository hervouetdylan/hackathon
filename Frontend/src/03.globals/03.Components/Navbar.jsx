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
            alignItems: 'center',
            width: '100%',
            padding: '10px',
            backgroundColor: 'grey',
        },

        img: {
            width: '100px',
            height: '50px',
        },

        titre: {
            color: 'white',
            margin: '0', 
            fontSize: '24px', 
            textAlign: 'center', 
            flex: '1',
        },

        buttonContainer: {
            display: 'flex',
            alignItems: 'center',
        },

        connexion: {
            backgroundColor: 'red',
            borderRadius: '15px',
            margin: '0 10px',
            color: 'white',
            padding: '10px 20px', // Ajustez la largeur et la hauteur ici
            textDecoration: 'none',
        },

        inscription: {
            backgroundColor: 'white',
            borderRadius: '15px',
            margin: '0 10px',
            color: 'black',
            padding: '10px 20px', // Ajustez la largeur et la hauteur ici
            textDecoration: 'none',
        },
    };

    const handleLogoutClick = () => {
        throw new Error('C est pas ma faute c est à cause de Julien. Perdu Dylan, vue');
      };

      return (
        <div className="navbar">
          <img className="logo" src={Logo} alt="logo de ynov nantes campus" />
          <Link to="/home">
            <h1 className="title">Yevent</h1>
          </Link>
          <div className="button-container">
            <button className="connexion-button" onClick={handleLogoutClick}>
              Déconnexion
            </button>
          </div>
        </div>
      );    
};

export default Navbar;
