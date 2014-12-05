var Valigator = {};

//class definition for Valigator.Form
Valigator.Form = function() {
    this.fields = [];
    this.validationFuncs = [];
    /*private*/
    this._isValid = false;

};

Valigator.Form.prototype.runValidation = function() {
	// body...
};

Valigator.Form.prototype.isValid = function() {
    //todo: implement
    /*
	run validation and then return _isValid 
	or just return _isValid
	or provide args to decide which
		default to run validation?
	*/
};

Valigator.Form.prototype.addField = function() {
	// body...
};

return Valigator;