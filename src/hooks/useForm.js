import { useCallback, useEffect, useState } from 'react'

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm)
  const [formValidation, setFormValidation] = useState({})


  useEffect(() => {
    createValidations()
  }, [formState])

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

  const createValidations = useCallback(() => {
    const formCheckedValues = {}
    for (const formField of Object.keys(formValidations)) {
      const [fn, msg = 'Este campo es obligatorio.'] =
        formValidations[formField]
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : msg
    }
    setFormValidation(formCheckedValues)
  }, [formState, formValidations])


  return {
    ...formState,
    ...formValidation,
    formState,
    onInputChange,
    onResetForm,
  }
}
