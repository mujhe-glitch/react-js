import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {
  const { register, handleSubmit } = useForm();
  const [output, setOutput] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (data) => {
    
    if (!Array.isArray(data.hobbies)) {
      data.hobbies = data.hobbies ? [data.hobbies] : [];
    }

    console.log(data);
    setOutput(data);
    setIsSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Form Demo 2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>First Name:</label>
          <input type="text" {...register("firstname")} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" {...register("lastname")} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" {...register("age")} />
        </div>
        <div>
          <label>Gender:</label>
          <input type="radio" value="male" {...register("gender")} /> Male
          <input type="radio" value="female" {...register("gender")} /> Female
        </div>
        <div>
          <label>Hobbies:</label>
          <input type="checkbox" value="Reading" {...register("hobbies")} /> Reading
          <input type="checkbox" value="Traveling" {...register("hobbies")} /> Traveling
          <input type="checkbox" value="Sports" {...register("hobbies")} /> Sports
          <input type="checkbox" value="Music" {...register("hobbies")} /> Music
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>

      {isSubmitted && (
        <div>
          <h2>Form Output</h2>
          <p>First Name: {output.firstname}</p>
          <p>Last Name: {output.lastname}</p>
          <p>Email: {output.email}</p>
          <p>Age: {output.age}</p>
          <p>Gender: {output.gender}</p>
          <p>
            Hobbies:{" "}
            {output.hobbies ? output.hobbies.join(", ") : "None"}
          </p>
        </div>
      )}
    </div>
  );
};

