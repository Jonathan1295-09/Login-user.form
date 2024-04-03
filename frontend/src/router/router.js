import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "../App"

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element = {<App/>}>
        <Route path="/login" element= {<h1>login</h1>}/>
        <Route path="/signup" element= {<h1>login</h1>}/>
        <Route path="/logout" />
        <Route path="/dashboard" element= {<h1>Dashboard</h1>}>
            <Route path="" element={<h1>index</h1>}/>
            <Route path="/note/:id" element={<h1>Show</h1>}/>
            
        </Route>
        <Route path="/login" element= {<h1>login</h1>}/>
    </Route>
    </>
))