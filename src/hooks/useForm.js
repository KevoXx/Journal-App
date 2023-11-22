import { useEffect, useMemo, useState } from 'react'

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm)
  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    createValidators()
  }, [formState])

  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false
    }
    return true
  }, [formValidation])

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  const createValidators = () => {
    const formCheckedValues = {}
    for (const formField of Object.keys(formValidations)) {
      const [fn, msg = 'Este campo es obligatorio.'] =
        formValidations[formField]
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : msg
    }
    setFormValidation(formCheckedValues)
    // console.log(formCheckedValues)
  }

  return {
    ...formState,
    ...formValidation,
    formState,
    isFormValid,
    onInputChange,
    onResetForm,
  }
}
