const express = require('express');
const router = express.Router();
const supabase = require('../supabase');

router.get('/:id', async (req, res) => {
    let {id} = req.params;
    try {
        let { data, err } = await supabase
            .from('Tasks')
            .select('*')
            .eq('created_by', id)

        console.log(data)
        if(err){
            return res.status(400).json({"Error": err}) 
        }
        return res.status(200).json({"Message": data});
    } catch (e) {
        return res.status(500).json({"Error Message": e});
    }
})

module.exports = router;