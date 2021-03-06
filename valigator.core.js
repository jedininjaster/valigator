//consider making a "validatable" inferface/parent class

var Valigator = {};
var Form;
Valigator.Form = Form;

//class definition for Form
Form = function() {
    this.fields = {};
    this.fieldLists = {};
    this.forms = {};
    this.formLists = {};
    this._isValid = false;

    return this;
};

/**
 *
 * @returns {boolean|*}
 */
Form.prototype.isValid = function() {
    return this.runValidation()._isValid;
};

/**
 *
 * @returns {Form}
 */
Form.prototype.runValidation = function() {
    this._runValidationOn(this.fields)
        ._runValidationOn(this.fieldLists)
        ._runValidationOn(this.forms)
        ._runValidationOn(this.formLists);
    return this;
};

/**
 *
 * @param validatables
 * @returns {Form}
 * @private
 */
Form.prototype._runValidationOn = function(validatables){
    var validatableName;
    var validatable;
    var isValid = true;
    //for every thing
    for(validatableName in validatables){
        //return if not own property
        if(!validatables.hasOwnProperty(validatableName)) continue;

        validatable = validatables[validatableName];

        //at this point
        // validatable is either a Field, FieldList, Form, or FormList
        // and implements isValid()

        //if it is not valid
        if(!validatable.isValid()){
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
 * @param {Object} validatable
 * @returns {Form}
 */
Form.prototype.attach = function(name, validatable) {

    if(validatable instanceof Valigator.Field){
        this.attachField(name, validatable);
    } else if(validatable instanceof Valigator.FieldList){
        this.attachFieldList(name, validatable);
    } else if(validatable instanceof Valigator.Form){
        this.attachForm(name, validatable);
    } else if(validatable instanceof Valigator.FormList){
        this.attachFormList(name, validatable);
    }

    return this;
};

/**
 *
 * @param name
 * @param {Valigator.Field} field
 */
Form.prototype.attachField = function(name, field){

    //todo: add type checks in here

    if(this.fields.name){
        //error
        console.log(name + ' already exists');
    } else {
        this.fields[name] = field;
    }
};

/**
 *
 * @param {String} name
 * @param {Valigator.FieldList} fieldList
 */
Form.prototype.attachFieldList = function(name, fieldList){

    //todo: add type checks in here

    if(this.fields.name){
        //error
        console.log(name + ' already exists');
    } else {
        this.fields[name] = fieldList;
    }
};

/**
 *
 * @param {String} name
 * @param {Valigator.Form} form
 */
Form.prototype.attachForm = function(name, form){

    //todo: add type checks in here

    if(this.forms.name){
        //error
        console.log(name + ' already exists');
    } else {
        this.forms[name] = form;
    }
};

/**
 *
 * @param {String} name
 * @param {Valigator.FormList} formList
 */
Form.prototype.attachFormList = function(name, formList){

    //todo: add type checks in here

    if(this.formLists.name){
        //error
        console.log(name + ' already exists');
    } else {
        this.formLists[name] = formList;
    }
};