import React from 'react'
import { useForm, Watch } from 'react-hook-form'

export const FormDemo12 = () => {
    
    const{register,handleSubmit,formState:{errors},watch}=useForm({mode:'onChange'})
    const password = watch("password","")
    const confirmPassword = watch("confirmPassword","")

    const submitHandler=(data)=>{
        alert('form submitted')
    }
    const passwordMatch = password == confirmPassword &&password !=="";
    console.log(passwordMatch)

    const validationSchema={
        passwordValidator:{
            required:{
                value:true,
                message:"password is required"
            },
        },
        confirmPasswordValidator:{
            required:{
                value:true,
                message:"confirm password is required*"
            },
            validate:(value)=>{
                value === password || "password does not match"
            }
        }
    }

    return (
    <div style={{textAlign:'center'}}>
        <h1>Form Demo 11</h1>
        <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label htmlFor="">Password</label>
            <input type="text" {...register("password",validationSchema.passwordValidator)}></input>
            {
                errors.password?.message
            }
        </div>
        <div>
            <label htmlFor="">Confirm Password</label>
            <input type='text' {...register("confirmPassword",validationSchema.confirmPasswordValidator)}></input>
            {errors.confirmPassword?.message}
        </div>
        {
            password && confirmPassword && <p style={{color:passwordMatch?"green":"red"}}>
                    {passwordMatch ? "password match":"password not matched"}
                </p>
    
    }
    <div>
                <input type='submit'></input>
            </div>
    </form>
    </div>
  )
}
