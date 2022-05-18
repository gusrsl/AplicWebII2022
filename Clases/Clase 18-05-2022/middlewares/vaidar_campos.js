const {validationResult} = require('express-validation');

const ValidarCampos = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        
        res.status(400).json(errors);
    }
    next();
}