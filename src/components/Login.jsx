import React from 'react'
import { FaUserAlt, FaEye, FaEyeSlash } from 'react-icons/fa'
import { MdLock } from 'react-icons/md'
import { InputGroup, Input, InputLeftElement, InputRightElement, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Registration from './SignUp'
import '../styles/login.scss'
const Login = () => {
    const [show, setShow] = useState(false)
    const handleChange = () => setShow(!show)

    return (
        <div className='login'>
            <h1>Login
            </h1>
            <form>

                <div className="email">
                    <InputGroup w='14%' focusBorderColor='lime' marginBottom={'20px'}>
                        <Input placeholder='Enter Your Email' type='email' name='email' />
                        <InputLeftElement >
                            <FaUserAlt />
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
                            name='password'
                        />
                        <InputRightElement >
                            <button onClick={handleChange}>
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </InputRightElement>

                    </InputGroup>

                    <Button color={'twitter.400'} variant='outline' colorScheme={'twitter'}>
                        LOGIN
                    </Button>
                    <div className="new_user">

                        <span>New User? </span>
                        <Link to={'Registration'}>
                            Click Here
                        </Link>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default Login 