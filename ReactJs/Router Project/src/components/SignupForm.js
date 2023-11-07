import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname : "",
        lastname : "",
        email : '',
        password : "",
        confirmPassword : ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("Student");

    function changeHandler ( event ) {
        setFormData((prevData) =>  (
            {
                ...prevData,
                [event.target.name] : event.target.value
            } )
        )
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password did not match");
        }else{
            setIsLoggedIn(true);
            toast.success("Account Created");
            navigate("/Dashboard");
        }
    }

  return (
    <div>
        {/* STudent instructor tab */}
        <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max mt-[10px] border-b-[0.25px]  border-white">
            <button className={`${
            accountType === "Student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`} 
          onClick={() => setAccountType("Student")}>
                Student
            </button>

            <button className={`${
            accountType === "Instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`} 
          onClick={() => setAccountType("Instructor")}>
                instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>

            <div className="flex gap-x-4 ">
            {/* First & Last Name */}
                <label className="w-full mt-[10px]">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name 
                    <sup className="text-pink-200">*</sup>
                    </p>
                    <input required type='text' name='firstname' value={formData.firstname} placeholder='Enter First Name' onChange={changeHandler} className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-[0.25px]  border-white" />
                </label>

                <label className="w-full mt-[10px]">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name 
                    <sup className="text-pink-200">*</sup>
                    </p>
                    <input required type='text' name='lastname' value={formData.lastname} placeholder='Enter Last Name' onChange={changeHandler} className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-[0.25px]  border-white" />
                </label>
            </div>
            
            {/* email address */}
            <div className='mt-[10px]'>
                <label className="w-full ">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address
                    <sup className="text-pink-200">*</sup>
                    </p>
                    <input required type='email' name='email' value={formData.email} placeholder='Enter Email Address' onChange={changeHandler} className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-[0.25px]  border-white" />
                </label>
            </div>
            

            {/* password confirm password */}
            <div className="flex gap-x-4">
                <label className="w-full relative mt-[10px]">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password 
                    <sup className="text-pink-200">*</sup>
                    </p>
                    <input required type={showPassword?"text":"password"} name='password' value={formData.password} onChange={changeHandler} placeholder='Enter password' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-[0.25px]  border-white"/>
                    <span className="absolute right-3 top-[38px] cursor-pointer z-10" onClick={() => {
                        setShowPassword(prev => !prev)
                    }}>
                        {
                        showPassword? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)
                        }
                    </span>
                </label>

                <label className="w-full relative mt-[10px]">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password 
                    <sup className="text-pink-200">*</sup>
                    </p>
                    <input required type={showConfirmPassword?"text":"password"} name='confirmPassword' value={formData.confirmPassword} 
                    onChange={changeHandler} placeholder='Confirm password' className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-b-[0.25px]  border-white" />
                    <span className="absolute right-3 top-[38px] cursor-pointer z-10" onClick={() => {
                        setShowConfirmPassword(prev => !prev)
                    }}>
                        {
                        showConfirmPassword? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                        }
                    </span>
                </label>
            </div>

            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-4 font-medium text-richblack-900 w-full border-b-[0.25px]  border-white">Create Account</button>
            
        </form>
    </div>
    
  )
}

export default SignupForm