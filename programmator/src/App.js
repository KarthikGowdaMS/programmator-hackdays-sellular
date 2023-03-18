import Navbar from "./components/navbar";
import Main from "./components/main";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Events from "./components/events";
function App() {
    return (

        <Router>

            <Navbar />
            <Routes>
                <Route exact path='/' element={
                    <Main />
                } />
                <Route exact path='/events' element={
                    <Events />
                } />
            </Routes>

        </Router >

    );
}

export default App;
