import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../01.assets/img/download.png';
import axios from "axios"

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
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (inscription) => {
        inscription.preventDefault();
        console.log("coucou");
         axios
        .post(`http://localhost:3000/login`, {pseudo, password})
        .then((res) => {

            // setUserContext(res.data[0])
            // console.log(userContext);
            navigate("/home");
        })
        .catch((err) => {
            console.warn("retour err", err);
        });
    }

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <img src={Logo} alt="Logo de l'école" style={styles.image} /> {/* Image */}
                <h2 style={styles.title}>Se connecter</h2> {/* Titre en dessous de l'image */}
                <div>
                    <label style={styles.label} htmlFor='login'>Identifiant</label>
                    <input required type="text" onChange={(event) => setPseudo(event.target.value)} name="name" placeholder='Identifiant' style={styles.input} />
                </div>
                <div>
                    <label style={styles.label} htmlFor='password'>Mot de passe</label>
                    <input required type="password" onChange={(event) => setPassword(event.target.value)} name="password" placeholder='Password' style={styles.input} />
                </div>
                <div>
                    
                        <button  type='submit' onSubmit={handleSubmit} style={styles.button}>Connexion</button>
                    
                </div>
            </form>
        </div>
    );
};

export default Signin;
