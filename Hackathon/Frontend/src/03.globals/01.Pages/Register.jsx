import React from 'react';
import Logo from'../01.assets/img/download.png';

const Register = () => {
    return (
        <form>
            <div className='group'>
                <label htmlFor='login'>Identifiant</label>
                <input type="text" name="name" placeholder='Indentifiant'/>
            </div>
            <div className='group'>
                <label htmlFor='password'>Mot de passe</label>
                <input type="text" name="password" placeholder='Password'/>
            </div>
            <div className='group'>
                <label htmlFor='password'>Mot de passe</label>
                <input type="text" name="password" placeholder='Confirm password' />
            </div>
            <div className='group'>
                <button type='submit'>Inscription</button>
            </div>
        </form>
    );
};

export default Register;