import { useLoaderData, Link, Form } from "react-router-dom";

export default function Show(){
    const note = useLoaderData();
    return <section>
        <h2>{note.title}</h2>
        <p>{note.message}</p>
        <Link to={`/dashboard/${note._id}/update`}><button>Update</button></Link>
        <Form action={`/dashboard/${note._id}/delete`}><button>Delete</button></Form>
    </section>
}