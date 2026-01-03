import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./component/Navbar";
import { Header } from "./component/Header";
// import { Footer } from "./component/Footer";
import { Content } from "./component/Content";

import { MapDemo1 } from "./component/MapDemo1";
import { MapDemo2 } from "./component/MapDemo2";
import { MapDemo3 } from "./component/MapDemo3";
import { MapDemo4 } from "./component/MapDemo4";
import { MapDemp5 } from "./component/MapDemp5";

import { UseStateDemo1 } from "./component/UseStateDemo1";
import { UseStateDemo2 } from "./component/UseStateDemo2";
import { UseStateDemo3 } from "./component/UseStateDemo3";
import { UseStateDemo4 } from "./component/UseStateDemo4";

import { InputDemo1 } from "./component/InputDemo1";
import { InputDemo2 } from "./component/InputDemo2";
import { InputDemo3 } from "./component/InputDemo3";

import { NetflixHome } from "./netflix/NetflixHome";
import { NetflixMovie } from "./netflix/NetflixMovie";
import { NetflixShow } from "./netflix/NetflixShow";
import { Watch } from "./netflix/Watch";

import { Error404 } from "./component/Error404";
import { HomeCop } from "./component/HomeCop";

import { Users } from "./component/Users";
import { Employee } from "./task/Employee";
import { Students } from "./task/Student";
import { Books } from "./component/Books";
import { TableImpl } from "./component/TableImpl";
import { Item } from "./component/Item";

import { FormDemo1 } from "./forms/FormDemo1";
import { FormDemo2 } from "./forms/FormDemo2";
import { FormDemo3 } from "./forms/FormDemo3";
import { FormDemo4 } from "./forms/FormDemo4";
import { FormDemo5 } from "./forms/FormDemo5";
import { FormDemo6 } from "./forms/FormDemo6";
import { FormDemo7 } from "./forms/FormDemo7";
import { FormDemo8 } from "./forms/FormDemo8";
import { FormDemo9 } from "./forms/FormDemo9";
import { FormDemo10 } from "./forms/FormDemo10";
import { FormDemo11 } from "./forms/FormDemo11";
import { FormDemo12 } from "./forms/FormDemo12";

import { ApiDemo1 } from "./api/ApiDemo1";
import { ApiDemo2 } from "./api/ApiDemo2";
import { ApiDemo3 } from "./api/ApiDemo3";
import { OmdbApi1 } from "./api/OmdbApi1";
import { MovieDetails } from "./api/MovieDetails";
import { ApiDemo4 } from "./api/ApiDemo4";
import { ApiDemo5 } from "./api/ApiDemo5";
import { ApiDemo6 } from "./api/ApiDemo6";
import { UpdateUser } from "./api/UpdateUser";
import { Login } from "./api/Login";

import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApiDemo7 } from "./api/ApiDemo7";
import { UseRefDemo1 } from "./api/UseRefDemo1";
import { UseRefDemo2 } from "./api/UseRefDemo2";
import { UseMemo1 } from "./memo/UseMemo1";
import { FindMemo } from "./memo/FindMemo";
import { Student } from "./component/Student";
import { Whatsapp } from "./whatsapp/Whatsapp";
import { MuiTask1 } from "./mui/MuiTask1";
import { MuiDemo1 } from "./mui/MuiDemo1";
import { MuiDemo2 } from "./mui/MuiDemo2";
import MuiTask2  from "./mui/MuiTask2";


function App() {
  var title = "React";

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />

      <Navbar title={title} />

      <Routes>
        <Route path="/" element={<HomeCop />} />
        <Route path="/netflixhome" element={<NetflixHome />} />
        <Route path="/netflixmovies" element={<NetflixMovie />} />
        <Route path="/netflixshows" element={<NetflixShow />} />
        <Route path="/watch/:name" element={<Watch />} />
        <Route path="/users" element={<Users />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/books" element={<Books />} />
        <Route path="/tableimp" element={<TableImpl />} />
        <Route path="/item" element={<Item />} />

        {/* Forms */}
        <Route path="/formdemo1" element={<FormDemo1 />} />
        <Route path="/formdemo2" element={<FormDemo2 />} />
        <Route path="/formdemo3" element={<FormDemo3 />} />
        <Route path="/formdemo4" element={<FormDemo4 />} />
        <Route path="/formdemo5" element={<FormDemo5 />} />
        <Route path="/formdemo6" element={<FormDemo6 />} />
        <Route path="/formdemo7" element={<FormDemo7 />} />
        <Route path="/formdemo8" element={<FormDemo8 />} />
        <Route path="/formdemo9" element={<FormDemo9 />} />
        <Route path="/formdemo10" element={<FormDemo10 />} />
        <Route path="/formdemo11" element={<FormDemo11 />} />
        <Route path="/formdemo12" element={<FormDemo12 />} />

        {/* APIs */}
        <Route path="/apidemo1" element={<ApiDemo1 />} />
        <Route path="/apidemo2" element={<ApiDemo2 />} />
        <Route path="/apidemo3" element={<ApiDemo3 />} />
        <Route path="/omdbapi" element={<OmdbApi1 />} />
        <Route path="/moviedetail/:id" element={<MovieDetails />} />
        <Route path="/apidemo4" element={<ApiDemo4 />} />
        <Route path="/apidemo5" element={<ApiDemo5 />} />
        <Route path="/apidemo6" element={<ApiDemo6 />} />
        <Route path="/UpdateUser/:id" element={<UpdateUser />} />
        <Route path="/loginuser" element={<Login />} />
        <Route path="/apidemo7" element={<ApiDemo7/>}></Route>
        <Route path="/userefdemo1" element={<UseRefDemo1/>}></Route>
        <Route path="/userefdemo2" element={<UseRefDemo2/>}></Route>
        
        
        //usememo
        <Route path="/*" element={<Error404 />} />
        <Route path="/UseMemo1" element={<UseMemo1/>}></Route>
        <Route path="/findmemo" element={<FindMemo/>}></Route>

        //

        <Route path="/student11" element={<Student/>}></Route>

        <Route path="/whatsapp1" element={<Whatsapp/>}></Route>
        <Route path="/muitask1" element={<MuiTask1/>}></Route>
        <Route path="/muidemo1" element={<MuiDemo1/>}></Route>
        <Route path="/muidemo2" element={<MuiDemo2/>}></Route>
        <Route path="/muitask2" element={<MuiTask2/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
