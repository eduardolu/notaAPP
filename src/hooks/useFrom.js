import { useMemo, useState } from "react"

  
export const useFrom = ( iniciarForm={}, formValidation = {}) => {
    const [FromState, setFromState] = useState( iniciarForm )

    const formValidationMemo = useMemo(() => {
        const formCheckedValues = {}
        for (const formField of Object.keys( formValidation)) {
            const [fn, errorMenssage] = formValidation[formField];
            formCheckedValues[`${ formField }Valid`] = fn(FromState[formField]) ? null : errorMenssage;
        }
        return formCheckedValues;
    }, [FromState, formValidation])

    const isFormValid = useMemo(()=>{
        for (const formValue of Object.keys(formValidationMemo)) {
            if (formValidationMemo[formValue] !== null) return false;
        }
        return true;
    }, [formValidationMemo])

    const onInputChange =({target})=>{
        const {name,value}= target
        setFromState({
            ...FromState,
            [name]:value
        })
    }
    
    const onResertFrom =()=>{
        setFromState(iniciarForm)
    }

    return {
        ...FromState,
        FromState,
        onInputChange,
        onResertFrom,

        ...formValidationMemo,
        isFormValid,
    }
}
