import React, { Fragment, useEffect, useState } from 'react';
import { Btn, H4, H5, P, H6, UL, LI } from '../../AbstractElements';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';
import { EmailAddress, Password } from '../../Constant';
import { useForm } from 'react-hook-form';
import { LoginAction } from '../../redux/Action/LoginAction';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom"

const LoginForm = () => {
    const [formValues, setFormValues] = useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [logerr,setLogerr]=useState("")
    const [passerr,setpasserr]=useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(()=>{
        if(sessionStorage.getItem('token')){
            navigate(`${process.env.PUBLIC_URL}/category`)
        }
    },[])

    const { LOGIN_ACTION: add } = useSelector((store) => store.LoginUser)
    const { Error: err } = useSelector((store) => store.LoginUser)
    console.log("data", add);
    console.log("errror", err);

const handleSubmit=(e)=>{
    e.preventDefault();
    handleLogin();
}
console.log(logerr,"log",passerr,"fverr")
    
    const handleLogin = () => {
        const userObj = {
            "email": email,
            "password": password
        }
        dispatch(LoginAction(userObj, navigate));
    }

    const validation = () => {
		let result = true;
		if (email.length == 0 || password.length == 0) {
			result = false;
			//seterr(true)
		}
		return result;
	}

    return (
        <Fragment>
            <div className="login-card">
                <Form className="theme-form login-form needs-validation" noValidate="" onSubmit={handleSubmit}>
                    <H4>Login</H4>
                    <H6>Welcome back! Log in to your account.</H6>
                    <FormGroup>
                        <Label>{EmailAddress}</Label>
                        <div className="input-group"><span className="input-group-text"><i className="icon-email"></i></span>
                            <input className="form-control" type="email" required="" placeholder="Test@gmail.com" name="email" value={email} onChange={(e)=>setemail(e.target.value)} />
                            <br />
                           
                            {/* <span style={{ color: "#d22d3d" }}>{errors.email?.message}</span> */}
                        </div>
                        <span class="text-danger">{err.email}</span>
                    </FormGroup>
                    <FormGroup className="position-relative">
                        <Label>{Password}</Label>
                        <div className="input-group"><span className="input-group-text"><i className="icon-lock"></i></span>
                            <input className="form-control" type="password" required="" placeholder="*********" name="password" value={password} onChange={(e)=>setpassword(e.target.value)}  /><br />
                            
                            {/* <span style={{ color: "#d22d3d" }}>{errors.password?.message}</span> */}
                        </div>
                        <span class="text-danger">{err.password}</span>
                    </FormGroup>
                    <FormGroup>
                        <div className="checkbox">
                            <Input id="checkbox1" type="checkbox" />
                            <Label className="text-muted" for="checkbox1">Remember password</Label>
                        </div><a className="link" href="forget-password.html">Forgot password?</a>
                    </FormGroup>
                    <FormGroup>
                        {/* <button type='submit'>sign</button> */}
                        <Btn attrBtn={{ className: 'btn-block', color: 'primary', type: 'submit' }} >Sign in</Btn>
                    </FormGroup>
                    <div className="login-social-title">
                        <H5>Sign in with</H5>
                    </div>
                    <FormGroup>
                        <UL attrUL={{ as: 'ul', className: 'login-social flex-row' }} >
                            <LI><a href="https://www.linkedin.com/login" ><Linkedin /></a></LI>
                            <LI><a href="https://www.linkedin.com/login" ><Twitter /></a></LI>
                            <LI><a href="https://www.linkedin.com/login" ><Facebook /></a></LI>
                            <LI><a href="https://www.instagram.com/login" ><Instagram /></a></LI>
                        </UL>
                    </FormGroup>
                    <P>Don't have account?<Link className="ms-2" to={`${process.env.PUBLIC_URL}/register`}>Create Account</Link></P>
                </Form>
            </div>
        </Fragment>
    );
};

export default LoginForm;