import React, { Fragment, useState, useEffect } from 'react';
import { Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, InputGroup, InputGroupText, Row } from 'reactstrap';
import { CustomStyles, Username } from '../../Constant';
import { useForm } from 'react-hook-form';
import { Btn, H5, H4, H6 } from '../../AbstractElements';
import { AttendenceAction } from '../../redux/Action/RegisterAction';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formValues, setFormValues] = useState("")
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const { REGISTER_ACTION: add } = useSelector((store) => store.AttendenceUser)
    console.log("data", add);

    useEffect(()=>{
        if(sessionStorage.getItem('token')){
            navigate(`${process.env.PUBLIC_URL}/category`)
        }
    },[])

    const onSubmit = data => {
        if (data !== '') {
            setFormValues(data)
            alert('You submitted the form and stuff!');
            //fetchApi();
            rvalue();
        } else {
            errors.showMessages();
        }
    };

    //  console.log(formValues,"fv")
    const { fName,lName, email, password, confrimpassword } = formValues

    const rvalue = () => {
        const userObj = {
            "name": fName+""+lName,
            "email": email,
            "password": password,
            "c_password": confrimpassword
        }
        dispatch(AttendenceAction(userObj));
    }

    return (
        <Fragment>
            <div className="login-card">
                <Form className="needs-validation theme-form login-form" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                    <H4>Create your account</H4>
                    <H6>Enter your personal details to create account</H6>
                    <FormGroup>
                        <Label>Your Name</Label>
                        <div className="small-group">
                            <div className="input-group"><span className="input-group-text"><i className="icon-user"></i></span>
                                <input className="form-control" type="text" required="" placeholder="Fist Name"  name="fName" {...register('fName', { required: true })} /><br/>
                                <span style={{color:"#d22d3d"}}>{errors.fName && 'First name is required'}</span>
                            </div>
                            <div className="input-group"><span className="input-group-text"><i className="icon-user"></i></span>
                                <input className="form-control" type="text" required="" placeholder="Last Name" name="lName" {...register('lName', { required: true })} /><br/>
                                <span style={{color:"#d22d3d"}}>{errors.lName && 'Last name is required'}</span>
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email Address</Label>
                        <div className="input-group"><span className="input-group-text"><i className="icon-email"></i></span>
                            <input className="form-control" type="email" required="" placeholder="Test@gmail.com" name="email" {...register('email', { required: true })} />
                            <span style={{color:"#d22d3d"}}>{errors.email && 'Email is required'}</span>
                        </div>
                    </FormGroup>
                    <FormGroup className="position-relative">
                        <Label>Password</Label>
                        <div className="input-group"><span className="input-group-text"><i className="icon-lock"></i></span>
                            <input className="form-control" type="password" name="password" required="" placeholder="*********" {...register('password', { required: true })} />
                            <span style={{color:"#d22d3d"}}>{errors.password && 'Password is required'}</span>
                            {/* <div className="show-hide"><span className="show">                         </span></div> */}
                        </div>
                    </FormGroup>
                    <FormGroup className="position-relative">
                        <Label>Confrim Password</Label>
                        <div className="input-group"><span className="input-group-text"><i className="icon-lock"></i></span>
                            <input className="form-control" type="password" name="confrimpassword" required="" placeholder="*********" {...register('confrimpassword', { required: true })} />
                            <span style={{color:"#d22d3d"}}>{errors.confrimpassword && 'Confrim Password is required'}</span>
                            {/* <div className="show-hide"><span className="show">                         </span></div> */}
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Btn attrBtn={{ className: 'btn-block', color: 'primary', type: 'submit' }}>Create Account</Btn>
                    </FormGroup>
                </Form>
            </div>
           
        </Fragment>
    );
};

export default Register;