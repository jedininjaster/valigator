/**
 *
 * @type {Function}
 */
var Validator = Valigator.Validator = function (validationFunction) {

    this._validationFunctions = {};
    this._isValid = false;
    this.onValidFunctions = {};
    this.onInvalidFunctions = {};
};

/**
 *
 * @returns {Validator}
 */
Validator.prototype.runValidation = function () {
    var functionName;
    var validationFunction;
    var isValid = true;
    //for every thing
    for (functionName in this._validationFunctions) {
        //return if not own property
        if (!this._validationFunctions.hasOwnProperty(functionName)) continue;

        validationFunction = this._validationFunctions[functionName];

        //if it is not valid
        if (!validationFunction()) {
            //set form to false
            isValid = false;
        }
    }
    this._isValid = isValid;

    //run function based on _isValid, feels like this should be a separate function
    //want this to happen whenever runValidation, right?
    if (this._isValid) {
        this.runOnValidFunctions();
    } else {
        this.runOnInvalidFunctions();
    }

    return this;
};

/**
 *
 * @returns {boolean|*}
 */
Validator.prototype.isValid = function () {
    this.runValidation();
    return this._isValid;
};

/**
 * run all the onValid functions
 */
Validator.prototype.runOnValidFunctions = function () {
    var functionName;
    var onValidFunction;
    //for every function
    for (functionName in this.onValidFunctions) {
        //return if not own property
        if (!this.onValidFunctions.hasOwnProperty(functionName)) continue;
        onValidFunction = this.onValidFunctions[functionName];
        onValidFunction();
    }
};

/**
 * run all the onInvalid functions
 */
Validator.prototype.runOnInvalidFunctions = function () {
    var functionName;
    var onInvalidFunction;
    //for every function
    for (functionName in this.onInvalidFunctions) {
        //return if not own property
        if (!this.onInvalidFunctions.hasOwnProperty(functionName)) continue;
        onInvalidFunction = this.onInvalidFunctions[functionName];
        onInvalidFunction();
    }
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

/**
 *
 * @param {String} name
 * @param validationFunction
 *
 * removed in favor of multiple onValid/onInvalid functions approach
 *
 */
//Validator.prototype.attachValidationFunction = function (name, validationFunction) {
//
//    //check
//    if(!( typeof validationFunction === 'function')){
//        console.error('you must pass a validator function as an argument');
//        return;
//    }
//
//    //check
//    if(validationFunction.length !== 1){
//        console.error('validation function must accept a val parameter');
//    }
//
//    //todo: add checks
//
//    this._validationFunctions[name] = validationFunction;
//};
