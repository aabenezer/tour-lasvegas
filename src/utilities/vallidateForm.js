
export const validateForm = (values) => {
    const errors = {};


    if (!values.firstName) {

        errors.firstName = ' This field is mandatory and must be filled out.';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'The input must be at least 2 characters.';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'The input must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'This field is mandatory and must be filled out.';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'The input must be at least 2 characters.';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'The input must be 15 characters or less';
    }

    const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }

    if (!values.email.includes('@')) {
        errors.email = 'Please provide a valid email address.';
    }

    return errors;
};