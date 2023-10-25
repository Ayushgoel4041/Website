import React from 'react'
import { FaUserAlt, FaEye, FaEyeSlash } from 'react-icons/fa'
import { MdLock, MdEmail, MdPhone } from 'react-icons/md'
import { InputGroup, Input, InputLeftElement, InputRightElement, Button } from '@chakra-ui/react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import '../styles/login.scss'
const SignUp = () => {
    const [show, setShow] = useState(false)
    const handleChange = () => setShow(!show)



    const signupUser = async (e) => {
        e.preventDefault();
        const { name, email, phoneNumber, password } = data
        try {
            const { data } = await axios.post('/signup', {
                name, email, phoneNumber, password
            })
            if (data.error) {
                toast.error(data.error)
            }
            else {
                setData({})
                toast.success('Registration Successful')
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const [data, setData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
    })
        
    return (
        <div className='login'>
            <h1>REGISTER HERE</h1>

            <form onSubmit={signupUser}>

                <div className="name">
                    <InputGroup w='14%' focusBorderColor='lime' marginBottom={'20px'}>
                        <Input placeholder='Enter Your Name'
                            type='name'
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                        />
                        <InputLeftElement >
                            <FaUserAlt />
                        </InputLeftElement>
                    </InputGroup>
                </div>

                <div className="email">
                    <InputGroup w='14%' focusBorderColor='lime' marginBottom={'20px'}>
                        <Input placeholder='Enter Your Email' type='email' value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })} />
                        <InputLeftElement >
                            <MdEmail />
                        </InputLeftElement>
                    </InputGroup>
                </div>


                <div className="phoneNumber">
                    <InputGroup w='14%' focusBorderColor='lime' marginBottom={'20px'}>
                        <Input placeholder='Enter Your Phone Number' type='tel' value={data.phoneNumber}
                            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })} />
                        <InputLeftElement >
                            <MdPhone />
                        </InputLeftElement>
                    </InputGroup>
                </div>

                <div className="password">

                    <InputGroup w='14%' focusBorderColor='lime' marginBottom={'20px'}>
                        <InputLeftElement >
                            <MdLock />
                        </InputLeftElement>
                        <Input placeholder='Enter Your Password'
                            type={show ? 'text' : 'password'}
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                        />
                        <InputRightElement >
                            <button onClick={handleChange}>
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </InputRightElement>

                    </InputGroup>

                    <Button color={'twitter.400'} variant='outline' colorScheme={'twitter'} type='submit'>
                        SIGN UP
                    </Button>
                </div>
            </form>
        </div>
    )
}


export default SignUp