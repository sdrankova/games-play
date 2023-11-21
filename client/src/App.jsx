import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';
import Register from './components/regiister/Register';
import GameDetails from './components/game-details/GameDetails';
import AuthContext from './contexts/authContext';
import { useState } from 'react';

function App() {
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = (values) => {
        console.log(values)
    };

    return (
        <div id="box">
            <AuthContext.Provider value={{ loginSubmitHandler }}>
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
