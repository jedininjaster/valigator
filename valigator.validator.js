var Validator = Valigator.Validator = function (validationFunction) {

    this._validationFunctions = {};
    this._isValid = false;
    this.onValidFunctions = {};
    this.onInvalidFunctions = {};
};

Validator.prototype.runValidation = function () {
    var functionName;
    var validationFunction;
    var isValid = true;
    //for every thing
    for(functionName in this._validationFunctions){
        //return if not own property
        if(!this._validationFunctions.hasOwnProperty(functionName)) return;

        validationFunction = this._validationFunctions[functionName];

        //if it is not valid
        if(!validationFunction()){
            //set form to false
            isValid = false;
        }
    }
    this._isValid = isValid;
    return this;
};

Validator.prototype.isValid = function () {



};

/**
 *
 * @param {String} name
 * @param validationFunction
 */
Validator.prototype.attachValidationFunction = function (name, validationFunction) {

    //check
    if(!( typeof validationFunction === 'function')){
        console.error('you must pass a validator function as an argument');
        return;
    }

    //check
    if(validationFunction.length !== 1){
        console.error('validation function must accept a val parameter');
    }

    //todo: add checks

    this._validationFunctions[name] = validationFunction;
};

/**
 *
 * @param {String} name
 * @param onValidFunction
 */
Validator.prototype.attachOnValidFunction = function (name, onValidFunction) {

    //todo: add checks

    this.onValidFunctions[name] = onValidFunction;
};

/**
 *
 * @param {String} name
 * @param onInvalidFunction
 */
Validator.prototype.attachOnInvalidFunction = function (name, onInvalidFunction) {

    //todo: add checks

    this.onInvalidFunctions[name] = onInvalidFunction;
};
