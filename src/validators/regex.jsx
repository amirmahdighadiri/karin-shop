
const textPhoneNumber =(value)=>{
    const emaliPattern = /^09\d{9}$/
    return emaliPattern.test(value);
}

const upperCaseRegex = (value)=>{
    const uppercasePattern = /^(?=.*[A-Z]).+$/
    return uppercasePattern.test(value);
}

const numberRegex = (value)=>{
    const numberPattern = /^(?=.*\d).+$/
    return numberPattern.test(value);
}
export default {textPhoneNumber,upperCaseRegex ,numberRegex}