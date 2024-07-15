import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "../App"
import Login from "../pages/login"
import Signup from "../pages/signup"
import { loginAction, signupAction,logoutAction, createAction} from "./actions"
import Dashboard from "../pages/dashboard"
import { indexLoader, showLoader } from "./loaders"
import Index from "../pages"
import Create from "../pages/create"
import Show from "../pages/show"


const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element = {<App/>}>
        <Route path="/login" element= {<Login/>} action={loginAction}/>
        <Route path="/signup" element= {<Signup/>} action={signupAction}/>
        <Route path="/logout" action={logoutAction}/>
        <Route path="/dashboard/" element={<Dashboard/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path="create" element={<Create/>} action={createAction}/>
            <Route path=":id/" element={<Show/>} loader={showLoader}>
            <Route path="update" element={<h1>update</h1>}/>
            <Route path="delete" element={<h1>delete</h1>}/>
             </Route>
         </Route>
    </Route>
    </>
));

export default router