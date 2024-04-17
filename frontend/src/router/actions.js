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
}