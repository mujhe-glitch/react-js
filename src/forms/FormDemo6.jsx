import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    console.log("Contact Info:", data);
  }

  const validationSchema = {
    nameValidator: {
      required: { value: true, message: "Name is required" },
      minLength: { value: 3, message: "Name must be at least 3 characters" }
    },
    phoneValidator: {
      required: { value: true, message: "Phone number is required" },
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Enter a valid 10-digit number"
      }
    },
    messageValidator: {
      required: { value: true, message: "Message cannot be empty" },
      maxLength: { value: 100, message: "Message must be under 100 characters" }
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>FORM DEMO 6</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name:</label>
          <input type="text" {...register("name", validationSchema.nameValidator)} />
          <p style={{ color: 'red' }}>{errors.name?.message}</p>
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" {...register("phone", validationSchema.phoneValidator)} />
          <p style={{ color: 'red' }}>{errors.phone?.message}</p>
        </div>
        <div>
          <label>Message:</label>
          <textarea {...register("message", validationSchema.messageValidator)} />
          <p style={{ color: 'red' }}>{errors.message?.message}</p>
        </div>
        <div>
          <input type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  )
}