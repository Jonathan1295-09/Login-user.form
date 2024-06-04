import { useRouteLoaderData } from "react-router-dom";

export default function Index(){
    const notes = useRouteLoaderData()
    console.log(notes)

    return <div>
        {notes.map((note) => <div>
            <h1>{note.title}</h1>
        </div>)}
    </div>
}