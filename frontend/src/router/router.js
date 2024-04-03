import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "../App"

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element = {<App/>}>
        <Route path="/login" element= {<h1>login</h1>}/>
        <Route path="/signup" element= {<h1>login</h1>}/>
        <Route path="/logout" />
        <Route path="/login" element= {<h1>login</h1>}/>
        <Route path="/login" element= {<h1>login</h1>}/>
    </Route>
    </>
))