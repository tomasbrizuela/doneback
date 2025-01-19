const express = require('express');
const supabase = require('../supabase');
const router = express.Router();

router.post('/userInfo', async (req, res) => {
    let all = req.headers.authorization
    let token = all.split(" ")[1];

    try {
        console.log("En el try")
        const { data: { user } } = await supabase.auth.getUser(token)
        if(!user){
            return res.status(400).json({"Error":  'Invalid authorization header format'})
        }
        console.log(user)
        return res.status(200).json({user})
    } catch (error) {
        console.log(error)
        return res.status(400).json({"Error": error})
    }
})

router.get('/provider/:provider', async (req, res) => {
    let {provider} = req.params
    const redirectUrl = 'https://done-nu.vercel.app/home'
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
        res.redirect(data.url);
    } catch (e) {
        console.log(e)
    }
})

module.exports = router;