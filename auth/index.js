const express = require ('express')
const router = express.Router();

router.get('/login',function(requ,res){
    res.send('this is login throught Auth Path');
})

router.get('/logout',(req,res)=>{
    res.send('you are out');
})

const recoveryhandler = (req,res) => {
    res.send('A recovery Path');
}

router.get('/recovery',recoveryhandler)

module.exports = router;