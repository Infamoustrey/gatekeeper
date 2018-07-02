
/*
*   Require Middleware, filters out invalid requests
*   @param Array requiredParameters - Array of Parameters to fail a request on
*   @param Array optionalParameters - Array of Parameters to log a warning on
*/

module.exports = function (requiredParameters, optionalParameters) {

    return function(req, res, next){

        let missingRequired = [];
        
        // Check if request contains required parameters
        requiredParameters.forEach(p => {
            if(!req.body[p]) {missingRequired.push(p);}
        });

        // If missing any required parameters, stop the request
        if(missingRequired.length > 0 ){
            res.status(400).send('Bad Request. <br /> Missing the following parameters: \n' + missingRequired);
        }else{
            next();
        }
        
    }
    
}