import {useReducer} from "react";

const reducers = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':{
            let isFormValid = true;
            for (const inputID in state.inputs) {
                if (inputID === action.inputID) {
                    isFormValid = isFormValid && action.isValid
                }else {
                    isFormValid = isFormValid && state.inputs[inputID].isValid
                }
            }

            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputID]: {
                        value:action.value,
                        isValid:action.isValid,
                    }
                },
                isFormValid:isFormValid
            }
        }
        default :{
            return state;
        }
    }
}

function useForm(insitialInputs , initialFormIsValid) {
    const [formState , dispatch] = useReducer(reducers , {
        inputs: insitialInputs,
        isFormValid: initialFormIsValid,
    });

    const onInputChange = (id, value, isValid) => {
        dispatch({
            type: "INPUT_CHANGE",
            value,
            isValid,
            inputID: id
        })
    }

    return [formState, onInputChange]

}

export default useForm;