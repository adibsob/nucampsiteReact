export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least two characters.';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 character or less'
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least two characters.';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 character or less'
    }

    const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should only contain numbers.';
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain an @';
    }

    return errors;
}
