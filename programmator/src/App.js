import Navbar from "./components/navbar";
import Main from "./components/main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from "./components/events";
import Contact from "./components/contact-us";
import Login from "./components/login";
function App() {
    return (

        <Router>

            <Navbar />
            <Routes>
                <Route exact path='/' element={
                    <>
                        <Main />
                        <Contact />
                    </>

                } />
                <Route exact path='/events' element={
                    <Events />
                } />
                <Route exact path ='/register' element={
                    <Login />
                }/>
            </Routes>

        </Router >

    );
}

export default App;
