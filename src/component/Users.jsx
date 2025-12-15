import React from 'react'
import { UserList } from './UserList'
import { MyButton } from '../common/MyButton'
export const Users = () => {
  var data = "User Data"
  var user = {
    id: 101,
    name: "ram",
    age: 19
  }
  
  const test = () => {
    alert('test function called');
  }
  const test1 = () => {
    alert('test 1 called');
  }
  return (
    
    <div style={{ textAlign: "center" }}>
      <h1>User Component</h1>
      {/* <UserList data={data} user={user}></UserList> */}
      <MyButton></MyButton>
      <UserList data={data} user={user} test={test} test1={test1}></UserList>
    </div>
  )
}

// import React from 'react'
// import { useForm } from 'react-hook-form'

// export const FormDemo7 = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const submitHandler = (data) => {
//     console.log("Registration Data:", data);
//   }

//   const validationSchema = {
//     username: {
//       required: { value: true, message: "Username is required" },
//       minLength: { value: 3, message: "Minimum 3 characters" }
//     },
//     gender: {
//       required: { value: true, message: "Please select gender" }
//     },
//     terms: {
//       required: { value: true, message: "You must accept terms" }
//     }
//   }

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>FORM DEMO 7</h1>
//       <form onSubmit={handleSubmit(submitHandler)}>
//         <div>
//           <label>Username:</label>
//           <input type="text" {...register("username", validationSchema.username)} />
//           <p style={{ color: 'red' }}>{errors.username?.message}</p>
//         </div>
//         <div>
//           <label>Gender:</label>
//           <select {...register("gender", validationSchema.gender)}>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <p style={{ color: 'red' }}>{errors.gender?.message}</p>
//         </div>
//         <div>
//           <label>
//             <input type="checkbox" {...register("terms", validationSchema.terms)} />
//             I accept the Terms and Conditions
//           </label>
//           <p style={{ color: 'red' }}>{errors.terms?.message}</p>
//         </div>
//         <div>
//           <input type="submit" value="Register" />
//         </div>
//       </form>
//     </div>
//   )
// }
