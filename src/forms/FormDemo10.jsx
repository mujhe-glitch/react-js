import React from 'react'
import { useForm } from 'react-hook-form';

export const FormDemo10 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm({mode:"onBlur"});

    const submitHandler=(data)=>{
        console.log(data)
    }

    const validationSchema={
        nameValidator:{
            required:{
                value:true,
                message:"name is required"
            },
            minLength:{
                value:3,
                message:'minimum length is 3 required'
            },
            maxLength:{
                value:10,
                message:'maximum length is 10 required'
            }
        }
    }
    return (
    <div style={{textAlign:'center'}}>
        <form action="">
            <div>
                <label>Name</label>
                <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>
            <div>
                <label>Email</label>
                <input type='text'{...register("email")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
