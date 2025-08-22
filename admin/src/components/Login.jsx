import React, { useState } from 'react'
import Title from './Title'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) =>{
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl+'/api/user/admin',{email,password})
            if (response.data.success) {
                setToken(response.data.success)
                toast.success("Hello Admin")
            }else{
                toast.error(response.data.message)
            }
            
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
            
        }
    }


  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className='bg-white shodow-md rounded-lg px-8 py-6 max-w-md'>
            <div className='text-2xl text-center pt-8'>
                <Title text1={'Admin'} text2={'Login'}/>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-800 mb-1'>Email</p>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-400 outline-none' type="email" placeholder='Enter email' required />
                </div>
                <div className='mb- min-w-72'>

                <p className='text-sm font-medium text-gray-800 mb-1'>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-400 outline-none' type="password" placeholder='password' required />
                </div>
                <button className='mt-4 w-full py-2 px-4 rounded-md text-white bg-blue-500 ' type="submit"> Login </button>
            </form>
        </div>
    </div>
  )
}

export default Login