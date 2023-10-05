import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../03.globals/01.Pages/HomePage";
import Register from "../03.globals/01.Pages/Register";
import SignIn from "../03.globals/01.Pages/SignIn";
import AddEvent from "../03.globals/01.Pages/AddEvent"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/inscription" element={<Register />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/ajout-evenement" element={<AddEvent />} />
            
            // redirection automatique si la page n'existe pas
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Router;
