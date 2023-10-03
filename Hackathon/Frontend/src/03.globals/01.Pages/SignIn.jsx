import React from 'react';

const Register = () => {
    return (
        <form>
            <div className='group'>
                <label htmlFor='login'>Identifiant</label>
                <input type="text" name="name" />
            </div>
            <div className='group'>
                <label htmlFor='password'>Mot de passe</label>
                <input type="text" name="password" />
            </div>
            <div className='group'>
                <button type='submit'>Connexion</button>
            </div>
        </form>
    );
};

export default Register;