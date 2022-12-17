import { useState } from "react";
import { login } from "../API/User";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import './Style.scss'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch,{username , password});
  };
  return (
<div className='login'>
        <Form className='form'>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>User username</Form.Label>
          <Form.Control type="user-username" placeholder="Enter your username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </Form.Group>
      <Row className="mb-3">
       

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password}  onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary"  onClick={handleClick}  disabled={isFetching}>
        Login
      </Button>
      {error && <span className="Error" >Something went wrong...</span>}
          <a href="./"><h5>DO NOT YOU REMEMBER THE PASSWORD?</h5></a>
          <br/>
          <a href="./SignIn">CREATE A NEW ACCOUNT</a>
    </Form>


    </div>
  );
};

export default Login;