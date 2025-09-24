function validate(schema){
    return(req,res,next) => {
        const possible = schema.safeParse(req.body);
        if(!possible.success){
            return res.json({ message: "wrong input type"});

        }
        req.body = possible.data;
        next();
    }
}

module.exports = { validate };