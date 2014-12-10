/**
 *
 * @type {Valigator.Field}
 */
Valigator.Field = function () {

    this._isValid = false;
    this._value;
    this._validators = {};
    this._getter = function () {
        console.error('this must be implemented');
    };
    return this;
};

/**
 *
 * @returns {Form._isValid|*}
 */
Valigator.Field.prototype.isValid = function () {
    return this.runGetter()
        .runValidation()
        ._isValid;
};

/**
 *
 * @returns {Valigator.Field}
 */
Valigator.Field.prototype.runGetter = function () {
    this._value = this._getter();
    return this;
};

/**
 *
 * @returns {Valigator.Field}
 */
Valigator.Field.prototype.runValidation = function () {
    var validatorName;
    var validator;
    var isValid = true;
    //for every thing
    for (validatorName in this._validators) {
        //return if not own property
        if (!this._validators.hasOwnProperty(validatorName)) continue;

        validator = this._validators[validatorName];

        //if it is not valid
        if (!validator()) {
            //set form to false
            isValid = false;
        }
    }
    this._isValid = isValid;
    return this;
};

/**
 *
 * @param {String} name
 * @param validator
 */
Valigator.Field.prototype.attachValidator = function (name, validator) {

    //todo: do checks

    this._validators[name] = validator;
};

/**
 *
 * @param getterFunction
 * @returns {Valigator.Field}
 */
Valigator.Field.prototype.attachGetter = function (getterFunction) {

    //todo: do checks

    this._getter = getterFunction;
    return this;
};