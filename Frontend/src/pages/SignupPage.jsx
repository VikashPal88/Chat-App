import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../hooks/useSignup'

function SignupPage() {
    const [selectedGender, setSelectedGender] = useState("")
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    const { loading, signup } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(inputs)
        try {
            await signup(inputs)
        } catch (error) {
            console.log(error)
        }

    }





    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Signup
                    <span className='text-blue-500'>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text '>Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Fullname'
                            className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text '>Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Username'
                            className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text '>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text '>Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Confirm Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* Gender Checkbox Goes Here */}
                    <div className='flex'>
                        <div className='form-control'>
                            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
                                <span className='label-text'>Male</span>
                                <input
                                    type='checkbox'
                                    className='checkbox border-slate-900'
                                    checked={inputs.gender === "male"}
                                    onChange={(e) => setInputs({ ...inputs, gender: "male" })}
                                />
                            </label>
                        </div>
                        <div className='form-control'>
                            <label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
                                <span className='label-text'>Female</span>
                                <input
                                    type='checkbox'
                                    className='checkbox border-slate-900'
                                    checked={inputs.gender === "female"}
                                    onChange={(e) => setInputs({ ...inputs, gender: "female" })}
                                />
                            </label>
                        </div>
                    </div>

                    <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>

                    <div>
                        <button
                            className='btn btn-block btn-sm mt-2'
                            disabled={loading}
                        >
                            {loading ? <span className='laoding loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignupPage
