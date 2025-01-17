const express = require('express');
const supabase = require('../supabase');
const router = express.Router();

router.get('/userInfo', async (req, res) => {
    let {token} = req.headers.authorization.split(" ")[1];
    try {
        const { data: { user } } = await supabase.auth.getUser(token)
        if(user){
            return res.status(200).json({"data": user})
        }
    } catch (error) {
        return res.status(400).json({"Error": error})
    }
})

router.get('/:provider', async (req, res) => {
    let {provider} = req.params
    console.log("El provier es: " + provider)
    const redirectUrl = 'https://done-nu.vercel.app/home'
    console.log("Entro en el redirect!")
    try {
        let {data, error} = await supabase.auth.signInWithOAuth({
            provider: provider,
            options: {
                redirectTo: redirectUrl,
            },
        })
        if(error){
            return res.status(400).json({"error": error})
        }
        console.log(data)
        res.redirect(data.url);
    } catch (e) {
        console.log(e)
    }
})

module.exports = router;