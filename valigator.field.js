/*

 form.fields.phoneNumber
 _val
 _getter
 validators


 */

var Field = Valigator.Field = function () {

    this._isValid = false;
    this._value;
    this._validators = {};

};


Field.prototype.runValidation = function () {

};


Field.prototype.isValid = function () {
    var validatorName;
    var validator;
    var isValid = true;
    //for every thing
    for(validatorName in this._validators){
        //return if not own property
        if(!this._validators.hasOwnProperty(validatorName)) return;

        validator = this._validators[validatorName];

        //if it is not valid
        if(!validator()){
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
Field.prototype.attachValidator = function (name, validator) {

    //todo: do checks

    this._validators[name] = validator;
};


Field.prototype.attachGetter = function (getterFunction) {

};