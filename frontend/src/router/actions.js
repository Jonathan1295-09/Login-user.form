import url from "./url"
import { redirect } from "react-router-dom"
import headers from "./headers"

export const signupAction = async ({request}) => {
    const formData =  await request.formData()

    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    await fetch(url + "/auth/signup", {
        method: "post",
        headers,
        body: JSON.stringify(user)
    })

    if(Response.status === 400){
        alert("failed signup")
        return redirect("/signup")
    }

    redirect("/login")
}

export const loginAction = async ({request}) => {
    const formData =  await request.formData()

    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    await fetch(url + "/auth/login", {
        method: "post",
        headers,
        body: JSON.stringify(user)
    })

    if(Response.status === 400){
        alert("failed login")
        return redirect("/login")
    }

    redirect("/dashboard")
}