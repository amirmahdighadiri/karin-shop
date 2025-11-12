const requiredValue = "REQUIRED_VALUE";
const minValue = "MIN_VALUE";
const maxValue = "MAX_VALUE";
const phone = "PHONE_NUMBER";

export const requiredValidator = () => ({
    value: requiredValue,
});

export const minValidator = (min) => ({
    value: minValue,
    min,
});

export const maxValidator = (max) => ({
    value: maxValue,
    max,
});

export const phoneNumberValidator = () => ({
    value: phone,
})


export default {requiredValue, minValue, maxValue , phone}