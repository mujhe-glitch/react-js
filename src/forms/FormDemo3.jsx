import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log("Error ", errors)

    const submitHandler = (data) => {
        alert('form submited')
        console.log(data)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Form Demo 3</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME</label>
                    <input type='text' {...register("name", { required: { value: true, message: "name is required" } })}></input>
                    {errors.name && errors.name.message}
                </div>
                <div>
                    <label>AGE</label>
                    <input type='text' {...register("age", { required: { value: true, message: "Age is required" } })}></input>
                    {errors.age?.message}
                </div>
                <div>
                    <input type='submit'></input>
                </div>
            </form>
        </div>
    )
}
