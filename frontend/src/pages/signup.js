import { Form } from "react-router-dom";

export default function Signup(){
    return <Form action="/signup" method="post">
        <input type="text" name="username" placeholder="username"/>
    </Form>
}