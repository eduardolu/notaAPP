import { useMemo, useEffect, useState } from "react"

 
export const useFrom = ( iniciarForm={}, formValidation = {}) => {
    const [FromState, setFromState] = useState( iniciarForm )
    const [fomrValidation, setFomrValidation] = useState({})
    useEffect(() => {
        createValidators()
    }, [FromState])
    useEffect(() => {
      setFromState(iniciarForm)

    }, [iniciarForm])
    
    
    const isFormValid = useMemo(()=>{
        for (const formValue of Object.keys(fomrValidation)) {
            if (fomrValidation[formValue] !== null) return false;
        }
        return true;
    }, [fomrValidation])

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

    const createValidators = () =>{
        const formCheckedValues = {}
        for (const formField of Object.keys( formValidation)) {
            const [fn, errorMenssage] = formValidation[formField];
            formCheckedValues[`${ formField }Valid`] = fn(FromState[formField]) ? null : errorMenssage;
        }
        setFomrValidation(formCheckedValues);
    }



    return {
        ...FromState,
        FromState,
        onInputChange,
        onResertFrom,

        ...fomrValidation,
        isFormValid,
    }
}
