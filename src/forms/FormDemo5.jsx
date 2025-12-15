import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (data) => {
        console.log("Form Data:", data);
    }

    const validationSchema = {
        emailValidator: {
            required: { value: true, message: "Email is required" },
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email"
            }
        },
        passwordValidator: {
            required: { value: true, message: "Password is required" },
            minLength: { value: 6, message: "Password must be at least 6 characters" },
            maxLength: { value: 15, message: "Password must be less than 15 characters" }
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>FORM DEMO 5</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Email:</label>
                    <input type="text" {...register("email", validationSchema.emailValidator)} />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" {...register("password", validationSchema.passwordValidator)} />
                    <p>{errors.password?.message}</p>
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}
