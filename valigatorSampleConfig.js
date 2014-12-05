//valigator does not make validation code smaller, but rather makes it easier to organize your code.

addressForm = {
    fields: {
    	
    }
}

masterForm = {
    fields: {
        cellPhone: {
            getterFunction: function() {
                // get using jquery
            },
            validated: function() {
                // return true if valid
            },
            onValidated: function() {
                // hide error message
            },
            onInvalidated: function() {
                // show error message
            }
        },
        anotherField: {

        }
    },
    forms: {

    }
}