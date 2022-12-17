import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useNavigate} from 'react-router'


import {Regester } from '../API/User'; 



const SignIn = () => {
  const navigate=useNavigate()

  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handelSubmit=async(value)=>{
    await Regester(value)
    navigate('login')
  }

  return (
    <div className='Signin'>
        <Form className='form'>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>User username</Form.Label>
          <Form.Control type="user-username" placeholder="Enter your username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password}  onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary"  onClick={()=>handelSubmit({username,email,password})} >
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default SignIn