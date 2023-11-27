import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/regiister/Register';
import GameDetails from './components/game-details/GameDetails';

function App() {
    return (
        <AuthProvider>
            <div id="box">
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<GameList />} />
                    <Route path="games/create" element={<GameCreate />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="games/:gameId/details" element={<GameDetails />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>
            </div>
        </AuthProvider>
    )
}

export default App
