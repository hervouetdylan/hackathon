import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../03.globals/01.Pages/HomePage";
import Register from "../03.globals/01.Pages/Register";
import SignIn from "../03.globals/01.Pages/SignIn";
 

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/connexion" element={<Register />}/>
            <Route path="/Inscription" element={<SignIn />} />
            // redirection automatique si la page n'existe pas
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Router;
