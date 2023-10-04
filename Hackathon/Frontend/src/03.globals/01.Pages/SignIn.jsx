import React from 'react';
import { Link } from 'react-router-dom';
import Logo from'../01.assets/img/download.png';

const Signin = () => {
    return (
        <>
        <img src={Logo} alt="Logo de l'école" />
        <form className='form'>
            <div className='group'>
                <label htmlFor='login'>Identifiant</label>
                <input type="text" name="name" placeholder='Identifiant'/>
            </div>
            <div className='group'>
                <label htmlFor='password'>Mot de passe</label>
                <input type="text" name="password" placeholder='password'/>
            </div>
            <div className='group'>
                <Link to="/">
                    <button type='submit'>Connexion</button>
                </Link>
            </div>
        </form>
        </>
    );
};

export default Signin;