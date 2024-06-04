import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "../App"
import Login from "../pages/login"
import Signup from "../pages/signup"
import { loginAction, signupAction,logoutAction} from "./actions"
import Dashboard from "../pages/dashboard"
import { indexLoader } from "./loaders"

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element = {<App/>}>
        <Route path="/login" element= {<Login/>} action={loginAction}/>
        <Route path="/signup" element= {<Signup/>} action={signupAction}/>
        <Route path="/logout" action={logoutAction}/>
        <Route path="/dashboard/" element= {<Dashboard/>}>
            <Route path="" element={<h1>index</h1>} loader={indexLoader}/>
            <Route path="create" element={<h1>Create</h1>}/>
                <Route path=":id/" element={<h1>Show</h1>}>
                    <Route path="update" element={<h1>update</h1>}/>
                    <Route path="delete" element={<h1>delete</h1>}/>
                </Route>
         </Route>
    </Route>
    </>
))

export default router