import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      const res = await axios.get(
        `https://node5.onrender.com/user/user/${id}`
      );
      return res.data.data;
    },
  });

  const submitHandler = async (data) => {
    delete data._id;

    const res = await axios.put(
      `https://node5.onrender.com/user/user/${id}`,
      data
    );

    if (res.status === 200) {
      alert("User updated successfully!");
      navigate("/apidemo2", {
        state: { updatedUserId: id },
      });
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>UPDATE USER</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")} />
        </div>

        <div>
          <label>AGE</label>
          <input type="number" {...register("age")} />
        </div>

        <div>
          <label>EMAIL</label>
          <input type="text" {...register("email")} />
        </div>

        <div>
          <input type="submit" value="UPDATE" />
        </div>
      </form>
    </div>
  );
};
