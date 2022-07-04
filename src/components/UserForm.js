import React from 'react'
import { useForm } from 'react-hook-form'
export default function UserForm() {
  const { handleSubmit, formState } = useForm()
  const { isSubmitting } = formState
  function submitForm(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 4000)
    })
  }
  return (
    <div>
      <h2>Дорогой знаток эта кнопка дает тебе сыграть игру!</h2>
      <form onSubmit={handleSubmit(submitForm)}>
          <div className="mt-2">
              <button disabled={isSubmitting} className="btn btn-danger">
                {isSubmitting && (
                  <span className="spinner-grow spinner-grow-sm"></span>
                )}
                Играть
              </button>
          </div>
      </form>
    </div>
  )
}