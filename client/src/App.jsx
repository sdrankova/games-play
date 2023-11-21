import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';
import Register from './components/regiister/Register';
import GameDetails from './components/game-details/GameDetails';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async values => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password);

        setAuth(result);
        navigate(Path.Home);
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.email,
    };

    return (
        <div id="box">
            <AuthContext.Provider value={values}>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<GameList />} />
                    <Route path="games/create" element={<GameCreate />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="games/:gameId/details" element={<GameDetails />} />
                </Routes>
            </AuthContext.Provider>
        </div>
    )
}

export default App
