import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo8 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm();
    console.log("error ",errors)
    const rafernceCode = ["abcd","pvr","pqr","xyz"]
    
    const submitHandler=(data)=>{
        console.log('data',data)
    }

    const validationSchema={
        constaValidator:{
            required:{
                value:true,
                message:"contact no is required"
            },
            patten:{
                value:true,
                message:'inquery code is not valid'
            }
        },
        InqureCodeValidator:{
            required:{
                value:true,
                message:'inqurey code is not valid'
            },
            validate:(param)=>{
                console.log('param ',param)
                return param=="royal" || "inq code is not valid"
            }
        },
        refCodeValidator:{
            required:{
                value:true,
                message:'refence code is not valid'
            },
            validate:(param)=>{
                console.log('param',param)
                return rafernceCode.includes(param) || 'invalid ref code...'
            }
        }
    }

    return (
    <div style={{textAlign:'center'}}>
        <h1>Form Demo 8</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>contact no</label>
                <input type='text' {...register("contactno",validationSchema.constaValidator)}></input>
                {errors.contactno?.message}
            </div>
            <div>
                <label>Inqurey code</label>
                <input type='text' {...register("Inqureycode",validationSchema.InqureCodeValidator)}></input>
                {errors.Inqureycode?.message}
            </div>
            <div>
                <label>Ref Code</label>
                <input type='text' {...register("refrencecode",validationSchema.refCodeValidator)}></input>
                {errors.refrencecode?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
