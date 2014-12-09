var Validator = Valigator.Validator = function (validationFunction) {

    if(!( typeof validationFunction === 'function')){
        console.error('you must pass a validator function as an argument');
        return;
    }

    if(validationFunction.length !== 1){
        console.error('validation function must accept a val parameter');
    }

    //this function must accept
    this._validationFunction = validationFunction;
    this._isValid = false;
    this.onValidFunctions = {};
    this.onInvalidFunctions = {};
};

Validator.prototype.isValid = function () {



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
