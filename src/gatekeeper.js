
class GateKeeper {

    constructor(){

    }

    Require(requiredParameters, optionalParameters) {
        return function(req, res, next){

            let missing = [];
            
            requiredParameters.forEach(p => {
                if(!req.body[p]) {missing.push(p);}
            });

            if(missing.length > 0 ){
                res.status(400).send('Bad Request. \n Missing the following parameters: \n' + missing);
            }else{
                next();
            }
            
        }
    }

}