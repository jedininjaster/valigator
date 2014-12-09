/*

 form.fields.phoneNumber
 _val
 _getter
 validators


 */

var Field = Valigator.Field = function () {

    this._value;
    this._validators = {};

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