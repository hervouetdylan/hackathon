import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../01.assets/img/download.png';
import axios from "axios"

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

    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    const [dataPseudo, setDataPseudo] = useState();
    const [error, setError] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get(`http://localhost:3000/user`)
          .then((res) => {
            setDataPseudo(res.data);
          })
          .catch((err) => console.error(err));
      }, []);

    const handleSubmit = (inscription) => {
        inscription.preventDefault();

        const userExists = dataPseudo.find(
            (data) => data.pseudo.toLowerCase() === pseudo.toLowerCase()
          );
      
          if (userExists) {
            return setError(false);
          }
        return axios
        .post(`http://localhost:3000/user`, {pseudo : pseudo,password: password })
        .then((res)=>console.info(res), navigate("/connexion"))
        .catch((err)=>{console.warn(err);})
    }


    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <img src={Logo} alt="Logo de l'école" />
                <h1>Create Account</h1>
                <div>
                    <label style={styles.label} htmlFor='login'>Identifiant</label>
                    <input type="text" name="name" placeholder='Identifiant' onChange={(event) => setPseudo(event.target.value)} style={styles.input} />
                </div>
                <div>
                    <label style={styles.label} htmlFor='password'>Password</label>
                    <input type="password" name="password" placeholder='Password' onChange={(event) => setPassword(event.target.value)} style={styles.input} />
                </div>
                <div>
                    
                    <input type="password" name="password" placeholder='Confirm password' style={styles.input} />
                </div>
                <div style={styles.buttonContainer}>
                    
                        <button type='submit' onSubmit={handleSubmit} style={styles.button}>Inscription</button>
                    
                </div>
            </form>
        </div>
    );
};

export default Register;
