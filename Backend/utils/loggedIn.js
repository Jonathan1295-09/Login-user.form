import jwt from "jsonwebtoken"

async function loggedIn (req, res, next) {
    try{
        const { token = false } = req.cookies;
        if (token) {
            const payload = await jwt.verify(token, process.env.SECRET);
            req.payload = payload;
            next();
        } else {
            throw "Not logged In";
        }
        } catch (error) {
            res.status(400).json({error});
        }
}
