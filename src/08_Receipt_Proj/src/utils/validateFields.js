import React from 'react';

const validateFields = (name, value, required, minLength, pattern) => {
    const newErrors = [];

    if (required) {
        if (!value) {
            newErrors.push(`${name} is required! We'll never share your ${name} with anyone else.`);
        }
    }

    if (minLength) {
        if (value.length < minLength) {
            newErrors.push(`${name} must be at least ${minLength} characters`);
        }
    }
    if (pattern) {
        if (!pattern.test(value)) {
            newErrors.push(`${name} is invalid. Please enter correct ${name}.`);
        }
    }

    return newErrors;
}
export default validateFields;