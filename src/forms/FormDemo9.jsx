import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo9 = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    console.log("errors", errors);
    const selectedOptions = watch("hobbies", []);

    const submitHandler = (data) => {
        console.log("Form Data:", data);
    };

    const validationSchema = {
        checkboxValidator: {
            validate: () => {
                if (selectedOptions.length < 2) {
                    return "select 2 hobbies";
                }
                return true;
            }
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Form Demo 9</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Select your Hobbies:</label><br />

                    <input type="checkbox" value="Reading" {...register("hobbies", validationSchema.checkboxValidator)} /> Reading
                    <input type="checkbox" value="Music" {...register("hobbies")} /> Music 
                    <input type="checkbox" value="Traveling" {...register("hobbies")} /> Traveling
                    <input type="checkbox" value="Sports" {...register("hobbies")} /> Sports
                    <input type="checkbox" value="Gaming" {...register("hobbies")} /> Gaming

                    {errors.hobbies && (
                        <p>{errors.hobbies.message}</p>
                    )}
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};
