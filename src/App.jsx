import './App.css'
import {useMatches, useRoutes} from "react-router-dom";
import routes from "./routes.jsx";
import {useEffect} from "react";

function App() {
    const router = useRoutes(routes)


    return (
        <>
            {router}
        </>
    )
}


export default App
